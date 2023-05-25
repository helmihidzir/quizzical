import React from 'react'
import { decode } from 'html-entities'

export default function Choice(props) {
    const styles = {
        backgroundColor: props.isSelected ? "#D6DBF5" : "white",
        borderColor: props.isSelected ? "none" : "#4D5B9E",
        border: props.isSelected ? "none" : ""
    }

    return (
        <button className="choice" style={styles} onClick={() => props.checkAnswer()}>
            {decode(props.value)}
        </button>
    )
}