import logo from "./logo.svg";
import whiteKey from "./whiteKey.svg";
import whiteKeyLeft from "./whiteKeyLeft.svg";
import whiteKeyRight from "./whiteKeyRight.svg";
import blackKey from "./blackKey.svg";
import whiteKeyPressed from "./whiteKeyPressed.svg";
import whiteKeyLeftPressed from "./whiteKeyLeftPressed.svg";
import whiteKeyRightPressed from "./whiteKeyRightPressed.svg";
import blackKeyPressed from "./blackKeyPressed.svg";
import { pianoSounds } from "./pianoSounds";
import "./App.css";
import Key from "./Key";
import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";

function App() {
    const [playingKeys, setPlayingKeys] = useState([]);
    const [notes, setNotes] = useState([]);
    const [keyCodesOrdered, setKeyCodesOrdered] = useState([
        "ShiftLeft",
        "CapsLock",
        "IntlBackslash",
        "KeyA",
        "KeyZ",
        "KeyX",
        "KeyD",
        "KeyC",
        "KeyF",
        "KeyV",
        "KeyG",
        "KeyB",
        "KeyH",
        "KeyU",
        "KeyJ",
        "KeyI",
        "KeyK",
        "KeyL",
        "KeyP",
        "Semicolon",
        "BracketLeft",
        "Quote",
        "BracketRight",
        "Backslash",
        "Backquote",
        "Digit1",
        "KeyQ",
        "Digit2",
        "KeyW",
        "KeyE",
        "Digit4",
        "KeyR",
        "Digit5",
        "KeyT",
        "Digit6",
        "KeyY",
    ]);
    const [lastPlayed, setLastPlayed] = useState([
        Array(pianoSounds.length).fill(null),
    ]);
    const [playing, setPlaying] = useState(
        Array(pianoSounds.length * 3).fill(null)
    );

    useEffect(() => {
        let notesArray = Array(pianoSounds.length * 3);
        for (let i = 0; i < pianoSounds.length * 3; i += 3) {
            notesArray[i] = new Howl({ src: [pianoSounds[i / 3]] });
            notesArray[i + 1] = new Howl({ src: [pianoSounds[i / 3]] });
            notesArray[i + 2] = new Howl({ src: [pianoSounds[i / 3]] });
        }

        setNotes(notesArray);
    }, []);

    function playNote(indexDiv3) {
        const index = indexDiv3 * 3;
        if (!notes[index].playing()) {
            notes[index].seek(0);
            notes[index].volume(1);
            notes[index].play();
            let playingCopy = playing.slice(0);
            playingCopy[index] = notes[index];
            setPlaying(playingCopy);
            let lastPlayedCopy = lastPlayed.slice(0);
            lastPlayedCopy[indexDiv3] = 1;
            setLastPlayed(lastPlayedCopy);
        } else if (!notes[index + 1].playing()) {
            notes[index + 1].seek(0);
            notes[index + 1].volume(1);
            notes[index + 1].play();
            let playingCopy = playing.slice(0);
            playingCopy[index + 1] = notes[index + 1];
            setPlaying(playingCopy);
            let lastPlayedCopy = lastPlayed.slice(0);
            lastPlayedCopy[indexDiv3] = 2;
            setLastPlayed(lastPlayedCopy);
        } else if (!notes[index + 2].playing()) {
            notes[index + 2].seek(0);
            notes[index + 2].volume(1);
            notes[index + 2].play();
            let playingCopy = playing.slice(0);
            playingCopy[index + 2] = notes[index + 2];
            setPlaying(playingCopy);
            let lastPlayedCopy = lastPlayed.slice(0);
            lastPlayedCopy[indexDiv3] = 3;
            setLastPlayed(lastPlayedCopy);
        }
    }

    function handleKeyDown(event) {
        if (!playingKeys.includes(event.code)) {
            let copy = playingKeys.slice();
            copy.push(event.code);
            setPlayingKeys(copy);
            console.log(keyCodesOrdered[1]);

            switch (event.code) {
                case keyCodesOrdered[0]:
                    playNote(0);
                    break;
                case keyCodesOrdered[1]:
                    playNote(1);
                    break;
                case keyCodesOrdered[2]:
                    playNote(2);
                    break;
                case keyCodesOrdered[3]:
                    playNote(3);
                    break;
                case keyCodesOrdered[4]:
                    playNote(4);
                    break;
                case keyCodesOrdered[5]:
                    playNote(5);
                    break;
                case keyCodesOrdered[6]:
                    playNote(6);
                    break;
                case keyCodesOrdered[7]:
                    playNote(7);
                    break;
                case keyCodesOrdered[8]:
                    playNote(8);
                    break;
                case keyCodesOrdered[9]:
                    playNote(9);
                    break;
                case keyCodesOrdered[10]:
                    playNote(10);
                    break;
                case keyCodesOrdered[11]:
                    playNote(11);
                    break;
                case keyCodesOrdered[12]:
                    playNote(12);
                    break;
                case keyCodesOrdered[13]:
                    playNote(13);
                    break;
                case keyCodesOrdered[14]:
                    playNote(14);
                    break;
                case keyCodesOrdered[15]:
                    playNote(15);
                    break;
                case keyCodesOrdered[16]:
                    playNote(16);
                    break;
                case keyCodesOrdered[17]:
                    playNote(17);
                    break;
                case keyCodesOrdered[18]:
                    playNote(18);
                    break;
                case keyCodesOrdered[19]:
                    playNote(19);
                    break;
                case keyCodesOrdered[20]:
                    playNote(20);
                    break;
                case keyCodesOrdered[21]:
                    playNote(21);
                    break;
                case keyCodesOrdered[22]:
                    playNote(22);
                    break;
                case keyCodesOrdered[23]:
                    playNote(23);
                    break;
                case keyCodesOrdered[24]:
                    playNote(24);
                    break;
                case keyCodesOrdered[25]:
                    playNote(25);
                    break;
                case keyCodesOrdered[26]:
                    playNote(26);
                    break;
                case keyCodesOrdered[27]:
                    playNote(27);
                    break;
                case keyCodesOrdered[28]:
                    playNote(28);
                    break;
                case keyCodesOrdered[29]:
                    playNote(29);
                    break;
                case keyCodesOrdered[30]:
                    playNote(30);
                    break;
                case keyCodesOrdered[31]:
                    playNote(31);
                    break;
                case keyCodesOrdered[32]:
                    playNote(32);
                    break;
                case keyCodesOrdered[33]:
                    playNote(33);
                    break;
                case keyCodesOrdered[34]:
                    playNote(34);
                    break;
                case keyCodesOrdered[35]:
                    playNote(35);
                    break;
            }
        }
    }

    function stopNote(index) {
        playing.slice(0);
        playing[index].fade(1, 0, 300);
        setTimeout(() => {
            playing[index].stop();
            playing[index].volume(1);
        }, 300);
        let playingCopy = playing.slice(0);
        playingCopy[index] = null;
        setPlaying(playingCopy);
    }

    function jeff(i) {
        if (lastPlayed[i] == 1) {
            stopNote(i * 3);
        } else if (lastPlayed[i] == 2) {
            stopNote(i * 3 + 1);
        } else if (lastPlayed[i] == 3) {
            stopNote(i * 3 + 2);
        }
    }

    function handleKeyUp(event) {
        if (playingKeys.includes(event.code)) {
            const removed = playingKeys.filter((x) => x !== event.code);
            setPlayingKeys(removed);

            switch (event.code) {
                case keyCodesOrdered[0]:
                    jeff(0);
                    break;
                case keyCodesOrdered[1]:
                    jeff(1);
                    break;
                case keyCodesOrdered[2]:
                    jeff(2);
                    break;
                case keyCodesOrdered[3]:
                    jeff(3);
                    break;
                case keyCodesOrdered[4]:
                    jeff(4);
                    break;
                case keyCodesOrdered[5]:
                    jeff(5);
                    break;
                case keyCodesOrdered[6]:
                    jeff(6);
                    break;
                case keyCodesOrdered[7]:
                    jeff(7);
                    break;
                case keyCodesOrdered[8]:
                    jeff(8);
                    break;
                case keyCodesOrdered[9]:
                    jeff(9);
                    break;
                case keyCodesOrdered[10]:
                    jeff(10);
                    break;
                case keyCodesOrdered[11]:
                    jeff(11);
                    break;
                case keyCodesOrdered[12]:
                    jeff(12);
                    break;
                case keyCodesOrdered[13]:
                    jeff(13);
                    break;
                case keyCodesOrdered[14]:
                    jeff(14);
                    break;
                case keyCodesOrdered[15]:
                    jeff(15);
                    break;
                case keyCodesOrdered[16]:
                    jeff(16);
                    break;
                case keyCodesOrdered[17]:
                    jeff(17);
                    break;
                case keyCodesOrdered[18]:
                    jeff(18);
                    break;
                case keyCodesOrdered[19]:
                    jeff(19);
                    break;
                case keyCodesOrdered[20]:
                    jeff(20);
                    break;
                case keyCodesOrdered[21]:
                    jeff(21);
                    break;
                case keyCodesOrdered[22]:
                    jeff(22);
                    break;
                case keyCodesOrdered[23]:
                    jeff(23);
                    break;
                case keyCodesOrdered[24]:
                    jeff(24);
                    break;
                case keyCodesOrdered[25]:
                    jeff(25);
                    break;
                case keyCodesOrdered[26]:
                    jeff(26);
                    break;
                case keyCodesOrdered[27]:
                    jeff(27);
                    break;
                case keyCodesOrdered[28]:
                    jeff(28);
                    break;
                case keyCodesOrdered[29]:
                    jeff(29);
                    break;
                case keyCodesOrdered[30]:
                    jeff(30);
                    break;
                case keyCodesOrdered[31]:
                    jeff(31);
                    break;
                case keyCodesOrdered[32]:
                    jeff(32);
                    break;
                case keyCodesOrdered[33]:
                    jeff(33);
                    break;
                case keyCodesOrdered[34]:
                    jeff(34);
                    break;
                case keyCodesOrdered[35]:
                    jeff(35);
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
                        keyCode={keyCodesOrdered[0]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[1]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[2]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[3]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[4]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[5]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[6]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[7]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[8]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[9]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[10]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[11]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[12]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[13]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[14]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[15]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[16]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[17]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[18]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[19]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[20]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[21]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[22]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[23]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[24]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[25]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[26]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[27]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[28]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[29]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[30]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[31]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[32]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKey}
                        keyPressedSVG={whiteKeyPressed}
                        className="white-key"
                        keyCode={keyCodesOrdered[33]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={blackKey}
                        keyPressedSVG={blackKeyPressed}
                        className="black-key"
                        keyCode={keyCodesOrdered[34]}
                        playingKeys={playingKeys}
                    />
                    <Key
                        keySVG={whiteKeyRight}
                        keyPressedSVG={whiteKeyRightPressed}
                        className="white-key-right"
                        keyCode={keyCodesOrdered[35]}
                        playingKeys={playingKeys}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
