const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './src/index.html',		//以原有的文件为模板
			filename: 'index.html',		//打包后输出的文件名,默认是index.html
		})
	],
	module: {
		rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }]
        },{
        	test: /\.(jpg|jpeg|png|gif)$/,
        	use: [{
        		loader:'url-loader',
        		options:{
        			limit:10000
        		}
        	}]
        },{
        	test: /\.(ttf|eot|woff|woff2|svg)$/,
    		use: ['file-loader']
        },
        // {
        // 	test: /\.css$/,
        // 	use: ['style-loader', 'css-loader']
        // },
        {
        	test: /\.css$/,
        	use: ['style-loader', {
        		loader: 'css-loader',
        		options: {
        			modules: true,
        		}
        	}],
        	exclude: [
        		path.resolve(__dirname, 'node_modules'),
        		path.resolve(__dirname, 'src/style/common')
        	]
        },{
        	test: /\.css$/,
        	use: ['style-loader', 'css-loader'],
        	include: [
        		path.resolve(__dirname, 'node_modules'),
        		path.resolve(__dirname, 'src/style/common')
        	]
        },
        {
            test: /\.scss$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true,
                }
            }, 'sass-loader'],
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/style/common')
            ]
        },{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'src/style/common')
            ]
        }
        ]
	},
	devServer: {
		open: true,
		port: 8080
	}
}