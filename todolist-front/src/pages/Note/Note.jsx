import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import NoteMemo from '../../components/Note/NoteMemo';

function Note(props) {
    return (
        <>
            <MainContainer>
                <NoteMemo />
            </MainContainer>
        </>
    );
}

export default Note;