// @ts-check
import {useEffect, useState } from 'react';
import BreedsSelect from './BreedsSelect';
export const DogListContainer = () => {
	const [breeds,setBreeds]=useState([])
	const [selectedBreed,setSelectedBreed]=useState("dummy")
	const [dogImages,setDogImages]=useState([])
	
	useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(
        (result) => {
					const keys=Object.keys(result.message)
					//console.log(keys)
					setSelectedBreed(keys[0])
					// @ts-ignore
					setBreeds(keys)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
					console.log(error)
        }
      )
		
	},[])
	function fetchDogs(){
		fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/2`)
		.then(res => res.json())
		.then(
			(result) => {
				const images=result.message
				console.log(images)
				setDogImages(images)
				//console.log(keys)
				// @ts-ignore
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
				console.log(error)
			}
		)
	}
	const makeDogImageHTML=dogImages.map((url)=>
		<img src={url} id="dog"></img>
	)
	
  return (<div>
		<BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
		<button onClick={fetchDogs}>表示</button>
		<div>{makeDogImageHTML}</div>
	</div>)
}

export default DogListContainer

//npx vitest --reporter=junit --watch=false ./tests/station11.test.tsx
