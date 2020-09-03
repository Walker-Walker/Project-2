const router = require('express').Router();
const homeRoutes = require('./homepage-routes');
const dashboardRoutes = require('./dashboard-routes')
const apiRoutes = require('./api');

// const mapRoutes = require('./map-routes')

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// router.use('/map', mapRoutes);


module.exports = router;