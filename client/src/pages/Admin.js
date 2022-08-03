import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateInstrument from '../components/modals/CreateInstrument'
import CreateType from '../components/modals/CreateType'

function Admin() {
	const [typeVisible, setTypeVisible] = useState(false)
	const [brandVisible, setBrandVisible] = useState(false)
	const [instrumentVisible, setInstrumentVisible] = useState(false)
	return (
		<Container className='d-flex flex-column'>
			<Button variant={'outline-dark'} className='mt-3 p-1' onClick={() => setTypeVisible(true)}>Добавить тип</Button>
			<Button variant={'outline-dark'} className='mt-3 p-1' onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
			<Button variant={'outline-dark'} className='mt-3 p-1' onClick={() => setInstrumentVisible(true)}>Добавить инструмент</Button>
			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
			<CreateInstrument show ={instrumentVisible} onHide={() => setInstrumentVisible(false)}/>
		</Container>
	)
}

export default Admin