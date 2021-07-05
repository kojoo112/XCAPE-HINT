import React, {useEffect, useState} from 'react'
import { Card, Table } from 'react-bootstrap'

export default function Article (props){

    const [hintList, setHintList] = useState([]);

    const handleHintList = () => {
        setHintList(props.hintState);
    }

    useEffect(() => {
        handleHintList();
    })

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
                                <td>{item.key}</td>
                                <td>{item.message1}</td>
                                <td>{item.message2}</td>
                                <td>x버튼</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
    );
}