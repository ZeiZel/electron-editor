import { useEffect, useState } from 'react';
import { isNotBrowser } from '../helpers';

export default (): number => {
	const [scrollY, setScrollY] = useState<number>(0);

	const handleScroll = (): void => {
		const currentScrollY: number = isNotBrowser ? 0 : window.scrollY;
		setScrollY(currentScrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return window.removeEventListener('scroll', handleScroll);
	}, []);

	return scrollY;
};
