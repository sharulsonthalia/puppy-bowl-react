//Puppies Component

import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import Form from "./Form"
import SearchBar from "./SearchBar"
const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT/players/'

const Puppies = () => {

    const [allPuppies, setAllPuppies] = useState([])
    const [searchInput, setSearchInput] = useState("")


    useEffect(() => {
        fetchAllPuppies()
    }, [])

    const fetchAllPuppies = async() => {
        try{
        const response = await fetch(API_URL)
        const data = await response.json()
        const players = data.data.players
        setAllPuppies(players)
        console.log(players)
        } catch(err) {
            console.log(err)
        }
    }


    const filteredPuppies = allPuppies.filter((player) => 
    player.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    player.breed.toLowerCase().includes(searchInput.toLowerCase()) 
    )

    const deleteButton = async(id) => {
        try{
            const response = await fetch(`${API_URL}${id}`, {
                method: "DELETE",
                headers: {"Content-Type":"application/json"}
            })
            fetchAllPuppies()

            } catch(err) {
                console.log(err)
            }            
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }


    return(
        <>
            <h1>Puppy Bowl</h1>
            <SearchBar handleSearch = {handleSearch} searchInput={searchInput} />
            <Form fetchAllPuppies = {fetchAllPuppies} />
            <div id="puppyContainer">
            {
                filteredPuppies.map((player) => {
                    
                    return (
                    <>
                    <div className="playerCard" key={player.id}>
                        <h1>{player.name} </h1>
                        <img src={player.imageUrl} className="playerCardImage"/>
                        <h4>Breed: {player.breed}</h4>
                        <h4>Status: {player.status}</h4>
                        <br></br>
                        <Link to={`/${player.id}`}>
                            <button className="detailsButton"> See Details</button>
                        </Link>
                        <button className = "deleteButton" onClick={() => deleteButton(player.id)}>Delete</button>
                    </div>
                    </>
                    )
                })
            }
            </div>

        </>
    )

}


export default Puppies