import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import InstrumentList from '../components/InstrumentList';
import TypeBar from '../components/TypeBar';
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import { fetchBrands, fetchInstruments, fetchTypes } from '../http/instrumentAPI';



const Shop = observer(() => {
	const {instrument} = useContext(Context)

	useEffect(() => {
		fetchTypes().then((data) => instrument.setTypes(data))
		fetchBrands().then((data) => instrument.setBrands(data))
		fetchInstruments().then((data) => instrument.setInstruments(data.rows))
	
	
	}, [])
	

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
})

export default Shop;
