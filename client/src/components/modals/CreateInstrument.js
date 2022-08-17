import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';
import { createInstrument, fetchBrands, fetchTypes } from '../../http/instrumentAPI';

const CreateInstrument = observer( ({ show, onHide }) => {
	const { instrument } = useContext(Context);

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [file, setFile] = useState(null);

	const [info, setInfo] = useState([]);

	useEffect(() => {
		fetchTypes().then((data) => instrument.setTypes(data))
		fetchBrands().then((data) => instrument.setBrands(data))
	}, [])

	const addInfo = () => {
		setInfo([...info, { title: '', description: '', number: Date.now() }]);
	};

	const removeInfo = number => {
		setInfo(info.filter(i => i.number !== number));
	};

	const changeInfo = (key, value, number) => {
		setInfo(info.map(inf => inf.number === number ? {...inf, [key]: value} : inf))
	}

	const selectFile = e => {
		setFile(e.target.files[0]);
	};


	const addInstrument = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('brandId', instrument.selectedBrand.id)
		formData.append('typeId', instrument.selectedType.id)
		formData.append('info', JSON.stringify(info))
		createInstrument(formData).then(data => onHide())
	}
	return (
		<Modal
			show={show}
			onHide={onHide}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Добавить инструмент</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>{instrument.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{instrument.types.map(type => (
								<Dropdown.Item onClick={() => instrument.setSelectedType(type)} key={type.id}>
									{type.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2 mb-2'>
						<Dropdown.Toggle>{instrument.selectedBrand.name || 'Выберите брэнд'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{instrument.brands.map(brand => (
								<Dropdown.Item onClick={() => instrument.setSelectedBrand(brand)} key={brand.id}>
									{brand.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control className='mt-2' placeholder='Введите название' 
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Form.Control className='mt-2' placeholder='Введите стоимость' type='number' 
						value={price}
						onChange={(e) => setPrice(Number(e.target.value))}
					/>
					<Form.Control className='mt-2' type='file' onChange={ selectFile } />
					<hr />
					<Button variant='outline-dark' onClick={addInfo}>
						Добавить характеристику
					</Button>
					{info.map(i => (
						<Row key={i.number} className='mt-2'>
							<Col md={4}>
								<Form.Control placeholder='Описание'
								value={i.title}
								onChange={e => changeInfo('title', e.target.value, i.number)} />
							</Col>
							<Col md={4}>
								<Form.Control placeholder='Значение'
								value={i.description}
								onChange={e => changeInfo('description', e.target.value, i.number)} />
							</Col>
							<Col>
								<Button variant='outline-danger' onClick={() => removeInfo(i.number)}>
									Удалить
								</Button>
							</Col>
						</Row>
					))}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>
					Закрыть
				</Button>
				<Button variant='outline-success' onClick={addInstrument}>
					Создать
				</Button>
			</Modal.Footer>
		</Modal>
	);
});

export default CreateInstrument;
