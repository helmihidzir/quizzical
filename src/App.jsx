import React from "react"
import Quiz from "./components/Quiz.jsx"
import { nanoid } from "nanoid"

export default function App() {
    const [quiz, setQuiz] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => {

                let quizObj = data.results.map(d => {
                    let question = d.question
                    let choices = createChoices(d.correct_answer, d.incorrect_answers)

                    return {
                        id: nanoid(),
                        question: question,
                        correctAnswer: d.correct_answer,
                        choices: choices,
                        isSelected: false,
                        isSelectedCorrect: false,
                        answerStyles: ""
                    }
                })

                setQuizData(quizObj)
            })
    }, [])

    function startQuiz() {
        setQuiz(true)
    }

    function createChoices(correctAnswer, incorrectAnswers) {
        console.log(correctAnswer)

        incorrectAnswers.push(correctAnswer)
        return incorrectAnswers.sort(() => Math.random() - 0.5)
    }

    function updateChoice(id, isSelected, isSelectedCorrect) {
        setQuizData(prevQuizData =>
            prevQuizData.map(qd => {
                return qd.id === id ?
                    {
                        ...qd,
                        isSelected: isSelected,
                        isSelectedCorrect: isSelectedCorrect
                    } :
                    qd
            })
        )
    }

    function revealAnswers() {
        setQuizData(prevQuizData =>
            prevQuizData.map(qd => {
                return qd.isSelected === true ?
                    {
                        ...qd,
                        answerStyles: (qd.isSelectedCorrect === true ? "correct-answer" : "incorrect-answer")
                    } :
                    qd
            })
        )
        console.log(quizData)
    }

    const quizElements = quizData.map(data =>
        <Quiz key={data.id} data={data} updateChoice={updateChoice} />
    )

    return (
        <main>
            {
                quiz ?
                    <div className="quiz-container">
                        {quizElements}

                        <button className="check-answer" onClick={revealAnswers}>Check answers</button>
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
