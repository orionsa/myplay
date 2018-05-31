function mainBodyCtrl($scope,$http){
    $scope.sendToServer = ()=> {
        $scope.profileJson={
            name: $scope.profileData[0],
            lastName: $scope.profileData[1],
            password: $scope.profileData[2],
            newPassword: $scope.profileData[3],
            phone: $scope.profileData[4],
            image: $scope.$parent.currentImageUrl
        }
       let data = $scope.profileJson
       $http.post('http://localhost:8125', data)
    };
    $scope.selectorCSS='selector hide'
    $scope.showCSS = false;
    $scope.changeCSS =(img)=>{
        if (!$scope.showCSS){
            $scope.selectorCSS='selector'
        }
        else{
            $scope.selectorCSS='selector hide'
        }    
        $scope.$parent.currentImageUrl = img;
        $scope.showCSS = !$scope.showCSS;
    }   
}
module.exports= {
    template: require('./main-body.html'),
    controller: mainBodyCtrl
}