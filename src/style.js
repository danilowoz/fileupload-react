import styled from 'styled-components';

const colors = {
	text: '#adacae',
	box: '#ccc',
	link: '#78a1cd',
	accepted: '#5ca343',
	refected: '#f44b5c'
}

const Wrapper = styled.div`
	max-width: 900px;
	margin: 0 auto;
	text-align: center;
`

const DropZoneStyle = (component) => (
	styled(component)`
		display: inline-block;
		padding: 20px;
		box-sizing: content-box;
		width: 250px;
		min-height: 250px;
		border: 3px dashed ${colors.text};
		border-radius: 10px;
		background: white;
		z-index: 999;
		&:after {
			content: "";
			position: fixed;
			background: rgba(0,0,0,0);
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			z-index: -1;
			transition: all .3s ease;
		}
		&.dragged {

			&:after {
				background: rgba(0,0,0,0.3);
			}
		}
	`
)

const ButtonClean = styled.button`
	border: 0;
	background: #eee;
	color: #999;
	display: block;
	margin: 20px auto;
	border-radius: 3px;
	padding: 5px 10px;
	cursor: pointer;
`

export {
	colors,
	Wrapper,
	DropZoneStyle,
	ButtonClean
}