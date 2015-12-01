import angular from "angular";
import './lib/bindonce';
import './lib/checklist-model';

import 'bootstrap/dist/css/bootstrap.min.css'

import AppComponent from './app.component'

let App = angular.module('marketingTester',[
  'pasvaz.bindonce',
  'checklist-model'
])
.directive('app',AppComponent);

console.log('I\'am ready!');
