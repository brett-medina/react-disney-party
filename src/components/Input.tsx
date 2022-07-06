import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IPerson } from '../types/IPerson';
import axios from 'axios';

interface IProps {
	people: IPerson[],
	setPeople: React.Dispatch<React.SetStateAction<IPerson[]>> 
}

const Input: React.FC<IProps> = ({ people, setPeople }) => {
	const [input, setInput] = useState({
		name: '',
		note: '',
		age: ''
	})

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({
			...input,
			[e.target.id]: e.target.value
		})
	}

	const onSubmitClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
		const randomImage = (await getRandomImage()).data.imageUrl;
		setPeople([
			...people,
			{
				name: input.name,
				note: input.note,
				age: parseInt(input.age),
				imageUrl: randomImage 
			}
		])
		resetInputFields();
	}

	const getRandomIntInclusive = (min: number, max: number): number => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
	}


	const getRandomImage = (): Promise<any> => {
		const id = getRandomIntInclusive(1, 7438);
		return axios.get(`https://api.disneyapi.dev/characters/${id}`);
	}

	const resetInputFields = (): void => {
		setInput({
			name: '',
			note: '',
			age: ''
		})
	}

	return (
		<div>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
					display: 'flex',
					justifyContent: 'space-evenly'
				}}
				noValidate
				autoComplete="off"
			>
				<TextField id="name" label="Name" variant="outlined" value={input.name} onChange={onInputChange}/>
				<TextField id="age" label="Age" variant="outlined" value={input.age} onChange={onInputChange}/>
				<TextField id="note" label="Note" variant="outlined" value={input.note} onChange={onInputChange}/>
			</Box>
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }} pt={3}>
				<Button sx={{ flex: '0 0 100%' }} variant="contained" onClick={onSubmitClick}>Submit</Button>
			</Box>
		</div>
	)
}

export default Input