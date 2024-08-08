// @ts-nocheck

// @ts-ignore
export const BreedsSelect = (props) => {
	function changeEvent(event){
		//console.log(event)
		props.setSelectedBreed(event.target.value)
	}
	// @ts-ignore
	//console.log(props.breeds)
	// @ts-ignore
	const listItems = props.breeds.map((breed) =>
		<option key={breed} value={breed}>{breed}</option>
	);
	//console.log(listItems)
  return <select onChange={changeEvent} value={props.selectedBreed} >{listItems}</select>
}
// value={props.selectedBreed} onChange={props.setSelectedBreed}
export default BreedsSelect
