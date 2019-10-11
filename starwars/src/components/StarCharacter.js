import React from 'react';
import styled from 'styled-components';

const StarCharacter = (props) => {
	const Title = styled.h1`
		font-size: 50px;
		color: #8b0000;
		background-color: #add8e6;
		border-radius: 100px;
		padding: 10px;
	`;
	const Height = styled.h2`
		font-size: 40px;
		color: #add8e6;
		background-color: #f0fff0;
		border-radius: 100px;
		padding: 10px;
	`;
	const Mass = styled.h3`
		font-size: 30px;
		color: #f0fff0;
		background-color: #add8e6;
		border-radius: 100px;
		padding: 10px;
	`;
	const Birth = styled.p`
		font-size: 20px;
		color: #add8e6;
		background-color: #f0fff0;
		border-radius: 100px;
		padding: 10px;
	`;

	return (
		<div>
			<Title>{props.name}</Title>
			<Height>Height: {props.height}</Height>
			<Mass>Mass: {props.mass}</Mass>
			<Birth>Birth Year: {props.birth_year}</Birth>
		</div>
	);
};
export default StarCharacter;
