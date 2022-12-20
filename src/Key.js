import { useState } from "react";

export default function Key({
    keySVG,
    keyPressedSVG,
    className,
    keyCode,
    playingKeys,
}) {
    // const [pressed, setPressed] = useState(false);

    // if (playingKeys.includes(keyCode)) {
    //     setPressed(true);
    // }
    return (
        <>
            <img
                src={playingKeys.includes(keyCode) ? keyPressedSVG : keySVG}
                className={className}
            />
        </>
    );
}
