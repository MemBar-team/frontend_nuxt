import express from 'express'
import mysql2 from 'mysql2'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  console.log('express 起動')
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})


// const connection = mysql2.createConnection({
//   host: 'localhost',
//   user: 'dbuser',
//   password: 's3kreee7',
//   database: 'my_db'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

// Add POST - /api/login
router.post('/login', (req, res) => {
  console.log('-----post login-----')
  // console.log(mysql2)
  console.log(req.body)
  // console.log(req)
  // console.log(res.json({message}))
  if (req.body.username === 'demo@gmail.com' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo@gmail.com' }
    return res.json({ username: 'demo@gmail.com' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
