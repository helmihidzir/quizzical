import React from "react"
import Choice from "./Choice.jsx"
import { nanoid } from "nanoid"

export default function Quiz(props) {
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5)
    }

    let incorrect_answers = props.data.incorrect_answers
    let correct_answer = props.data.correct_answer
    incorrect_answers.push(correct_answer)
    const choices = shuffleArray(incorrect_answers)

    const choiceElements = choices.map(choice =>
        <Choice key={nanoid()} value={choice} />
    )

    return (
        <div className="question-container">
            <p className="question">{props.data.question}</p>
            <div className="choices">
                {choiceElements}
            </div>
        </div>
    )
}