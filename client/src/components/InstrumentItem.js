import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import star from '../assets/star.png';
import { INSTRUMENT_ROUTE } from '../utils/consts';

const InstrumentItem = ({instrument}) => {
	const navigate = useNavigate()
	return (
		<Col md={3} onClick={() => navigate(INSTRUMENT_ROUTE + '/' + instrument.id)}>
			<Card className='mt-2' style={{ width: 150, cursor: 'pointer', fontSize: '.7em' }} border={'light'}>
				<Image width={130} height={130} src={instrument.img}/>
				<div className='mt-1 d-flex justify-content-between align-items-center'>
					<div className='mt-1'>{instrument.name}</div>
					<div className='d-flex align-items-center'>
						<div className=''>{instrument.rating}</div>
						<Image width={12} height={12} src={star} />
					</div>
				</div>
			</Card>
		</Col>
	);
};

export default InstrumentItem;
