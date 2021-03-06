import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    position: relative;
    display: block;
    background-color: rgba(255, 255, 255, 0.075);
    border: 0;
    color: #ffffff;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    font-size: 90%;
    padding: 1.25em 1.5em;
    transition: .1s;
    span {
        position: absolute;
        display: block;
        width: .5em;
        height: .5em;
        transition: .1s;
    }
    .top-left {
        border-top: .1em solid #ffffff;
        border-left: .1em solid #ffffff;
        top: 0;
        left: 0;
    }
    .top-right {
        border-top: .1em solid #ffffff;
        border-right: .1em solid #ffffff;
        top: 0;
        right: 0;
    }
    .bottom-left {
        border-bottom: .1em solid #ffffff;
        border-left: .1em solid #ffffff;
        bottom: 0;
        left: 0;
    }
    .bottom-right {
        border-bottom: .1em solid #ffffff;
        border-right: .1em solid #ffffff;
        bottom: 0;
        right: 0;
    }
    &:hover {
        background-color: #ffffff;
        color: #070707;
        .top-left {
            top: -.5em;
            left: -.5em;
        }
        .top-right {
            top: -.5em;
            right: -.5em;
        }
        .bottom-left {
            bottom: -.5em;
            left: -.5em;
        }
        .bottom-right {
            bottom: -.5em;
            right: -.5em;
        }
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 75%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 80%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 85%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 85%; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 80%; }
`;
const Button = ({ 
    value, 
    onClick, 
    type
}) => {
    return (
        <StyledButton 
            type={type} 
            onClick={onClick}
        >
            <span className="top-left"></span>
            <span className="top-right"></span>
            { value }
            <span className="bottom-left"></span>
            <span className="bottom-right"></span>
        </StyledButton>
    );
}
 
export default Button;

Button.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired
}