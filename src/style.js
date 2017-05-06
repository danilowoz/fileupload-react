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
		${props => props.dragged ? `

			&:after {
				background: rgba(0,0,0,0.3);
			}
		` : ``}	
	`
)

const DropzoneTitle = styled.h2`
	font-family: sans-serif;
	text-transform: uppercase;
	color: ${colors.text};
	font-weight: bold;
	line-height: 1.3;
	font-size: 20px;
	margin: 0;
	span {
		display: block;
		text-transform: none;
		font-weight: normal;
		font-size: 16px;
	}
	.link {
		color: ${colors.link}
		text-decoration: underline;
		&:hover {
			text-decoration: none;
		}
	}
`

const BoxIcons = styled.div`
	width: 100%;
	height: 150px;
	position: relative;

	img {
		position: absolute;
		opacity: .2;
		width: 50px;
		transition: all .3s ease;
	}

	.cloud {
		bottom: 15px;
		width: 35px;
		left: calc(50% - (35px / 2));
	}

	.pdf {
		left: 45px;
		top: 75px;
		transform: rotate(-28deg);
	}

	.jpg {
		top: 35px;
		left: calc(50% - (50px / 2));
		transform: rotate(-5deg);
	}

	.doc {
		transform: rotate(20deg);
		right: 45px;
		top: 70px;
	}

	${props => props.dragged ? `

		img {
			opacity: .5;
		}

		.pdf {
			top: 65px;
			left: 35px;
			transform: rotate(-35deg);
		}

		.jpg {
			top: 27px;
			left: calc(50% - (50px / 2) - 5px);
			transform: rotate(-13deg);
		}

		.doc {
			top: 60px;
			right: 40px;
			transform: rotate(25deg);
		}

	` : ``}
`

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
		border-radius: 20px;
		background: white;
		position: absolute;
		top: 3px;
		right: 3px;
	}
`

export {
	Wrapper,
	DropZoneStyle,
	DropzoneTitle,
	BoxIcons,
	FileItemStyled
}