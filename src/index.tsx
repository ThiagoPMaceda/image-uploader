import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const DashedRectangle = styled.div`
    width: 338px;
    height: 218.9px;
    background: #f6f8fb;
    border: 1px dashed #97bef4;
    border-radius: 12px;
`;

const UploaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 402px;
    height: 469px;

    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;

const UploaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: fixed;

    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;

const App = () => (
    <UploaderWrapper>
        <UploaderContainer>
            <h1>Upload you image</h1>
            <p>File should be Jpeg, Png...</p>
            <DashedRectangle></DashedRectangle>
        </UploaderContainer>
    </UploaderWrapper>
);

ReactDOM.render(<App />, document.getElementById('root'));
