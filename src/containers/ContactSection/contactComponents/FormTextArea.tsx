import React, { useState } from "react";
import styled from "styled-components";

interface StyledTextAreaProps {
    fieldValue: string,
}

const StyledTextArea = styled.div<StyledTextAreaProps>`
    padding: 1rem;
    margin-top: 1rem;
    border: 1px solid ${props => (props.fieldValue === "") ? "#000" : "#3aa830"};
    border-radius: 5px;
    position: relative;

    :focus-within {
        border: 2px solid #3aa830;
    }

    textarea {
        display: block;
        width: 100%;
        border: none;
        font-size: 16px;
        background: none;
        resize: none;
        outline: transparent;
        outline-offset: 15px;

        :focus {
            ~ label {
                margin: 0;
                padding: 0 6px;
                font-size: 12px;
                color: #3aa830;
                background-color: #fff;
                transform: translate(-10px, -9px);
            }
        }
    }

    label {
        ${props => props.fieldValue === "" ? "margin: 1rem 0 1rem 0;" :
        `
        margin: 0;
        padding: 0 6px;
        background-color: #fff;
        `
        }

        border-radius: 20px;
        position: absolute;
        top: 0px;
        font-size: ${props => (props.fieldValue === "") ? "unset" : "12px"};
        color: ${props => (props.fieldValue === "") ? "initial" : "#3aa830"};
        transition: color .3s, margin .3s, padding .3s, font-size .3s, transform .3s, background-color .3s, z-index .3s;
        transform: ${props => (props.fieldValue === "") ? "unset" : "translate(-10px, -9px)"};
        cursor: text;
    }
`

const FormTextArea = () => {
    const [fieldValue, setFieldValue] = useState("");

    return (
        <StyledTextArea fieldValue={fieldValue}>
            <textarea id="textarea__styled" rows={10} onChange={e => setFieldValue(e.target.value)} />
            <label htmlFor="textarea__styled">Message</label>
        </StyledTextArea>
    );
};

export default FormTextArea;