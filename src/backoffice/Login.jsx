
import React from "react";
import  Button from "react-bootstrap/Button";
import Input from './components/Input'

import Form from 'react-bootstrap/Form'

import './Login.scss'

export default function Login() {
    return (
        <div className="login-background">
            <div className="login-wrapper">
                <Form>
                    <Form.Label className="h1-login">Login</Form.Label>
                    <Form.Row>
                        <Form.Group controlId="loginUser">
                            <Form.Label>Usuário</Form.Label>
                            <Form.Control type="text" placeholder="Usuário" />
                        </Form.Group>
                    </Form.Row>
                
                    <Form.Row>
                        <Form.Group controlId="floginPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                    </Form.Row>
                
                <Form.Row className="button-row">
                    <Button type="submit" bsStyle="btn-submit" block>
                        ENTRAR
                    </Button>
                </Form.Row>
                
                </Form>
            </div>
            
        </div>
        
    );
}
