import "./App.css";

function App() {
    return (
        <div className="app">
            <form className="reservation-form">

                <h1>Mazurska Przystań ⚓</h1>

                <div className="form-group">
                    <label>Twoje imię</label>
                    <input type="text" placeholder="Wpisz imię..." />
                </div>

                <div className="form-group">
                    <label>Wybierz sprzęt</label>
                    <select>
                        <option>Kajak (20zł/h)</option>
                        <option>Rower wodny (35zł/h)</option>
                        <option>Omega (150zł/h)</option>
                    </select>
                </div>

                <p className="warning">
                    ⚠️ Do prowadzenia Omegi wymagany jest patent żeglarski
                </p>

                <div className="form-group">
                    <label>Ilosc godzin</label>
                    <input type="range" min="1" max="8"/>
                    <span className="hours">1h</span>
                </div>

                <div className="form-group">
                    <label>Dodatki</label>

                    <div className="checkbox-group">
                        <label>
                            <input type="checkbox" />
                            Kapok dla dziecka(+5zł)
                        </label>

                        <label>
                            <input type="checkbox" />
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
                        <input type="checkbox" />
                        Akceptuję regulamin
                    </label>
                </div>

                <div className="price">
                    Cena: <strong>0 zł</strong>
                </div>

                <button className="reserve-btn" disabled>
                    Rezerwuję
                </button>

            </form>
        </div>
    );
}

export default App;