import React, { useReact, useEfect, Fragment, useEffect, useState } from 'react';
import styled from 'styled-components'

const Text = styled.span`
    color: #000;
`;

const ButtonStylized = styled.button`

    width: 129px;
    height: 41px;
    border-radius: 6px;
    background-color: ${props => props.color};
    margin: 0 15px;
    border: none;

    ${Text} { 
        color: white;
    }
`;

const BoxOfShadows = styled.div`
    width: 1590px;
    height: 166px;
    box-shadow: 0px 10px 20px 0 rgba(229, 229, 230, 0.75);
    background-color: #ffffff;

    h2 {
        margin-left: 15px;
    }

    Fragment {
        display: flex;  
        align-items: center;
    }
    
`;


const TooltipBar = () => {
    uses

    return (
        <BoxOfShadows> 
            <h2>Directions Tooltips</h2> 
            <ButtonStylized color="#00a651"><Text>Tooltip on Top</Text> </ButtonStylized>
            <ButtonStylized color="#3f399e"><Text>Tooltip on Right</Text> </ButtonStylized>
            <ButtonStylized color="#f9a825"><Text>Tooltip on Bottom</Text> </ButtonStylized>
            <ButtonStylized color="#00b0ff"><Text>Tooltip on Left</Text> </ButtonStylized>
            <span>{`Aqui a mensagem vai aparecer`}</span>
        </BoxOfShadows>
    );
}
export default TooltipBar