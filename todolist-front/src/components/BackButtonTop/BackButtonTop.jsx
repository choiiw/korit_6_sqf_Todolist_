/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";

function BackButtonTop({ setShow }) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        setShow(false);
        setTimeout(() => navigate("/todo"), 400);
    }

    return (
        <div css={s.layout}>
             <button onClick={handleBackClick}>&lt; 목록</button>
        </div>
    );
}

export default BackButtonTop;