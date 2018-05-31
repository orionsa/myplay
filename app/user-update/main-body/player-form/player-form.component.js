function playerFormCtrl($scope) {
    $scope.placeHolders=["שם","שם משפחה","סיסמא","סיסמא חדשה","טלפון"];
    $scope.data=[];
    $scope.updateToParent=()=>{
        $scope.$parent.profileData = $scope.data;
        $scope.$parent.sendToServer()
    }
}


module.exports = {
  template: require('./player-form.html'),
  controller: playerFormCtrl
}