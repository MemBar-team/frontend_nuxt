import express from 'express'
import _ from 'lodash'
import mariadb from 'mariadb'
import uuid from 'uuid/v4'
import moment from 'moment'
import RoutePostList from './routes/post_list'

const config = {
  host: '127.0.0.1',
  user: 'root',
  password: 'Kk02170217',
  database: 'membar_db'
};

const connection = mariadb.createConnection(config);

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

// app.use('/register', register);

router.use((req, res, next) => {
  console.log('express 起動')
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  // console.log(res.req)
  // console.log(req)
  next()
})

// app.use('/', RoutePostList)

router.post('/signup', (req, res, next) => {
  console.log('signup ---==')
  console.log(req.body)
  const userId = uuid();
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = 'INSERT INTO users (user_id, user_name, email, password, created_at) VALUES ("' + userId + '", ' + '"' + userName + '", ' + '"' + email + '", ' + '"' + password + '", ' + '"' + createdAt + '")';

  connection
    .then(conn => {
      conn.query(query)
        .then(rows => {
          // if (_.isEqual(email, rows[0].email) && _.isEqual(password, rows[0].password)) {
          //   console.log('ログイン成功')
          //   // req.session.authUser = { username: 'demo@gmail.com' }
          //   return res.json({ username: email })
          // }
          // return res.json({ rows })
          return res.json({ username: email })
          conn.end();
        })
        .catch(err => {
          //handle query error
          console.log('エラー・・・')
        })
        .finally(() => {
          console.log('終了')
          // conn.end();
        });
    })
    .catch(err => {
      //handle connection error
    });
});

// Add POST - /api/login
router.post('/login', (req, res) => {
  console.log('-----post login-----')
  console.log(req.body)
  connection
    .then(conn => {
      const email = req.body.username;
      const password = req.body.password;

      conn.query(`SELECT email, password from users WHERE email="${email}"`)
        .then(rows => {
          if (_.isEqual(email, rows[0].email) && _.isEqual(password, rows[0].password)) {
            console.log('ログイン成功')
            // req.session.authUser = { username: 'demo@gmail.com' }
            return res.json({ username: email })
          }
          conn.end();
        })
        .catch(err => {
          //handle query error
          console.log('エラー・・・')
        })
        .finally(() => {
          console.log('終了')
          // conn.end();
        });
    })
    .catch(err => {
      //handle connection error
    });
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
