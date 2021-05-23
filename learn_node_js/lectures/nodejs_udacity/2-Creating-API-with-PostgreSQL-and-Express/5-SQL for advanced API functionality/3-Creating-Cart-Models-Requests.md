Video Summary
This lesson shows how to create endpoints for the many to many relationship we created in the last section to give the API cart functionality.

Nested REST routes to show relationships

See nd0067-fsjsnd-c2-l6-a03-creating-a-cart-v2_720p


Exercise: Creating A Cart

Adding API support for cart functionality.
In this exercise you are tasked with setting up the tables, queries, models, and routes to provide basic cart functionality.

Exercise solution
Part 1: SQL
I'm only going to include the up side of each migration, as the down side to drop the table is familiar to you by now.

Products UP

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price integer NOT NULL
);
Orders UP

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(15),
    user_id bigint REFERENCES users(id)
);
Order-Products UP

CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES products(id)
);
Part 2: Model Method
We added the method to attach a product to and order in the order model.

  async addProduct(quantity: number, orderId: string, productId: string): Promise<Order> {
    try {
      const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *'
      //@ts-ignore
      const conn = await Client.connect()

      const result = await conn
          .query(sql, [quantity, orderId, productId])

      const order = result.rows[0]

      conn.release()

      return order
    } catch (err) {
      throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`)
    }
  }
Notice that the model is referencing the order_products table.

Part 3: Handler Method
const orderRoutes = (app: express.Application) => {
    app.get('/orders', index)
    app.get('/orders/:id', show)
    app.post('/orders', create)
    // add product
    app.post('/orders/:id/products', addProduct)
}

// ... other methods
const addProduct = async (_req: Request, res: Response) => {
  const orderId: string = _req.params.id
  const productId: string = _req.body.productId
  const quantity: number = parseInt(_req.body.quantity)

  try {
    const addedProduct = await store.addProduct(quantity, orderId, productId)
    res.json(addedProduct)
  } catch(err) {
    res.status(400)
    res.json(err)
  }
} 
Notice the nesting of the REST routes with addProduct. We can show how the product belongs to a single order. If we were to add a user as an owner of the order, we might do something like this:

/users/:userID/orders/:orderID/products

Extra Challenge
Where would be the best place to add the logic for making sure the order is open and can have new products added to it? In a real application, I would actually create a layer of files between handlers and models to hold business logic like this, because we will quickly overburden our handlers or models with this kind of logic. But for this exercise and with how small this application is, I would add it to the model. Here is a quick example:

async addProduct(quantity: number, orderId: string, productId: string): Promise<Order> {
    // get order to see if it is open
    try {
      const ordersql = 'SELECT * FROM orders WHERE id=($1)'
      //@ts-ignore
      const conn = await Client.connect()

      const result = await conn.query(ordersql, [orderId])

      const order = result.rows[0]

      if (order.status !== "open") {
        throw new Error(`Could not add product ${productId} to order ${orderId} because order status is ${order.status}`)
      }

      conn.release()
    } catch (err) {
      throw new Error(`${err}`)
    }

    try {
      const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *'
      //@ts-ignore
      const conn = await Client.connect()

      const result = await conn
          .query(sql, [quantity, orderId, productId])

      const order = result.rows[0]

      conn.release()

      return order
    } catch (err) {
      throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`)
    }
  }
