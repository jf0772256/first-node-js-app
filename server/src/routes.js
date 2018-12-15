
module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world!'
    })
  })

  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.name}! Your username is ${req.body.email}. Your account has been established! Have lots of fun!`
    })
  })
}
