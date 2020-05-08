import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json')


class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 };
    }
    render() {
        //console.log(quizData); 
        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;
        console.log(isQuizEnd);
        return (
            <div className="QuizQuestion">
                {
                    isQuizEnd ? <QuizEnd /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                }
            </div>)
    }
}
export default Quiz;