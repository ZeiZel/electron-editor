import React from 'react';
import { FC } from 'react';
import { withLayout } from '../../layout/Layout';
import { Editor, FilesList, Preview } from '../../components';

const Markdown: FC = () => {
	return (
		<div className={'container'}>
			<FilesList />
			<Editor />
			<Preview />
		</div>
	);
};

export default withLayout(Markdown);
