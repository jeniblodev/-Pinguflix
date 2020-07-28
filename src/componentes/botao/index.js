import React from 'react';

function BotaoLink(props) {
    console.log(props);
    return (
        <a className={props.className} href={props.href}>
            Novo vídeo
        </a>
     
    );
}

export default BotaoLink;