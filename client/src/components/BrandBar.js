import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Card } from 'react-bootstrap';

const BrandBar = observer(() => {
	const { instrument } = useContext(Context);

	return (
		<div className='d-flex mt-2'>
			{instrument.brands.map(brand => (
				<Card
					style={{ cursor: 'pointer' }}
					border={brand.id === instrument.selectedBrand.id ? 'success' : 'light'}
					onClick={() => instrument.setSelectedBrand(brand)}
					className='p-2 me-2'
					key={brand.id}>
					{brand.name}
				</Card>
			))}
		</div>
	);
});

export default BrandBar;
