import { useState } from "react";

const Input = ({ submitSource }) => {
    const [ newName, setNewName ] = useState('');
    const [ newEmail, setNewEmail ] = useState('');
    console.log(newName);
    console.log(newEmail);

    return (
        <>
        <br></br>
            <div className = "bar">
                <div className="srcname">Source Name: </div>
                <input className="rectangle" type="text" value={newName} onChange={e => setNewName(e.target.value)}></input>
                <div className="srcemail">Source Email: </div>
                <input className="rectangle2" type="text" value={newEmail} onChange={x => setNewEmail(x.target.value)}></input>
            <button className="green" onClick={() => submitSource(newName,newEmail)}>Submit</button>
            </div>
        </>
    )
};

export default Input;