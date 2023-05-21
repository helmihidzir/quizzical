import React from "react"
import Choice from "./Choice.jsx"
import { nanoid } from "nanoid"
import { decode } from 'html-entities';

export default function Quiz(props) {
    const [allAnswers, setAllAnswers] = React.useState([])

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5)
    }

    function getChoices() {
        let incorrect_answers = props.data.incorrect_answers
        let correct_answer = props.data.correct_answer
        console.log(correct_answer)
        incorrect_answers.push(correct_answer)
        shuffleArray(incorrect_answers)
        return incorrect_answers
    }

    function isChosen() {

    }

    const all_answers = getChoices()

    const choiceElements = all_answers.map(choice =>
        <Choice key={nanoid()} value={choice} />
    )

    return (
        <div className="question-container">
            <p className="question">{decode(props.data.question)}</p>
            <div className="choices">
                {choiceElements}
            </div>
        </div>
    )
}