// @ts-check
import {useEffect, useState } from 'react';
import DogImage from './DogImage';
export const Description = () => {
	const [dogUrl,setDogUrl]=useState("https://images.dog.ceo/breeds/hound-afghan/n02088094_4290.jpg")

	const fetchRandomDog=() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
					setDogUrl(result.message)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
					console.log(error)
        }
      )
		}
  return (
		<main>
			<div id="text">
			<h2>犬の画像を表示します</h2>
			</div>
			<div>
				<DogImage imageUrl={dogUrl}/>
			</div>
			<div>
				<button onClick={fetchRandomDog}>画像を変える</button>
			</div>
		</main>
	)
}

export default Description
