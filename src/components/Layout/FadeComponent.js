import React from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';

const FadeComponent = ({ changeKey, children }) => {
    return (
        <SwitchTransition mode='out-in'>
            <CSSTransition
                key={changeKey}
                timeout={250}
                classNames='animated-list'
                in={true}
                appear={true}
            >
                { children }
            </CSSTransition>
        </SwitchTransition>
    )
}

export default FadeComponent
