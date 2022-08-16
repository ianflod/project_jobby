import React, { useState } from "react";

// Random image helper
// https://stackoverflow.com/questions/61531025/how-do-i-display-a-random-image-retrieved-from-an-array-in-react-native
const RandomImage = () => {
    const Images = [
        'baby.jpeg',
        'cat.png',
        'good-luck-good.png',
        'hamster.png',
        'obama.png',
        'jeff.png'
    ]

    const [img, setImg] = useState(
        Images[Math.floor(Math.random() * Images.length)]
    );

    return (
        <>
            <div ClassName="modal-img">
                <img src={`images/${img}`} alt={'good luck'} />
            </div>
        </>
    )
}

export default RandomImage;