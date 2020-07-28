import React from 'react';
import '../../menu.css'

function ButtonLink(props) {
    console.log(props);
    return (
        <a className={props.className} href={props.href} alt={props.alt}>
            {props.children}
        </a>
    );
}

export default ButtonLink;