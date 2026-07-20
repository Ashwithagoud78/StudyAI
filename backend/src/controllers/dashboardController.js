const { getDashboardData } = require('../services/dashboardService');

function getDashboard(req, res) {
  res.status(200).json({
    success: true,
    data: getDashboardData()
  });
}

module.exports = {
  getDashboard
};
