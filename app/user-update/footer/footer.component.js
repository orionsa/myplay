function footerCtrl($scope) {
  $scope.footerItems={
    "live": "אפשרויות LIVE",
    "camera": "הפעל מצלמה",
    "manage-team":"ניהול קבוצה",
    "games":"משחקים" 
  }
}

module.exports = {
  template: require('./footer.html'),
  controller: footerCtrl,
}