// Define common path
const path = '/api'

// 
var users = require('./routers/users.js');

// Root Routes
app.get('/', function (req, res) {
  res.json({
     status: 'API Its Working',
     message: 'Welcome to RESTHub crafted with love!',
  });
});

// User Routes

  //.put(UserController.updateUser)
  //.post(UserController.createUser);

//router.route(`${path}/users/:userId`)
  //.get(UserController.readUser)
  //.delete(UserController.deleteUser);


// Other Routes
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

export default router