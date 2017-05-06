import React from 'react'
import { FileItemStyled } from './style'

const FileItem = (props) => {
	let { name, size, situation, func } = props
	size = (size / (1024*1024)).toFixed(2)
	return(
		<FileItemStyled situation={situation}>
			{`${name} (${size}mb)`}
			<a href='javascript:void(0)'></a>
		</FileItemStyled>
	)
}

export default FileItem