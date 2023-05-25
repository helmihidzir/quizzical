import React from "react"
import Choice from "./Choice.jsx"
import { nanoid } from "nanoid"
import { decode } from 'html-entities';

export default function Quiz(props) {
    const [isSelected, setIsSelected] = React.useState(props.data.isSelected)

    function checkAnswer(choice) {
        setIsSelected(!isSelected)
        const isSelectedCorrect = props.data.correctAnswer === choice ? true : false
        console.log(`isSelected: ${isSelected}`)
        
        props.updateChoice(props.data.id, isSelected, isSelectedCorrect)
    }

    const choiceElements = props.data.choices.map(choice =>
        <Choice key={nanoid()} value={choice} checkAnswer={() => checkAnswer(choice)} isSelected={isSelected} />
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