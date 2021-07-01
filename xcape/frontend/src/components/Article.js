import React, {useState} from 'react'
import { Card, Table } from 'react-bootstrap'

export default function Article(){

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
                            <tr>
                                <td>asdf</td>
                                <td>asdf</td>
                                <td>asdf</td>
                                <td>asdf</td>
                                <td>asdf</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
    );
}