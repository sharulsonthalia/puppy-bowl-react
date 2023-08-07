//Form Component

import { useState } from "react"
const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT/players/'

const Form = ({ fetchAllPuppies } ) => {

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus] = useState("field")
    const [imageUrl, setImageUrl] = useState("")


const formSubmit = async(e) => {
    e.preventDefault()

    try{
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            name,
            breed,
            status,
            imageUrl
        }),
        headers: {"Content-Type":"application/json"}
    })
    fetchAllPuppies()

    } catch(err) {
        console.log(err)
    }

}

    return(
        <>
        <h2>Add a Player!</h2>
        <form onSubmit={formSubmit}>
            <label>
               Name: <input onChange={(e) => setName(e.target.value)}></input>
            </label>
            <br></br>
            <label>
                Breed: <input onChange={(e) => setBreed(e.target.value)}></input>
            </label>
            <br></br>
            <label >Status:
                <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="field">Field</option>
                    <option value="bench">Bench</option>
                </select>
            </label>
            <br></br>
            <label>
                Image URL: <input onChange={(e) => setImageUrl(e.target.value)}></input>
            </label>
            <br></br>
            <button type="submit">Submit</button>
        </form>
        </>

    )
}

export default Form