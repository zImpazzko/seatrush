import {useState} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function EventCard(props) {
    return (
        <article>
            <h2>{props.name}</h2>
            <p>{props.venue}</p>
            <button type="button" onClick={props.onClick}>Обрати концерт</button>
        </article>
    )
}

const concerts = [
    {id: 2, name: "Jazz Night", venue: "Odesa"},
    {id: 1, name: "Chervonyi Mak", venue: "Lviv"}
]

function App() {
    const [count, setCount] = useState(0)
    const [selectedConcert, setSelectedConcert] = useState(null)

    const cards = concerts.map(concert =>
        <EventCard onClick={ () => {setSelectedConcert(concert)} }
                   key={concert.id}
                   name={concert.name}
                   venue={concert.venue}/>
    )

    return (
        <>
            <section id="center">
                <div className="hero">
                    <img src={heroImg} className="base" width="170" height="179" alt=""/>
                    <img src={reactLogo} className="framework" alt="React logo"/>
                    <img src={viteLogo} className="vite" alt="Vite logo"/>
                </div>
                <div>
                    <h1>SeatRush</h1>
                    {cards.length === 0 ? <p>Концертів поки немає</p> : cards}
                    {
                        selectedConcert === null ? null :
                            <section>
                                <h2>{selectedConcert.name}</h2>
                                <p>{selectedConcert.venue}</p>
                            </section>
                    }
                    <p>
                        Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
                    </p>
                </div>
                <button
                    type="button"
                    className="counter"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Count is {count}
                </button>
            </section>

            <div className="ticks"></div>

            <section id="next-steps">
                <div id="docs">
                    <svg className="icon" role="presentation" aria-hidden="true">
                        <use href="/icons.svg#documentation-icon"></use>
                    </svg>
                    <h2>Documentation</h2>
                    <p>Your questions, answered</p>
                    <ul>
                        <li>
                            <a href="https://vite.dev/" target="_blank">
                                <img className="logo" src={viteLogo} alt=""/>
                                Explore Vite
                            </a>
                        </li>
                        <li>
                            <a href="https://react.dev/" target="_blank">
                                <img className="button-icon" src={reactLogo} alt=""/>
                                Learn more
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="social">
                    <svg className="icon" role="presentation" aria-hidden="true">
                        <use href="/icons.svg#social-icon"></use>
                    </svg>
                    <h2>Connect with us</h2>
                    <p>Join the Vite community</p>
                    <ul>
                        <li>
                            <a href="https://github.com/vitejs/vite" target="_blank">
                                <svg
                                    className="button-icon"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#github-icon"></use>
                                </svg>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://chat.vite.dev/" target="_blank">
                                <svg
                                    className="button-icon"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#discord-icon"></use>
                                </svg>
                                Discord
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/vite_js" target="_blank">
                                <svg
                                    className="button-icon"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#x-icon"></use>
                                </svg>
                                X.com
                            </a>
                        </li>
                        <li>
                            <a href="https://bsky.app/profile/vite.dev" target="_blank">
                                <svg
                                    className="button-icon"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#bluesky-icon"></use>
                                </svg>
                                Bluesky
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="ticks"></div>
            <section id="spacer"></section>
        </>
    )
}

export default App
