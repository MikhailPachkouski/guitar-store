import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

function InstrumentPage() {
	const instrument = {
		id: 1,
		name: 'Alhambra J-1A',
		price: 4500,
		rating: 5,
		img: 'https://www.tvoyzvuk.by/images/thumbnails/189/189/detailed/40/Alhambra_J-1A.jpg',
	};

	const description = [
		{ id: 1, title: 'Материал корпуса', description: 'Ель' },
		{ id: 2, title: 'Накладка грифа', description: 'Эбони' },
		{ id: 3, title: 'Покрытие корпуса', description: 'Матовое' },
		{ id: 4, title: 'Производитель', description: 'Alhambra' },
		{ id: 5, title: 'Тип корпуса', description: 'Dreadnought cutaway' },
		{ id: 6, title: 'Верхняя дека', description: 'Массив ели' },
		{ id: 7, title: 'Количество струн', description: '6' },
	];
	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image width={300} height={300} src={instrument.img} />
				</Col>
				<Col md={4}>
					<Row className='d-flex flex-column align-items-center'>
						<h2 className='text-center'>{instrument.name}</h2>
						<div
							className='d-flex justify-content-center align-items-center'
							style={{
								background: `url(${bigStar}) no-repeat center center`,
								width: 240,
								height: 240,
								backgroundSize: 'cover',
								fontSize: 60,
							}}>
							{instrument.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex flex-column align-items-center justify-content-around'
						style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}>
						<h3>{instrument.price} руб.</h3>
						<Button variant={'outline-dark'}>Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<Row className='m-2 d-flex flex-column'>
			<h2>Характеристики</h2>
				{description.map((info, index) => (
					<Row style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 7 }}>
						{info.title}: {info.description}
					</Row>
				))}
			</Row>
		</Container>
	);
}

export default InstrumentPage;
