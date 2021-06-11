import React from 'react'

import Table from 'react-bootstrap/Table'

//{(isRefeicao ? <th>Valor</th>: {})}
//<td>R$25,90</td>

export default ({title, isRefeicao, itens}) => {

    return (
    <>
        <Table striped borderless hover >
            <col width="5%"/>
            <col width="55%"/>
            <col width="25%"/>
            <col width="15%" />

            <thead>
                <tr>
                    <th>#</th>
                    <th>{title}</th>
                    {isRefeicao ? <th>Valor</th> : ''}
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Arroz de forno</td>
                    {isRefeicao ? <td>R$ 26,90</td> : ''}
                    <td>Botão</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Arroz de forno</td>
                    {isRefeicao ? <td>R$ 26,90</td> : ''}
                    <td>Botão</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Arroz de forno</td>
                    {isRefeicao ? <td>R$ 26,90</td> : ''}
                    <td>Botão</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Arroz de forno</td>
                    {isRefeicao ? <td>R$ 26,90</td> : ''}
                    <td>Botão</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Arroz de forno</td>
                    {isRefeicao ? <td>R$ 26,90</td> : ''}
                    <td>Botão</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Arroz de forno</td>
                    {isRefeicao ? <td>R$ 26,90</td> : ''}
                    <td>Botão</td>
                </tr>
            </tbody>
        </Table>
        
        
    </>
    )
    
}