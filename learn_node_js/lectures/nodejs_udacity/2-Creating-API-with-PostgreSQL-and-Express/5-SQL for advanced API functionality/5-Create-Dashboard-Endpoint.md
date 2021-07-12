API Routes for Dashboards
The API routes we have looked at so far in this course have all been around action - CRUD actions. But that isn't always the case, sometimes a web app might just want specialized information from our API. An easy example of when this might be useful is for creating a dashboard page for admin or for a user profile in a front end application.

Here is a copy of the SQL Join that I created in the last section:

SELECT * FROM products INNER JOIN order_products ON product.id = order_products.id;

the question now is ... what model/handler should this query belong with? Being a join, it involves two tables, and not in a belongs-to relationship like orders and products. Even harder is that one of these tables is a Join table and not associated with a model. So what should we do?

QUIZ QUESTION
Given what you know so far in the course, take a guess of what you think would be a good option for adding this join query to the API





Creating a Service
At this point, I would say that our needs for this application have grown beyond our simple model - handler architecture. It would not make sense to cram this query onto the products table, or any of the other options discussed above. This JOIN query is business logic that does not belong in any model or handler, so we are going to put it in a new place, called a service.

I will add a services folder as a sibling of models and handlers. Services will have a file called dashboard.ts. Here, we can add various methods that get information from the database in the form of specialized select queries or joins. One thing is very important - the dashboard will run SQL queries to READ information from the database, but any actions on the database should be done through a model. This dashboard file is simply allowing us to isolate our informational queries together in one place, rather than spread them out across all the models. Since what information is shown in the dashboard is likely to change often, this will cut down time to edit dashboard queries when needed. This also fits conceptually, because a model is supposed to be the representation of your database table in the Node application, it should not be concerned with getting the 5 most recently added products, for example.

A service file is a place to write extra business logic that does not belong in a handler or a model or orchestrates changes with multiple models.

For another example, as the complexity of our logic for authorizing which users can see various pages grows, the logic to check JWTs for authorization rights would become its own service as well.

The Code
src/services/dashboard.ts --> orderedProducts

import Client from '../database'

export class DashboardQueries {
  // Get all products that have been included in orders
  async productsInOrders(): Promise<{name: string, price: number, order_id: string}[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT name, price, order_id FROM products INNER JOIN order_products ON product.id = order_products.id'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get products and orders: ${err}`)
    } 
  }
}
Things to note from this:

We import the database client and create a connection in the method just like a model, because this service is running queries on the database, they will just be READ-ONLY queries, instead of updating tables, so this is ok.
productsInOrders - sometimes, it is really hard to give a method a clear name, especially in situations like this. If you can't find a name that describes precisely what is going on, leave a comment like I did to explain what the name fails to convey.
Notice the return type from this typescript method -- it isn't a product, an order, or any other type we created in the models. This is another sign that we were right to put this method away in its own service rather than in products, it is returning a hybrid of two tables, and that would be messy to implement in any model file.
Now for the handler
We will create a separate handler file for these methods.

import express, { Request, Response } from 'express'

import { DashboardQueries } from '../services/dashboard'

const dashboardRoutes = (app: express.Application) => {
    app.get('/products_in_orders', productsInOrders)
}

const dashboard = new DashboardQueries()

const productsInOrders = async (_req: Request, res: Response) => {
  const products = await dashboard.productsInOrders()
  res.json(products)
}

export default dashboardRoutes
Things to note here:

This looks mostly like any other handler we created, but we aren't importing a model type, instead we are importing dashboard from services.
RESTful routes are great for describing actions taken through the API, but they begin to break down for informational routes like this. Most of this comes down to personal preference, but I try to stick with REST as long as I can, and then name routes in the most descriptive way I can think of, and leave comments. A good pattern for naming these routes in your application may emerge as you build out more of them, so pay attention situationally to what the best options are for naming your routes.



Dashboard Endpoint
In this exercise you will take two SQL queries and write the model and handler methods to add them to the API



Dashboard Endpoint Exercise Solution & Review
1. Adding the Join
For this solution I will use the SQL JOIN you created in the last exercise as an example, but if you created a new one just apply these principles to your own work.

SQL Join:

SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id;

The Dashboard service:

import Client from '../database'

export class DashboardQueries {
  // Get all users that have made orders
  async usersWithOrders(): Promise<{firstName: string, lastName: string}[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT first_name, last_name FROM users INNER JOIN orders ON users.id = orders.user_id'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get users with orders: ${err}`)
    } 
  }
Dashboard Route Handlers:

import express, { Request, Response } from 'express'

import { DashboardQueries } from '../services/dashboard'

const dashboardRoutes = (app: express.Application) => {
    app.get('/products-in-orders', productsInOrders)
    app.get('/users-with-orders', usersWithOrders)
}

const dashboard = new DashboardQueries()

const usersWithOrders = async (_req: Request, res: Response) => {
  const users = await dashboard.usersWithOrders()
  res.json(users)
}

const productsInOrders = async (_req: Request, res: Response) => {
  const products = await dashboard.productsInOrders()
  res.json(products)
}

export default dashboardRoutes
2. Adding the ORDER By
For this solution I will use the following ORDER BY query to get the 5 most expensive products:

SELECT name, price FROM products ORDER BY price DESC LIMIT 5;

Dashboard Service Method

  // Get all users that have made orders
  async fiveMostExpensive(): Promise<{name: string, price: number}[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT name, price FROM products ORDER BY price DESC LIMIT 5'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get products by price: ${err}`)
    } 
  }
Handler Method

import express, { Request, Response } from 'express'

import { DashboardQueries } from '../services/dashboard'

const dashboardRoutes = (app: express.Application) => {
    app.get('/five-most-expensive', fiveMostExpensive)
    app.get('/products-in-orders', productsInOrders)
    app.get('/users-with-orders', usersWithOrders)
}

const dashboard = new DashboardQueries()

const fiveMostExpensive = async (_req: Request, res: Response) => {
  const users = await dashboard.fiveMostExpensive()
  res.json(users)
}

const usersWithOrders = async (_req: Request, res: Response) => {
  const users = await dashboard.usersWithOrders()
  res.json(users)
}

const productsInOrders = async (_req: Request, res: Response) => {
  const products = await dashboard.productsInOrders()
  res.json(products)
}

export default dashboardRoutes

