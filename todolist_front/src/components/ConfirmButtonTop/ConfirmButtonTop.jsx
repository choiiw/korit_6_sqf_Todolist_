/** @jsxImportSource @emotion/react */
import { changeTodo } from "../../apis/todoApis/modifyTodoApi";
import * as s from "./style";

function ConfirmButtonTop({ onSubmit, onCancel, disabled }) {

    const handleCancelClick = () => {
        onCancel();
    }
    
    const handlesubmitlClick = () => {
        onSubmit();
    }

    return (
        <div css={s.layout}>
            <button onClick={handleCancelClick}>취소</button>
            <button onClick={handlesubmitlClick} disabled={disabled} >완료</button>
        </div>
    );
}

export default ConfirmButtonTop;