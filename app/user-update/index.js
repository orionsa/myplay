import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './user-update.routes';
import topBar from './top-bar/top-bar.component';
import footer from './footer/footer.component';
import mainBody from './main-body/main-body.component';
import picker from './main-body/picker/picker.component';
import playerForm from './main-body/player-form/player-form.component'


export default angular.module('myPlay.user-update', [uirouter])
  .config(routes)
  .component('topBar', topBar)
  .component('footer', footer)
  .component('mainBody', mainBody)
  .component('picker',picker)
  .component('playerForm',playerForm)
  .name