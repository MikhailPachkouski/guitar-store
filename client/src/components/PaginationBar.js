import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '..';

const PaginationBar = observer ( () => {
	const { instrument } = useContext(Context);
	const pagesCount = Math.ceil(instrument.totalPage / instrument.limit);
	const pages = [];

	for (let i = 0; i < pagesCount; i++) {
		pages.push(i + 1);
	}
	return (
		<Pagination>
			{pages.map(page => (
				<Pagination.Item
					key={page}
					active={instrument.page === page}
					onClick={() => instrument.setPage(page)}>
					{page}
				</Pagination.Item>
			))}
		</Pagination>
	);
});

export default PaginationBar;
