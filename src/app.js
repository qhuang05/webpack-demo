// import a from './compontents/a'
// import b from './compontents/b'
// import c from './compontents/c'
// a()
// b()
// c()

import React from 'react'
import ReactDOM from 'react-dom'
import imgBg from './images/bg001.jpg'
import './style/common/common.css'
import './style/common/font.css'
import 'font-awesome/css/font-awesome.css'
import StyleA from './style/a.css'
import StyleAA from './style/aa.scss'

ReactDOM.render(
	<div>
		<h3>Hello React</h3>
		<img src={imgBg} />
		<i className="icon-he-login"></i>
		<i className="fa fa-envelope-open"></i>
		<div className={StyleA .oa}>
			<span className={StyleA.ob}>test</span>
		</div>
		<div className={StyleAA .tt}>
			<span className={StyleAA.tx}>test</span>
		</div>
	</div>,
	document.getElementById('root')
)