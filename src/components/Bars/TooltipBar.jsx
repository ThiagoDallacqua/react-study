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
    outline: none; // remove styles padrão do navigador para os botões!

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

const List = styled.ul`
    list-style: none;
    margin-bottom: 25px;
    cursor: pointer;
`;

const ListItem = styled.li`
    margin-bottom: 5px;
`;

const NavList = ({ menuText, subMenu }) => {
    const [showSubList, setShowSubList] = useState(false);

    return (
        <ListItem onClick={() => setShowSubList(!showSubList)}>
            {menuText}
            {
                showSubList && (
                    <List>
                        {subMenu.map(name => (
                            <ListItem key={Math.random()}>{name}</ListItem>
                        ))}
                    </List>
                )
            }
        </ListItem>
    )
}

const TooltipBar = () => {
    const [message, setMessage] = useState('');

    const submenu = ['um', 'dois', 'três'];

    return (
        <BoxOfShadows>
            <h2>Directions Tooltips</h2>
            <List>
                <NavList menuText='menu1' subMenu={submenu} />

                <NavList menuText='menu2' subMenu={submenu} />

                <NavList menuText='menu3' subMenu={submenu} />

                <NavList menuText='menu4' subMenu={submenu} />
            </List>
            <ButtonStylized
                color="#00a651"
                onClick={() => setMessage('o botão VERDE foi clickado!')}
            ><Text>Tooltip on Top</Text> </ButtonStylized>
            <ButtonStylized
                color="#3f399e"
                onClick={() => setMessage('o botão ROXO foi clickado!')}
            ><Text>Tooltip on Right</Text> </ButtonStylized>
            <ButtonStylized
                color="#f9a825"
                onClick={() => setMessage('o botão LARANJA foi clickado!')}
            ><Text>Tooltip on Bottom</Text> </ButtonStylized>
            <ButtonStylized
                color="#00b0ff"
                onClick={() => setMessage('o botão AZUL foi clickado!')}
            ><Text>Tooltip on Left</Text> </ButtonStylized>
            <span>{`${message || 'Aqui a mensagem vai aparecer'}`}</span>
        </BoxOfShadows>
    );
}
export default TooltipBar