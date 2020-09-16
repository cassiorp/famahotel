import React, { Component } from 'react';
import { P, Div } from './style';

export default class Alerta extends Component {
	render() {
		const { cor, texto} = this.props
		return (
			<React.Fragment>
				<Div color={cor} >
					<p>{texto}</p>
				</Div>
			</React.Fragment>
		);
	}
}