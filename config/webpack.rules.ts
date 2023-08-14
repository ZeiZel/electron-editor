import type { ModuleOptions } from 'webpack';

export const rules: Required<ModuleOptions>['rules'] = [
	{
		test: /native_modules[/\\].+\.node$/,
		use: 'node-loader',
	},
	{
		test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
		parser: { amd: false },
		use: {
			loader: '@vercel/webpack-asset-relocator-loader',
			options: {
				outputAssetBase: 'native_modules',
			},
		},
	},
	{
		test: /\.s[ac]ss$/i,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => !!resPath.includes('.module.'),
						localIdentName: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	},
	{
		test: /\.tsx?$/,
		exclude: /(node_modules|\.webpack)/,
		use: {
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
			},
		},
	},
];
