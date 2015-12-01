import template from './app.html';
import './app.sass';

import controller from './app.controller';

let AppComponent = ()=>{
  return{
    restrict:'E',
    scope:{},
    template,
    controller,
    controllerAs:'app',
    bindToController:true
  }
};

export default AppComponent;
