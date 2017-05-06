import React, {Component} from 'react'
import styled from 'styled-components';
import { colors } from './style'

const FileItemStyled = styled.div`
	font-family: sans-serif;
	list-style: none;
	margin: 0;
	padding: 0 10px;
	border-radius: 26px;
	height: 26px;
	line-height: 26px;
	font-size: 13px;
	color: white;
	text-align: left;
	position: relative;
	margin-bottom: 10px;
	${props => props.situation === 'accepted' ? `
		background: ${colors.accepted};
	` : `
		background: ${colors.refected};
	`}

	a {
		display: block;
		width: 20px;
		height: 20px;
		line-height: 20px;
		font-weight: bold;
		border-radius: 20px;
		background: white;
		position: absolute;
		top: 3px;
		right: 3px;
		text-align: center;
		text-decoration: none;
		${props => props.situation === 'accepted' ? `
			color: ${colors.accepted};
		` : `
			color: ${colors.refected};
		`}
		.remove {
			display: none;
		}
		&:hover {
			span {
				display: none;
			}
			.remove {
				display: block;
			}
		}
	}
`

class FileItem extends Component {

	stopClick (e) {
		e.stopPropagation();
	}

	render() {
		let { name, size, situation, remove } = this.props
		size = (size / (1024*1024)).toFixed(2)
		return(
			<FileItemStyled situation={situation} onClick={this.stopClick}>
				{`${name} (${size}mb)`}
				<a href='javascript:void(0)' onClick={remove.bind(this, this.props)}>
					<span>{ situation === 'accepted' ? '✔' : '!' }</span>
					<span className='remove'>×</span>
				</a>
			</FileItemStyled>
		)
	}
}

export default FileItem