const router = require('express').Router();
const dashboardrouts = require('./dashboard-ruotes.js');
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardrouts);

module.exports = router;
