import {useState} from 'react'

export default function TextBox(props) {
    const [text, setText] = useState(" ");

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    
    const handleLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    
    const handleClearText = () => {
        let newText = " "
        setText(newText)
        props.showAlert("Text Cleard","success")
    }
    
    const handleCopy = () => {
        let newText = document.getElementById('myBox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Copied to clipboard","success")
    }
    
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")
    }

    const countWords=(str)=> {
        const array = str.split(' ');

        return array.filter(word => word !== '').length;
    }

    // const countCharacters = (str) => { 
    //     let count = 0;
    //     for (let i = 0, len = str.length; i < len; i++) {
    //         if (str[i] !== ' ')
    //             count++ ;
    //     }
    // }
    
    return (
        <div>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>{
                    props.heading
                }</h1>
                <div className="mb-3">
                    <textarea style={{ background: props.mode === "light" ? "white" : "#1a1a1a", color: props.mode === "light" ? "black" : "white" }} className="form-control"
                        onChange={handleOnChange}
                        value={text}
                        id="myBox"
                        rows="10"></textarea>
                </div>
            </div>
            <div className="container my-3">
                <button className="btn btn-success"
                    onClick={handleUpperCase}>
                    To Uppercase
                </button>
                <button style={
                        {marginLeft: '20px'}
                    }
                    className="btn btn-primary"
                    onClick={handleLowerCase}>
                    To LowerCase
                </button>
                <button style={
                        {marginLeft: '20px'}
                    }
                    className="btn btn-secondary"
                    onClick={handleClearText}>
                    Clear Text
                </button>
                <button style={
                        {marginLeft: '20px'}
                    }
                    className="btn btn-warning"
                    onClick={handleCopy}>
                    Copy Text
                </button>
                <button style={
                        {marginLeft: '20px'}
                    }
                    className="btn btn-danger"
                    onClick={handleExtraSpace}>
                    Remove Extra Space
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>Your text summary</h1>
                <p> {
                    countWords(text) 
                } 
                      &nbsp;words and {
                    text.length
                } 
                    &nbsp; characters
                </p>
                <p>Will take {
                    0.008 * text.split(" ").length
                }
                    &nbsp; minutes read</p>
                <h1>Text Preview</h1>
                <p>{text.length>0?text:'Enter something in the text box below to preview here'}</p>
            </div>
        </div>
    );
}
