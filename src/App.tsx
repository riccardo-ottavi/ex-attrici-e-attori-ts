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

  type ActressNationality = 
  | "American"
  | "British"
  | "Australian"
  | "Israeli-American"
  | "South African"
  | "French"
  | "Indian"
  | "Israeli"
  | "Spanish"
  | "South Korean"
  | "Chinese"


 type Actress = Person & {
  most_famous_movies: [string, string, string],
  awards: string,
  nationality : ActressNationality,
 }


 function isActress(data: unknown): data is Actress{
  return(
    typeof data === "object" &&
    data !== null &&
    "id" in data && typeof data.id === "number" &&
    "name" in data && typeof data.name === "string" &&
    "birth_year" in data && typeof data.birth_year === "number" &&
    "death_year" in data && typeof data.death_year === "number" &&
    "biography" in data && typeof data.biography === "string" &&
    "image" in data && typeof data.image === "string" &&
    "most_famous_movies" in data && 
    data.most_famous_movies instanceof Array &&
    data.most_famous_movies.length === 3 &&
    data.most_famous_movies.every(m => typeof m === "string") &&
    "awards" in data && typeof data.awards === "string" &&
    "nationality" in data && typeof data.nationality === "string"  
  )
 }

 async function getActress(id: number): Promise<Actress | null>{
  try{
    const response = await fetch(`http://localhost:3333/actresses/${id}`)
    const data: unknown = await response.json()
    if(!isActress(data)){
      throw new Error ("Formato dei dati non valido")
    }
    return data
  }catch(error){
    if(error instanceof Error){
      console.error("Errore durante il recupero dell'attrice")
    }else{
      console.error("Errore sconosciuto: ", error)
    }
    return null
  }
 }



  return (
    <>
      <h1>Prova</h1>
    </>
  )
}

export default App
