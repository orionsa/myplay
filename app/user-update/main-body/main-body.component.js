function mainBodyCtrl($scope,$http){
    $scope.img1='http://c3.thejournal.ie/media/2017/12/mohamed-salah-liverpool_313ouzybw4l7zdnz5bcjn8c7-390x285.jpg';
    $scope.img2='http://c2.thejournal.ie/media/2016/08/liverpool-v-barcelona-pre-season-friendly-wembley-stadium-2-390x285.jpg';
    $scope.img3='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv4n693Of-NuWnBrHd2-VRmjcfz3CVUV0naspUCYOx56QpX7Q';
    $scope.check = ()=> {
        $scope.profile={
            name: $scope.name,
            lastName: $scope.lastName,
            password: $scope.password,
            newPassword: $scope.newPassword,
            phone: $scope.phone,
            image: $scope.$parent.currentImageUrl
        }
        let data = $scope.profile
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