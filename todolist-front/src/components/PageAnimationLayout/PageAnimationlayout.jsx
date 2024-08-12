/** @jsxImportSource @emotion/react */
import * as s from "./style";

function PageAnimationlayout({isShow, children }) {
    


    return (
        <div css={s.layout(isShow)}>
            { children }
        </div>
    );
}

export default PageAnimationlayout;