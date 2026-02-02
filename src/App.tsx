import './App.css'

function App() {

  type Person = {
    readonly id: number,
    readonly name : string,
    birth_year : number,
    death_year? : number 
    biography : string,
    image : string
  }

  return (
    <>
      <h1>Prova</h1>
    </>
  )
}

export default App
