import React from "react"
import Quiz from "./components/Quiz.jsx"
import { nanoid } from "nanoid"

export default function App() {
    const [quiz, setQuiz] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setQuizData(data.results))
    }, [])

    function startQuiz() {
        setQuiz(true)
    }

    const quizElements = quizData.map(data =>
        <Quiz key={nanoid()} data={data} />
    )

    return (
        <main>
            {
                quiz ?
                    <div className="quiz-container">
                        {quizElements}
                    </div>
                :
                    <>
                        <h1 className="title">Anime Quizzical</h1>
                        <p className="description">Prove Yourself as a People of Culture</p>
                        <button className="start-quiz" onClick={startQuiz}>Start quiz</button>
                    </>
            }
        </main>
    )
}
