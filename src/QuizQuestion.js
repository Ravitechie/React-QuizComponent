import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js'


class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false
        }
    }
    handleClick(buttonText) {
        let isTrue =true;
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            isTrue =false;
        }
        this.setState({ incorrectAnswer: isTrue })

    }
    render() {
        console.log(this.props.quiz_question);
        return <main>
            <section>
                <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    {this.props.quiz_question.answer_options.map((value, index) => {
                        return <QuizQuestionButton clickHandler={this.handleClick.bind(this)} button_text={value}
                            key={index} />
                    })}
                </ul>
            </section><div>{
                this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null  }
            </div>
        </main>
    }

}

export default QuizQuestion;