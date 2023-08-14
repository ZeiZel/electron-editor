import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Markdown from './pages/Markdown/Markdown';

const root = createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<Markdown />
	</StrictMode>,
);