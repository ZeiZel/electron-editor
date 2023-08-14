import React, { FC } from 'react';
import { IHeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';

export const Header: FC<IHeaderProps> = ({ className, ...props }: IHeaderProps) => {
	return <header className={cn(className, styles.header)}></header>;
};
