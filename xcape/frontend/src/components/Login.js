import React from "react";
import {Card, Col, FormControl, InputGroup, Row, Button} from "react-bootstrap";
import '../Login.css';

export default function Login(){
    return(
        <div>
            <Card className="text-white bg-dark col-md-10">
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Row>
                                <InputGroup className="mb-3" style={{padding: "0px"}}>
                                    <InputGroup.Text>ID</InputGroup.Text>
                                    <FormControl type="text" placeholder="ID"/>
                                </InputGroup>
                            </Row>
                            <Row>
                                <InputGroup className="mb-3" style={{padding: "0px"}}>
                                    <InputGroup.Text>Password</InputGroup.Text>
                                    <FormControl type="Password" placeholder="Password"/>
                                </InputGroup>
                            </Row>
                        </Col>
                        <Col>
                            <Button>로그인</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}