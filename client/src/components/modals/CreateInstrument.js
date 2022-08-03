import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';

const CreateInstrument = ({ show, onHide }) => {
	const { instrument } = useContext(Context);

	const [info, setInfo] = useState([])

	const addInfo = () => {
		setInfo ([...info, {title: '', description: '', number: Date.now()}])
	}

	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
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
					<Form.Control className='mt-2' placeholder='Введите название' />
					<Form.Control className='mt-2' placeholder='Введите стоимость' type='number'/>
					<Form.Control className='mt-2' type='file'/>
					<hr/>
					<Button
					variant='outline-dark'
					onClick={addInfo}>Добавить характеристику</Button>
					{info.map((i) =>
					<Row key={i.number} className='mt-2'>
						<Col md={4}>
							<Form.Control placeholder='Описание'/>
						</Col>
						<Col md={4}>
							<Form.Control placeholder='Значение'/>
						</Col>
						<Col>
							<Button variant='outline-danger' onClick={() => removeInfo(i.number)}>
								Удалить
							</Button>
						</Col>
					</Row>
					 )}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>
					Закрыть
				</Button>
				<Button variant='outline-success' onClick={onHide}>
					Создать
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateInstrument;
