class AppController {
  constructor() {
    this.UserData = {"userName":false,"count":0,"CorrectAnswers":0};
    this.listQuestions = require('./listQuestions.json');
    this.ans="";

  }

  setDataForm(name){
    this.UserData['userName'] = name;
  }

  setReset(){
    this.UserData = {"userName":false,"count":0,"CorrectAnswers":0}
  }

  checkAnswer(array1,array2){
    (array1.length === this.compareArray(array1,array2))?this.UserData['CorrectAnswers']++:null;
    this.UserData['count'] = this.UserData['count'] + 1;
    this.ans="";
  }

  compareArray(array1,array2){
    if (typeof(array1) !== typeof(array2)) return 0;
    if (array1.length !== array2.length) return 0;
    let on = 0;
    for (var i = 0; i < array1.length; i++) {
      for (var t = 0; t < array2.length; t++) {
        if (array1[i] === array2[t]) {
          on++
        }
      }
    }
    return on;
  }

}

export default AppController;
