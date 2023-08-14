import React, { FC, FunctionComponent } from 'react';
import styles from './Layout.module.scss';
import { ILayoutProps } from './Layout.props';
import { Header } from './Header/Header';

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<main className={styles.body}>{children}</main>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function (props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
