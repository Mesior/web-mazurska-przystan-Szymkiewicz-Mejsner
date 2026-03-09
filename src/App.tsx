import { useState } from 'react'
import './App.css'
function App() {
  const [imie, setImie] = useState("")
  const [lodz, setLodz] = useState("kajak")
  const [czyKapok, setCzyKapok] = useState(false)
  const [czyInstruktor, setCzyInstruktor] = useState(false)
  const [godziny, setGodziny] = useState(1)

function handleSetImie(event: React.ChangeEvent<HTMLInputElement>) {
      setImie(event.target.value)
}
function handleSetLodz(event: React.ChangeEvent<HTMLInputElement>) {
      setLodz(event.target.value)
}
function handleSetCzyKapok(event: React.ChangeEvent<HTMLInputElement>) {
      setCzyKapok(event.target.checked)
}
function handleSetCzyInstruktor(event: React.ChangeEvent<HTMLInputElement>) {
      setCzyInstruktor(event.target.checked)
}
function komunikat()
{
    if (lodz === "omega") {
        return (
        <div>
            Musisz posiadać patent, żeby wypożyczyc omege
        </div>
        )
    }
}
function sum()
{
    let cena = 0
    if (lodz == "kajak") {
        cena += 20
    }
    if (lodz == "rower wodny") {
        cena += 35
    }
    if (lodz == "omega") {
        cena += 150
    }
    let suma = cena*godziny
    if (czyKapok)
    {
        suma += 5
    }
    if (czyInstruktor)
    {
        suma += 50*godziny
    }
return suma
}
  return (
    <>

    </>
  )
}

export default App
