import React from 'react'
import { Card, Table } from 'react-bootstrap'

export default function Article(){
    return(
        // <section>
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
                                <th>asd</th>
                                <th>asd</th>
                                <th>asd</th>
                                <th>asd</th>
                                <th>asd</th>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
 //       </section>
    );
}