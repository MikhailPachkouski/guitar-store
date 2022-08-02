import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import InstrumentItem from './InstrumentItem';

const InstrumentList = observer ( () => {
	const {instrument} = useContext(Context)

	return (
		<Row style={{display: 'flex', justifyContent: 'space-between'}} >
			{instrument.instruments.map(instrument => 
			<InstrumentItem key={instrument.id} instrument={instrument}/>
			)}
		</Row>
	)
})

export default InstrumentList