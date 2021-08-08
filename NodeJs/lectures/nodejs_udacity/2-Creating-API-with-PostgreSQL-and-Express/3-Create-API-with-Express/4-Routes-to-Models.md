Routes to Models
We're getting close to a fully operational API! In the last lesson we began to write some Express handlers for incoming requests, now we need to connect the last of the plumbing and make sure those handlers can interact with the model methods we created in the last lesson. This video walks through how to call model methods from handlers.

See
nd0067-fsjsnd-c2-l4-a03-requests-and-models-demo-v1_720p.mp4

Video Summary
We tie everything together by calling model methods in the handler functions


Exercise: Routes to Models



Routes to Models Tasks
In this exercise we will take the REST routes we created for articles in the last exercise and move them into their own handler file, then we'll have each route call a specific model method

Article Routes
If you need the routes we created as part of the last exercise, here they are again for you.

app.get('/articles', (req: Request, res: Response) => {
    try {
        res.send('this is the INDEX route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})

app.get('/articles/:id', (req: Request, res: Response) => {
    try {
       res.send('this is the SHOW route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.post('/articles', (req: Request, res: Response) => {
    const article: Article = {
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the CREATE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.put('/articles/:id', (req: Request, res: Response) => {
    const article: Article = {
      id: req.params.id, 
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the EDIT route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.delete('/articles/:id', (req: Request, res: Response) => {
    try {
       res.send('this is the DELETE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}




Exercise Solution
Here is an example handler file with model methods:

import express, { Request, Response } from 'express'
import { Article, ArticleStore } from '../models/article'

const store = new ArticleStore()

const index = async (_req: Request, res: Response) => {
  const articles = await store.index()
  res.json(articles)
}

const show = async (req: Request, res: Response) => {
   const article = await store.show(req.body.id)
   res.json(article)
}

const create = async (req: Request, res: Response) => {
    try {
        const article: Article = {
            title: req.body.title,
            content: req.body.content,
        }

        const newArticle = await store.create(article)
        res.json(newArticle)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const destroy = async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
}

const articleRoutes = (app: express.Application) => {
  app.get('/articles', index)
  app.get('/articles/:id', show)
  app.post('/articles', create)
  app.delete('/articles', destroy)
}

export default articleRoutes

