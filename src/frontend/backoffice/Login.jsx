
import React from "react";
import  Button from "react-bootstrap/Button";

import Form from 'react-bootstrap/Form'

import './styles/Login.scss'

export default function Login() {
    return (
        <div className="login-background">
            <div className="login-wrapper">
                <Form>
                    <Form.Label className="h1-login">Login</Form.Label>
                    <Form.Row>
                        <Form.Group controlId="loginUser">
                            <Form.Label>Usuário</Form.Label>
                            <Form.Control type="text" placeholder="Usuário" className="login-input" />
                        </Form.Group>
                    </Form.Row>
                
                    <Form.Row>
                        <Form.Group controlId="floginPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" className="login-input"/>
                        </Form.Group>
                    </Form.Row>
                
                    <Form.Row className="button-row">
                        <Button type="submit"  className="btn-submit btn-font" block>
                            ENTRAR
                        </Button>
                    </Form.Row>
                
                </Form>
            </div>
            
        </div>
        
    );
}
