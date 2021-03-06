import React from 'react'
import Note from './Notes'
import { useStateValue } from './State'

const Collection = () => {
    console.log("rendering collection")
    const [{notes}, dispatch] = useStateValue();
    return (
        <React.Fragment>
            {
                notes.map((note) => (
                    <Note key={note._id} note={note}  notes={notes} />
                ))
            }
        </React.Fragment>
    );
}

export default React.memo(Collection, ((prev, current) => {
    return JSON.stringify(prev) == JSON.stringify(current)
}));
