// import React from 'react';
import styled from 'styled-components';

const colors = {
	text: '#adacae',
	box: '#ccc',
	link: '#78a1cd'
}

const Wrapper = styled.div`
	max-width: 900px;
	margin: 0 auto;
	text-align: center;
`

const DropZoneStyle = (component) => (
	styled(component)`
		display: inline-block;
		width: 250px;
		height: 250px;
		border: 3px dashed ${colors.text};
		border-radius: 10px;
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

export {
	Wrapper,
	DropZoneStyle,
	DropzoneTitle,
	BoxIcons
}