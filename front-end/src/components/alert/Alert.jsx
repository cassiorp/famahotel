import React, { Component } from 'react';
import { Div } from './style';

export default class Alert extends Component {
	render() {
		const { cor, texto} = this.props
		return (
			<React.Fragment>
				<Div color={cor}>
					<p>{texto}</p>
				</Div>
			</React.Fragment>
		);
	}
}