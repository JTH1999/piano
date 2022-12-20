import logo from "./logo.svg";
import whiteKey from "./whiteKey.svg";
import whiteKeyLeft from "./whiteKeyLeft.svg";
import whiteKeyRight from "./whiteKeyRight.svg";
import blackKey from "./blackKey.svg";
import whiteKeyPressed from "./whiteKeyPressed.svg";
import whiteKeyLeftPressed from "./whiteKeyLeftPressed.svg";
import whiteKeyRightPressed from "./whiteKeyRightPressed.svg";
import blackKeyPressed from "./blackKeyPressed.svg";
import cAudio from "./Sounds/key08.mp3";
import csAudio from "./Sounds/key09.mp3";
import dAudio from "./Sounds/key10.mp3";
import dsAudio from "./Sounds/key11.mp3";
import eAudio from "./Sounds/key12.mp3";
import fAudio from "./Sounds/key13.mp3";
import fsAudio from "./Sounds/key14.mp3";
import gAudio from "./Sounds/key15.mp3";
import gsAudio from "./Sounds/key16.mp3";
import aAudio from "./Sounds/key17.mp3";
import asAudio from "./Sounds/key18.mp3";
import bAudio from "./Sounds/key19.mp3";
import "./App.css";
import Key from "./Key";
import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";

function App() {
    const [playingKeys, setPlayingKeys] = useState([]);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const c = new Howl({
            src: [cAudio],
            sprite: {
                id1: [0, 4000],
                id2: [0, 4000],
                id3: [0, 4000],
            },
        });
        const cs = new Howl({ src: [csAudio] });
        const d = new Howl({ src: [dAudio] });
        const ds = new Howl({ src: [dsAudio] });
        const e = new Howl({ src: [eAudio] });
        const f = new Howl({ src: [fAudio] });
        const fs = new Howl({ src: [fsAudio] });
        const g = new Howl({ src: [gAudio] });
        const gs = new Howl({ src: [gsAudio] });
        const a = new Howl({ src: [aAudio] });
        const as = new Howl({ src: [asAudio] });
        const b = new Howl({ src: [bAudio] });

        setNotes([c, cs, d, ds, e, f, fs, g, gs, a, as, b]);
    }, []);

    function handleKeyDown(event) {
        if (!playingKeys.includes(event.code)) {
            let copy = playingKeys.slice();
            copy.push(event.code);
            setPlayingKeys(copy);

            switch (event.code) {
                case "KeyA":
                    // if (notes[0].playing()) {
                    //     notes[0].seek(0);
                    //     notes[0].volume(1);
                    //     notes[0].play();
                    // }
                    var id1 = notes[0].play();
                    break;
                case "KeyS":
                    notes[1].play();
                    break;
                case "KeyD":
                    notes[2].play();
                    break;
                case "KeyF":
                    notes[3].play();
                    break;
                case "KeyG":
                    notes[4].play();
                    break;
                case "KeyH":
                    notes[5].play();
                    break;
                case "KeyJ":
                    notes[6].play();
                    break;
                case "KeyK":
                    notes[7].play();
                    break;
                case "KeyL":
                    notes[8].play();
                    break;
                case "Semicolon":
                    notes[9].play();
                    break;
                case "Quote":
                    notes[10].play();
                    break;
                case "Backslash":
                    notes[11].play();
                    break;
            }
        }
    }

    function handleKeyUp(event) {
        if (playingKeys.includes(event.code)) {
            const removed = playingKeys.filter((x) => x !== event.code);
            setPlayingKeys(removed);

            switch (event.code) {
                case "KeyA":
                    notes[0].fade(1, 0, 500, id1);
                    setTimeout(() => {
                        notes[0].pause(id1);
                        notes[0].seek(0, id1);
                        notes[0].volume(1, id1);
                    }, 500);
                    // notes[0].on("fade", () => {
                    //     notes[0].stop();
                    // });
                    //notes[0].stop();
                    break;
                case "KeyS":
                    notes[1].stop();
                    break;
                case "KeyD":
                    notes[2].stop();
                    break;
                case "KeyF":
                    notes[3].stop();
                    break;
                case "KeyG":
                    notes[4].stop();
                    break;
                case "KeyH":
                    notes[5].stop();
                    break;
                case "KeyJ":
                    notes[6].stop();
                    break;
                case "KeyK":
                    notes[7].stop();
                    break;
                case "KeyL":
                    notes[8].stop();
                    break;
                case "Semicolon":
                    notes[9].stop();
                    break;
                case "Quote":
                    notes[10].stop();
                    break;
                case "Backslash":
                    notes[11].stop();
                    break;
            }
        }
    }

    return (
        <div
            className="App"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
        >
            <div className="center">
                <div className="piano-bg">
                    <Key
                        keySVG={whiteKeyLeft}
                        keyPressedSVG={whiteKeyLeftPressed}
                        className="white-key-left"
                        keyCode="KeyA"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode="KeyS"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode="KeyD"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode="KeyF"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode="KeyG"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode="KeyH"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode="KeyJ"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode="KeyK"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode="KeyL"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode="Semicolon"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode="Quote"
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKeyRight}
                        keyPressedSVG={whiteKeyRightPressed}
                        className="white-key-right"
                        keyCode="Backslash"
                        playingKeys={playingKeys}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
