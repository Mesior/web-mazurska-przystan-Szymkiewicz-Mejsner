import { useState } from 'react'
import "./App.css";

function App() {
    const [imie, setImie] = useState("")
    const [lodz, setLodz] = useState("kajak")
    const [czyKapok, setCzyKapok] = useState(false)
    const [czyInstruktor, setCzyInstruktor] = useState(false)
    const [godziny, setGodziny] = useState(1)
    const [regulamin, setRegulamin] = useState(false)

    function handleSetImie(event: React.ChangeEvent<HTMLInputElement>) {
        setImie(event.target.value)
    }

    function handleSetLodz(event: React.ChangeEvent<HTMLSelectElement>) {
        setLodz(event.target.value)
    }

    function handleSetCzyKapok(event: React.ChangeEvent<HTMLInputElement>) {
        setCzyKapok(event.target.checked)
    }

    function handleSetCzyInstruktor(event: React.ChangeEvent<HTMLInputElement>) {
        setCzyInstruktor(event.target.checked)
    }

    function handleSetRegulamin(event: React.ChangeEvent<HTMLInputElement>) {
        setRegulamin(event.target.checked)
    }
    function handleSetGodziny(event: React.ChangeEvent<HTMLInputElement>) {
        setGodziny(Number(event.target.value))
    }
    function handleRezerwacja() {
        alert(`Dziękujemy ${imie}! Twoja rezerwacja została przyjęta.`)
    }

    function sum() {
        let cena = 0

        if (lodz === "kajak") cena += 20
        if (lodz === "rower wodny") cena += 35
        if (lodz === "omega") cena += 150

        let suma = cena * godziny

        if (czyKapok) suma += 5
        if (czyInstruktor) suma += 50 * godziny

        return suma
    }

    return (
        <div className="app">
            <form className="reservation-form">

                <h1>Mazurska Przystań ⚓</h1>

                <div className="form-group">
                    <label>Twoje imię</label>
                    <input value={imie} onChange={handleSetImie} type="text" placeholder="Wpisz imię..." />
                </div>

                <div className="form-group">
                    <label>Wybierz sprzęt</label>
                    <select value={lodz} onChange={handleSetLodz}>
                        <option value={"kajak"}>Kajak (20zł/h)</option>
                        <option value={"rower wodny"}>Rower wodny (35zł/h)</option>
                        <option value={"omega"}>Omega (150zł/h)</option>
                    </select>
                </div>

                {lodz === "omega" && (
                    <p className="warning">
                        ⚠️ Do prowadzenia Omegi wymagany jest patent żeglarski
                    </p>
                )}

                <div className="form-group">
                    <label>Ilosc godzin</label>
                    <input value={godziny} onChange={handleSetGodziny} type="range" min="1" max="8"/>
                    <span className="hours">{godziny}h</span>
                </div>

                <div className="form-group">
                    <label>Dodatki</label>

                    <div className="checkbox-group">
                        <label>
                            <input checked={czyKapok} onChange={handleSetCzyKapok} type="checkbox" />
                            Kapok dla dziecka(+5zł)
                        </label>

                        <label>
                            <input checked={czyInstruktor} onChange={handleSetCzyInstruktor} type="checkbox" />
                            Instruktor(+50zł/h)
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Płatność</label>

                    <div className="radio-group">
                        <label>
                            <input type="radio" name="payment" />
                            Karta
                        </label>

                        <label>
                            <input type="radio" name="payment" />
                            BLIK
                        </label>
                    </div>
                </div>

                <div className="form-group terms">
                    <label>
                        <input checked={regulamin} onChange={handleSetRegulamin} type="checkbox" />
                        Akceptuję regulamin
                    </label>
                </div>

                <div className="price">
                    Cena: <strong>{sum()} zł</strong>
                </div>

                <button className="reserve-btn" disabled={!regulamin || imie === ""} onClick={handleRezerwacja}>
                    Rezerwuję
                </button>

            </form>
        </div>
    );
    }
export default App;