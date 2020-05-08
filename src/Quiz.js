import React, { Component } from 'react';

const quizData = require('./quiz_data.json')

const sampleJSON = {
    "object": {
      "name": "Pluralsight",
      "number": 1,
      "address": "India",
      "website": "https://www.pluralsight.com/"
    }
  }
class Quiz extends Component{

    constructor(props){
        super(props);
        this.state = {quiz_position: 1}
    }
    render(){
        //console.log(quizData); 
        return <div>
            <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}
            </div></div>
    }
}
export default Quiz;