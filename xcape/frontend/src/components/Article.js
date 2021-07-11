import React from 'react'
import { Card, Table, Button } from 'react-bootstrap'

export default function Article (props){

    let hintList = props.hintList;

    return(
            <Card className="text-white bg-dark mb-3">
                <Card.Header>Hint List</Card.Header>
                <Card.Body>
                    <Table striped bordered hober variant="dark">
                        <thead>
                            <tr>
                                <th className="col-md-1">#</th>
                                <th className="col-md-2">Key</th>
                                <th className="col-md-4">힌트 1</th>
                                <th className="col-md-4">힌트 2</th>
                                <th className="col-md-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {hintList.map((item, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td id={item.seq}>{item.key}</td>
                                <td
                                    id="message1" className={item.message1}>
                                    {item.message1}
                                </td>
                                <td
                                    id="message2" className={item.message2}>
                                    {item.message2}
                                </td>
                                <td><Button onClick={props.deleteHint} id={item.seq}>X</Button></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
    );
}