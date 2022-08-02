import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import InstrumentList from '../components/InstrumentList';
import TypeBar from '../components/TypeBar';

function Shop() {
	return (
		<Container>
			<Row>
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<InstrumentList/>
				</Col>
			</Row>
		</Container>
	);
}

export default Shop;
