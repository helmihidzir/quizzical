import React from "react"

export default function App() {
    const [quiz, setQuiz] = React.useState(false)

    function startQuiz() {
        setQuiz(true)
    }

    return (
        <main>
            {
                quiz ?
                    <>
                        Start game
                    </>
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
