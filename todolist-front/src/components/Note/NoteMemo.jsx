import { useState } from "react";

function NoteMemo(props) {


    const [ memo, setMemo ] = useState({
        content: ""
    });

    const handleOnChange = (e) => {
        setMemo(memo => ({
            ...memo,
            [e.target.name]: e.target.value
        }))     
    }

    const handleKeyDown = (e) => {

        if(e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            handlesubmitClick();
        }
    }

    const handlesubmitClick = () => {
        if(memo.content.trim() === "") {
            alert("aa");
        } else{
            console.log(memo);

        }
            
        
    }

    return (
        <div>
            <h1>메모</h1>
            <div>
                <textarea name="content" value={memo.content} onChange={handleOnChange} onKeyDown={handleKeyDown} />
            </div>
            <button onClick={handlesubmitClick}>확인</button>
        </div>
    );
}

export default NoteMemo;