import React from "react";
import styled from "styled-components";

const ContactForm = () => {
    return (
        <Form>
            <Input>
                <label>Nome:</label>
                <input type="text" placeholder="Seu nome" />
            </Input>
            <Input>
                <label>Seu e-mail:</label>
                <input type="email" placeholder="Seu e-mail" />
            </Input>
            <Input>
            <label>Sua mensagem:</label>
                <textarea rows="5" placeholder="Sua mensagem"></textarea>
            </Input>
            <button type="submit">Enviar mensagem</button>
        </Form>
    )
}

const Input = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100vh;
    label {
        color: #fafafa;
        padding-top: 1rem;
        margin-bottom: 5px;
    }
    input, textarea {        
        padding: 12px;
        border-radius: 6px 20px;
        outline: none;
        width: 100%;
        height: 100%;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }
    input:focus, textarea:focus  {
        background-color: #353535;
        color: #fafafa;        
    }
`;

const Form = styled.form`
    button {
        margin-top: 1rem;
    }
`;

export default ContactForm;