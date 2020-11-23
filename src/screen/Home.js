import Card from '../components/Card'
import  { useEffect, useState } from 'react'
import axios from 'axios' //npm i axios

const baseURL = process.env.REACT_APP_API_URL //npm i dotenv

function Home() {

const  [listTeam, setListTeam ] = useState([])

  useEffect(() => {
     getTeams() 
  },[])

  async function getTeams(){
     const { data } = await axios.get(baseURL)
     console.log(data)
     setListTeam(data)
  } 


    return (
        <div className="p-3">
            <div className="row justify-content-left">
                <div className="col-md-4">
                    <div className="card p-2">
                        <input type="text"
                               placeholder="Name"
                               className="form-control mt-2"
                        />
                        <input type="text"
                               placeholder="Trophy"
                               className="form-control mt-2"
                        />

                        <input type="text"
                               placeholder="Image"
                               className="form-control mt-2 mb-2"
                        />
                        <button className="btn btn-secondary">
                            Save
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