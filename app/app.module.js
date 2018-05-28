import angular from 'angular';
import uirouter from 'angular-ui-router';
import css from './app.scss';

import routes from './app.routes';
import userUpdate from './user-update'

angular.module('myPlay', [uirouter, userUpdate])
  .config(routes)