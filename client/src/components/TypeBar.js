import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import { Context } from '..'
import { ListGroup } from 'react-bootstrap'

const TypeBar = observer( () => {
	const {instrument} = useContext(Context)
	return (
		<ListGroup className='mt-3'>
		{instrument.types.map(type => 
		<ListGroup.Item
		style={{cursor: 'pointer'}}
		variant="success"
		active={type.id === instrument.selectedType.id}
		onClick={() => instrument.setSelectedType(type)}
		 key={type.id}>
			{type.name}
		</ListGroup.Item>
		)}
	</ListGroup>
	)
})

export default TypeBar