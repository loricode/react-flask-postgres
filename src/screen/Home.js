import Card from '../components/Card'
import  { useEffect, useState } from 'react'
import axios from 'axios' //npm i axios

const baseURL = process.env.REACT_APP_API_URL //npm i dotenv

function Home() {

const [ listTeam, setListTeam ] = useState([])
const [ name, setName ] = useState('')
const [ trophy, setTrophy ] = useState('')
const [ image, setImage ] = useState('')

  useEffect(() => {
     getTeams() 
  },[])

 async function getTeams(){
    const { data } = await axios.get(baseURL)
    setListTeam(data)
 } 

 async function saveTeam(){
    const obj = { name, trophy, image }
    const { data } = await axios.post(baseURL, obj)
    console.log(data)
    clearInput()
    getTeams()
 }

 function clearInput(){
    setName('')
    setTrophy('')
    setImage('')
 }

 function updateTeam(){ }


    return (
        <div className="p-3">
            <div className="row justify-content-left">
                <div className="col-md-4">
                    <div className="card p-2">
                        <input type="text"
                               placeholder="Name"
                               className="form-control mt-2"
                               value={name}
                               onChange={ e => setName(e.target.value)} 
                        />
                        <input type="text"
                               placeholder="Trophy"
                               className="form-control mt-2"
                               value={trophy}
                               onChange={ e => setTrophy(e.target.value)} 
                        />

                        <input type="text"
                               placeholder="Image"
                               className="form-control mt-2 mb-2"
                               value={image}
                               onChange={ e => setImage(e.target.value)} 
                        />
                        
                        <button className="btn btn-secondary mb-2 "
                                onClick={saveTeam}>
                            Save
                        </button>
                        <button className="btn btn-dark "
                                onClick={updateTeam}>
                            Update
                        </button>
                                           
                    </div>
                </div>
                 
              <div className="col-md-8 ">
              <div className="row ">
              { listTeam.map(item => (
                 <div className="col-md-6" key={item.id}>
                        <Card 
                           name={item.name}
                           trophy={item.trophy} 
                           image={item.image}  />
                </div>
                  
                          
              ))}   
                </div>                          
              </div>   
            </div>
        </div>
    );
}

export default Home;