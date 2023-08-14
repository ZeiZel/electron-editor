interface Window {
	API: {
		logger: (...args: unknown[]) => void;
	};
}

declare module '*.scss' {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}
