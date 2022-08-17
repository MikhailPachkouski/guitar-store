import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import InstrumentList from '../components/InstrumentList';
import TypeBar from '../components/TypeBar';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchBrands, fetchInstruments, fetchTypes } from '../http/instrumentAPI';
import PaginationBar from '../components/PaginationBar';

const Shop = observer(() => {
	const { instrument } = useContext(Context);

	useEffect(() => {
		fetchTypes().then(data => instrument.setTypes(data));
		fetchBrands().then(data => instrument.setBrands(data));
		fetchInstruments().then(data => {
			instrument.setInstruments(data.rows);
			instrument.setTotalPage(data.count);
		});
	}, []);

	useEffect(() => {
		fetchInstruments(
			instrument.selectedType.id,
			instrument.selectedBrand.id,
			instrument.page,
			1,
		).then(data => {
			instrument.setInstruments(data.rows);
			instrument.setTotalPage(data.count);
		});
	}, [instrument.selectedType, instrument.selectedBrand, instrument.page]);

	return (
		<Container>
			<Row>
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<InstrumentList />
					<PaginationBar />
				</Col>
			</Row>
		</Container>
	);
});

export default Shop;
