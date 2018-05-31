function pickerCtrl($scope) {
    $scope.imagesUrls = [
        'http://c3.thejournal.ie/media/2017/12/mohamed-salah-liverpool_313ouzybw4l7zdnz5bcjn8c7-390x285.jpg',
        'http://c2.thejournal.ie/media/2016/08/liverpool-v-barcelona-pre-season-friendly-wembley-stadium-2-390x285.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv4n693Of-NuWnBrHd2-VRmjcfz3CVUV0naspUCYOx56QpX7Q'
    ]
}

module.exports = {
  template: require('./picker.html'),
  controller: pickerCtrl
}