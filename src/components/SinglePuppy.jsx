import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//Single Puppy Component

import { Link } from "react-router-dom"

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT/players/`

const SinglePuppy = () => {

    const [singlePuppy, setSinglePuppy] = useState([])
    let { id } = useParams();

    useEffect(() => {

        const fetchSinglePuppy = async() => {

            const response = await fetch(`${API_URL}${id}`)
            const data = await response.json()
            setSinglePuppy(data.data.player)
        }
        
        fetchSinglePuppy()

    }, [])

    console.log(singlePuppy)

    return (
        <>
            <div className="playerCard">
                <h1>{singlePuppy.name} </h1>
                <img src={singlePuppy.imageUrl} className="singlePuppyCardImage"/>
                <h4>Breed: {singlePuppy.breed}</h4>
                <h4>Status: {singlePuppy.status} </h4>
                <br></br>
                <Link to={`/`}>
                    <button className = "backButton">Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default SinglePuppy