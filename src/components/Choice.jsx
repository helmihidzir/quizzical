import React from 'react'
import { decode } from 'html-entities'
import {nanoid} from "nanoid";

export default function Choice(props) {
    const [isSelected, setIsSelected] = React.useState(false)

    function handleClick() {
        setIsSelected(!isSelected)
    }

    const styles = {
        backgroundColor: isSelected ? "#D6DBF5" : "white",
        borderColor: isSelected ? "none" : "#4D5B9E",
        border: isSelected ? "none" : ""
    }

    return (
        <button className="choice" style={styles} onClick={() => { handleClick() }}>
            {decode(props.value)}
        </button>
    )
}