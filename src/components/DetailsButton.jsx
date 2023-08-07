import { useState } from "react"

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT/players'

const DetailsButton = ({id}) => {

    const [singlePuppy, setSinglePuppy] = useState([])

    const singlePuppyDetails = async() => {
            const response = await fetch(`${API_URL}/${id}`)
            const data = await response.json()
            const player = data.data.player
            setSinglePuppy(player)
            console.log(singlePuppy)
        }
    
    return (
    <>
        <button className="detailsButton" onClick={singlePuppyDetails}> See Details </button>
        <h1>{singlePuppy.name} </h1>
        <img src={singlePuppy.imageUrl} className="playerCardImage"/>
        <h4>Breed: {singlePuppy.breed}</h4>
        <h4>Status: {singlePuppy.status}</h4>
    </>
    )
}



export default DetailsButton