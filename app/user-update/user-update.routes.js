function userUpdateCtrl($scope){
  $scope.currentImageUrl = 'http://c3.thejournal.ie/media/2017/12/mohamed-salah-liverpool_313ouzybw4l7zdnz5bcjn8c7-390x285.jpg';
}

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('user-update', {
      url: '/',
      template: require('./user-update.html'),
      controller: userUpdateCtrl,
    });
}