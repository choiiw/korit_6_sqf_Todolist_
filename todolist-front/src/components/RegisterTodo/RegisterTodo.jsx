/** @jsxImportSource @emotion/react */
import ReactSelect from 'react-select';
import * as s from './style';
import { useEffect, useState } from 'react';
import { addTodoApi } from '../../apis/todoApis/addTodoApi';
import { useSetRecoilState } from 'recoil';
import { refreshTodolistAtom } from '../../atoms/todolistAtoms';

function RegisterTodo({ closeModal }) {


    const importantOptions = [
        { label: "중요함", value: 1 },
        { label: "중요하지않음", value: 2 },
    ];
    const busyOptions = [
        { label: "급함", value: 1 },
        { label: "급하지않음", value: 2 },
    ];

    const [todo, setTodo] = useState({
        title: "",
        content: "",
        dateTime: "",
        important: 1,
        busy: 1
    });

    const  setRefresh  = useSetRecoilState(refreshTodolistAtom);

    useEffect(() => {

        const parse = (value) => (value  < 10 ? "0" : "") + value;

        const now = new Date();
        const year = now.getFullYear();
        const month = parse(now.getMonth() + 1); 
        const day = parse(now.getDate());
        const hours = parse(now.getHours());
        const minutes = parse(now.getMinutes());
        
        setTodo(todo => ({
            ...todo,
            dateTime: `${year}-${month}-${day}T${hours}:${minutes}`
        }))
    },[]);

    const handleOnChange = (e) => {
        setTodo(todo => ({
            ...todo,
            [e.target.name]: e.target.value
        }))
    }

    const handleImportantSelectOnChange = (option) => {
        handleOnChange({ target: { name: "important", value: option.value } })
        // setTodo(todo => ({
        //     ...todo,
        //     important: option.value
        // }))
        // 둘 중 편한거 쓰면됨 같은 코드임
    }

    const handleBusySelectOnChange = (option) => {
        handleOnChange({ target: { name: "busy", value: option.value } })
        // setTodo(todo => ({
        //     ...todo,
        //     busy: option.value
        // }))
    }

    const handleSubmitClick = () => {
        console.log(todo);
        addTodoApi(todo);
        setRefresh(true);
        closeModal();
    }

    return (
        <div css={s.layout}>
            <header>
                <button onClick={closeModal}>취소</button>
                <h2>새로운 할 일</h2>
                <button onClick={handleSubmitClick} disabled={!todo.title.trim() || !todo.content.trim()}>추가</button>
            </header>
            <main>
                <div css={s.todoDataBox}>
                    <input type="text"
                        name='title'
                        onChange={handleOnChange}
                        placeholder='제목'
                        value={todo.title} />
                    <textarea name="content"
                        onChange={handleOnChange}
                        placeholder='메모'
                        value={todo.content}></textarea>
                </div>
                <div css={s.dateSelect}>
                    <input type="datetime-local"
                        name='dateTime'
                        onChange={handleOnChange}
                        value={todo.dateTime} />
                </div>
                <div css={s.importantSelect}>
                    <ReactSelect
                        onChange={handleImportantSelectOnChange}
                        styles={{
                            control: (style) => ({
                                ...style,
                                border: "none",
                                outline: "none",
                                boxShadow: "none",
                            })
                        }}
                        options={importantOptions}
                        value={importantOptions.filter(option => option.value === todo.important)[0]}
                    />
                    <div css={s.line}></div>
                    <ReactSelect
                        onChange={handleBusySelectOnChange}
                        styles={{
                            control: (style) => ({
                                ...style,
                                border: "none",
                                outline: "none",
                                boxShadow: "none"
                            }),
                        }}
                        options={busyOptions}
                        value={busyOptions.filter(option => option.value === todo.busy)[0]}
                    />
                </div>
            </main>
        </div>
    );
}

export default RegisterTodo;