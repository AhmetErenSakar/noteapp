import React from 'react'
import '../../src/App.css'
import { useSelector } from 'react-redux'


function NoteList() {

    const items = useSelector(state => state.notes.items)

    console.log(items);
    return (
        <div className="noteList">
            {
                items.map((item, idx) => {
                    return (
                        <div key={idx} className={`note ${item.color}`} >
                            <p>{item.text}</p>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default NoteList