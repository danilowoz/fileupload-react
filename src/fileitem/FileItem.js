import React, {Component} from 'react'
import { FileItemStyled, ProgressBar } from './style'

class FileItem extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: this.props.situation === 'accepted',
			// just progressbar
			timeAnimation: Number(this.props.size)/200
		}
	}

	componentWillMount() {

		// just progressbar
		setTimeout( () => {
			this.setState({
				loading: false
			})
		}, this.state.timeAnimation)
	}

	stopClick (e) {
		e.stopPropagation();
	}

	render() {
		let { name, size, situation, remove } = this.props
		let loadingClass = this.state.loading ? 'loading': 'loaded'
		size = (size / (1024*1024)).toFixed(2)
		
		return(
			<FileItemStyled situation={situation} onClick={this.stopClick} className={`${this.props.situation} ${loadingClass}`}>
				<span>{`${name} (${size}mb)`}</span>
				<ProgressBar className={loadingClass} timeAnimation={this.state.timeAnimation}/>
				<a href='javascript:void(0)' onClick={remove.bind(this, this.props)}>
					<span>{ situation === 'accepted' ? '✔' : '!' }</span>
					<span className='remove'>×</span>
				</a>
			</FileItemStyled>
		)
	}
}

export default FileItem