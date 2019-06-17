import express from 'express'
import _ from 'lodash'
import mariadb from 'mariadb'

const config = {
  host: '127.0.0.1',
  user: 'root',
  password: 'Kk02170217',
  database: 'membar_db'
};

const connection = mariadb.createConnection(config);

// connection
//   .then(conn => {
//     console.log('DBアクセス')
//     const email = 'test@gmail.com';
//     conn.query(`SELECT user_email, user_password from users WHERE user_email="${email}"`)
//       .then(rows => {
//         // console.log(rows.length);
//         console.log(rows);
//         conn.end();
//       })
//       .catch(err => { 
//         //handle query error
//       });
//   })
//   .catch(err => {
//     //handle connection error
//   });

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

// Add POST - /api/login
router.post('/login', (req, res) => {
  console.log('-----post login-----')
  console.log(req.body)
  connection
    .then(conn => {
      console.log('POST DBアクセス')
      const email = req.body.username;
      const password = req.body.password;
      console.log(email)
      console.log(password)
      conn.query(`SELECT email, password from users WHERE email="${email}"`)
        .then(rows => {
          console.log(password === rows[0].password);
          console.log(email === rows[0].email);
          console.log(_.isEqual(email, rows[0].email));
          console.log(_.isEqual(password, rows[0].password));

          if (_.isEqual(email, rows[0].email) && _.isEqual(password, rows[0].password)) {
            console.log('ログイン成功')
            // req.session.authUser = { username: 'demo@gmail.com' }
            return res.json({ username: email })
          }
          // return res.json({ rows })
          // conn.end();
        })
        .catch(err => { 
          //handle query error
          console.log('エラー・・・')
        })
        .finally(() => {
          console.log('終了')
          conn.end();
        });
    })
    .catch(err => {
      //handle connection error
    });

  // if (req.body.username === 'demo@gmail.com' && req.body.password === 'demo') {
  //   req.session.authUser = { username: 'demo@gmail.com' }
  //   return res.json({ username: 'demo@gmail.com' })
  // }
  // res.status(401).json({ message: 'Bad credentials' })
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
