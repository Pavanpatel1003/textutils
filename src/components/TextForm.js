import React, { useState } from 'react'
export default function TextForm(props) {

    const handleuppaarcase = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to upparcaaase", "sucess")
    }

    const handleonchange = (event) => {
        setText(event.target.value)
    }

    const handlelowercase = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Convert to lowercase", "sucess")

    }

   const handleCopytext = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copiedto clipboard!", "sucess")
    }

    const handleextraspaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Clear extraspaces", "sucess")

    }

    const handleCleartext = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleartext", "sucess")

    }


    // hookes
    const [text, setText] = useState(' ');
    // setText('Pavan')
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h2 className='mb-2'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleuppaarcase} >Convert to Upparcase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handlelowercase} >Convert to Lowercase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopytext} >Copy text</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleextraspaces} >Remove extra spaces</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCleartext} >Clear text</button>

            </div>

            <div className="contaainer my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>your text summary</h2>
                <p>{text.split(/\s+/).filter((Element) => { return Element.length !== 0 }).length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((Element) => { return Element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}