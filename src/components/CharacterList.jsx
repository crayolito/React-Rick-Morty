import React,{useEffect,useState} from 'react'
import Character from './Character'


function NavPage({Page,setPage}){
    return (
        <header className='d-flex justify-content-between aling-items-center'>
            <p>Page : {Page}</p>
            <button className='btn btn-primary btn-sm' 
             onClick={()=>setPage(Page + 1)}>
                Page : {Page + 1}
            </button>
        </header>
    )
}


function CharacterList() {

 const [Characters, setCharacters] = useState([]);
 const [Loading, setLoading] = useState(true)
 const [Page, setPage] = useState(1);

  useEffect(() => {
  async function fetchData(){
    const res = await fetch('https://rickandmortyapi.com/api/character?page=1' + Page )
    const data = await res.json()  
    setCharacters(data.results);
    setLoading(false)
  }
  fetchData()
    },[Page])   

  return (
    <div className='container '>
        <NavPage Page={Page} setPage={setPage}/>
        { Loading? 
            (<h1>Loading ...</h1>):
            (<div className='row'>
                {Characters.map((character)=>{
                    return(
                        <div className='col-md-4' key={character.id}>
                            <Character character={character }/>
                        </div>
                    )
                })}
            </div>)
        }
        <NavPage Page={Page} setPage={setPage}/>
    </div>
  )
}

export default CharacterList