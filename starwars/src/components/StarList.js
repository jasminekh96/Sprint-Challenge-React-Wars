import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarCharacter from './StarCharacter';
import styled from 'styled-components';

const StarList = () => {
	const Container = styled.div`
		width: 600px;
		margin: 0 auto;
		font-family: 'Oswald', sans-serif;
	`;
	const [ Characters, setCharacters ] = useState([]);
	useEffect(() => {
		axios.get(`https://swapi.co/api/people/`).then((response) => {
			console.log(response.data.results);
			setCharacters(response.data.results);
		}, []);
	});
	return (
		<Container>
			{Characters.map((character) => {
				return (
					<StarCharacter
						name={character.name}
						height={character.height}
						mass={character.mass}
						birth_year={character.birth_year}
					/>
				);
			})}
		</Container>
	);
};

export default StarList;
