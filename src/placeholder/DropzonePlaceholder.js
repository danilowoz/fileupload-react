import React from 'react'
import { DropzoneTitle, BoxIcons } from './../style'

import cloud from './cloud.svg'
import doc from './doc.svg'
import jpg from './jpg.svg'
import pdf from './pdf.svg'

const DropzonePlaceholder = (props) => {
	return (
		<div>
			<BoxIcons {...props}>
				<img className='pdf' src={pdf} alt='pdf' />
				<img className='jpg' src={jpg} alt='jpg' />
				<img className='doc' src={doc} alt='doc' />
				<img className='cloud' src={cloud} alt='cloud' />
			</BoxIcons>
			<DropzoneTitle>Drag n'drop <span>to attach or</span> <span className='link'>browse</span></DropzoneTitle>
		</div>
	)
}

export default DropzonePlaceholder
