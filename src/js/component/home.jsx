import React, { useState,useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [charactersNumber,setCharactersNumber]=useState(0)
	const [page,setPage] = useState(1)

	useEffect(()=>{
		//GET
		fetch(`https://narutodb.xyz/api/character?page=${page}&limit=5`)
		.then(resp => 
		{
	
			return resp.json() //Response ,capturo el Json y Luego lo convierto en data
		})
		.then(data =>{
			console.log(data) //objeto JS
			setNarutoCharacters(data.characters)
			setCharactersNumber(data.totalCharacters)

		})
		.catch(error => {
			console.log(error);
		})

	},[page])

const [narutoCharacters, setNarutoCharacters] = useState([])

	return (
		<div className="d-flex flex-column justify-content-center aling-items-center text-center min-vh-100">
			<h1>Characteres {charactersNumber}!</h1>
			<button onClick={()=> setPage(page+ 1)}>Nex</button>
			{
				narutoCharacters.map((person)=> <div key = {person.id}>
					
					<img src={person.images[0]} alt={person.name} style={{width: '180px'}} />
					<p>{person.name}</p>
					
					</div>)
			}
		</div>
	);
};

export default Home;
