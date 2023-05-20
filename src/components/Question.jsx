import Choice from "./Choice.jsx"

export default function Question() {


    return (
        <div className="question-container">
            <p className="question">How would one say goodbye in Spanish?</p>
            <div className="choices">
                <Choice value="Adios" />
                <Choice value="Hola" />
                <Choice value="Au Revoir" />
                <Choice value="Salir" />
            </div>
        </div>
    )
}