import styled, { keyframes } from 'styled-components';
import stripe from './stripe.png';
import { colors } from '../style'

const animateScale = keyframes`
  from {
    transform: scale(0)
  }

  to {
    transform: scale(1)
  }
`;

const animateBg = keyframes`
  from {
    background-position-x: -100%;
  }

  to {
    background-position-x: 100%;
  }
`;

const progressWidth = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`;

const FileItemStyled = styled.div`
	font-family: sans-serif;
	list-style: none;
	margin: 0;
	border-radius: 26px;
	height: 26px;
	line-height: 26px;
	font-size: 13px;
	color: #fff;
	text-align: left;
	position: relative;
	margin-bottom: 10px;
	overflow: hidden;
	${props => props.situation === 'accepted' ? `
		background: ${colors.accepted};
	` : `
		background: ${colors.refected};
	`}

	> span {
		padding: 0 10px;
		position: absolute;
		top: 0;
		left: 0;
		right: 30px;
		bottom: 0;
		z-index: 99;
	}

	a {
		display: block;
		width: 20px;
		height: 20px;
		line-height: 20px;
		font-weight: bold;
		border-radius: 20px;
		background: #fff;
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

	&.loading {
		background: #acacac;

		a span {
			display: none;
		}

		a .remove {
			display: block;
			color: #acacac;
		}
	}

	&.accepted.loaded {
		a {
			animation: ${animateScale} .5s cubic-bezier(0.64, 0.57, 0.67, 1.53);
		}
	}
`

const ProgressBar = styled.div`
	&.loading {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 0;
		background: url(${stripe});
		animation: ${animateBg} 10s linear infinite, ${progressWidth} ${props => props.timeAnimation}ms linear forwards;
		border-radius: 26px;
	}
`

export { FileItemStyled, ProgressBar }
