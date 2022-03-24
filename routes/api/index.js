const router = require('express').Router();
const thoughtRoute = require('./thought-routes');
const userRoutes = require('./user-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/thoughts', thoughtRoute);
router.use('/users', userRoutes);

module.exports = router;