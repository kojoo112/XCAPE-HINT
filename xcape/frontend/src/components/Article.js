import React, {useEffect, useState} from 'react'
import { Card, Table } from 'react-bootstrap'

export default function Article (props){

    const [hintList, setHintList] = useState([]);

    const handleHintList = () => {
        setHintList(props.hintState);
    }

    const modifyMessagePrompt = async (e, seq) => {
        const message = prompt('바꾸실 힌트를 입력해주세요', e.target.className);
        let objectMessage1 = {
            seq: seq,
            [e.target.id]: message
        }
        if(message != null) {
            await fetch("/modifyMessage", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(objectMessage1)
            })
        }
    }

    const deleteHint = (e) => {
        let isDelete = window.confirm('정말 삭제하시겠습니까?');
        if(isDelete){
            fetch("/deleteHint", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e.target.id)
            })
        }
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
                                <td id={item.seq}>{item.key}</td>
                                <td onClick={(e)=> {
                                    modifyMessagePrompt(e, item.seq);
                                }} id="message1"
                                    className={item.message1}>{item.message1}</td>
                                <td onClick={(e)=> {
                                    modifyMessagePrompt(e, item.seq);
                                }} id="message2"
                                    className={item.message2}>{item.message2}</td>
                                <td><button onClick={deleteHint} id={item.seq}>X</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
    );
}