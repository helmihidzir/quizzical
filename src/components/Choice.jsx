export default function Choice(props) {
    const styles = {
        backgroundColor: props.isChosen ? "#D6DBF5" : "white",
        borderColor: props.isChosen ? "none" : "#4D5B9E",
        border: props.isChosen ? "none" : ""
    }

    return (
        <button style={styles} className="choice">
            {props.value}
        </button>
    )
}