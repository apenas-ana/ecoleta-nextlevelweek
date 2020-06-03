import React from 'react';

interface HeaderProps { // interface: forma de exibir a tipagem de um objeto
    title: string;
}
// React.FC = FC é FunctionComponent
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
};

export default Header;