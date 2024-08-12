/** @jsxImportSource @emotion/react */
import ReactModal from 'react-modal';
import { useRecoilState } from 'recoil';
import { registerModalAtom } from '../../atoms/modalAtoms';
import { useState } from 'react';
import RegisterTodo from '../RegisterTodo/RegisterTodo';

function RegisterModal({ containerRef }) {
    const [ isOpen, setOpen ] = useRecoilState(registerModalAtom);
    const [ animation, setAnimation ] = useState("registerModalContentOpen");

    const closeModal = () => {
        setAnimation("registerModalContentClose");
        setTimeout(() =>{
            setAnimation("registerModalContentOpen");
            setOpen(false)}
            , 500);
        // setOpen(false);
    }

    return (
        <ReactModal
            style={{
                overlay: {
                    position: "absolute",
                    backgroundColor: "transparent"
                },
                content: {
                    inset: "auto 0 0",
                    boxSizing: "border-box",
                    borderRadius: "10px",
                    padding: "0",
                    width: "100%",
                    height: "80%",
                    animation: `${animation} 0.6s 1`
                }
            }}
            isOpen={isOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            parentSelector={() => containerRef.current}
        >
            <RegisterTodo closeModal={closeModal}/>
        </ReactModal>
    );
}

export default RegisterModal;