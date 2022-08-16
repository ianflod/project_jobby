import React from "react";
import Confetti from 'react-dom-confetti';
import ImageModal from "./ImageModal";

function ExplodingConfetti() {
    const [isExploding, setIsExploding] = React.useState(false);

    // todo: make confetti dynamic to screen size
    const config = {
        angle: '280',
        spread: '360',
        startVelocity: 30,
        elementCount: 500,
        dragFriction: 0.12,
        duration: 4000,
        stagger: 0,
        width: '12px',
        height: '12px',
        perspective: '500px',
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    };


    return (
        <>
            <p onClick={() => setIsExploding(!isExploding)}>
                <Confetti active={isExploding} config={config} />
                <ImageModal />
            </p>
        </>
    )

}

export default ExplodingConfetti;