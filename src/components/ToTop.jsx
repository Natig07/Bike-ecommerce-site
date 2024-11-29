import { Tooltip } from 'antd';
import React, { useEffect } from 'react'
import arrow_b from '../assets/images/up-arrow.png'
import arrow_w from '../assets/images/up-arrow-w.png'



function ToTop() {

    const MoveTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Tooltip placement='bottom' title='UP'>
            < img src={document.body.classList.contains('dark-mode') ? arrow_w : arrow_b} style={{
                height: 40,
                width: 43,
                transform: 'rotateX(-180deg) rotate(90deg)',
                position: 'fixed',
                bottom: 55,
                right: 15,
                zIndex: 30,
                cursor: 'pointer'
            }} onClick={MoveTop} />
        </Tooltip>
    )

}

export default ToTop