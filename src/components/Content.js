import { useState } from 'react'

import { useDispatch } from "react-redux";
import { addNote } from "../redux/Note/NoteSlice";

function Content() {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [color, setColor] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!color || !text) {
            return;
        } else {
            dispatch(addNote({ id: 5, text: text, color: color, title: title }))
            setText('')
            setColor('')
        }

    }

    return (
        <div className="Content">
            <input className="search" placeholder="Search..." value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <form onSubmit={handleSubmit} >
                <textarea className="area" placeholder="Enter Your Note Here..." onChange={(e) => { setText(e.target.value) }} />
                <div className="buton">
                    <button className="btn P" onClick={() => setColor('pink')}></button>
                    <button className="btn M" onClick={() => setColor('purple')}></button>
                    <button className="btn S" onClick={() => setColor('yellow')}></button>
                    <button className="btn B" onClick={() => setColor('blue')}></button>
                    <button className="btn Y" onClick={() => setColor('green')}></button>
                    <button className="button" >ADD</button>
                </div>
            </form>
        </div>
    )
}

export default Content