import React, {Component, useState} from 'react'
import { Card, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import '../Header.css'
import Hint from "./Hint";
import axios from "axios";

export default function Header(){

    let [hint, setHint] = useState([]);

    let options = [
        {
            merchant: "강남-엑스케이프",
            theme: ["기억의 틈", "수취인 초대", "제3표류도"]
        },
        {
            merchant: "건대-엑스케이프"
        },
        {
            merchant: "건대-엑스크라임"
        },
        {
            merchant: "수원-엑스케이프"
        }
    ]

    return(
        <Card className="mb-3 bg-dark text-white">
            <Card.Header>XCAPE Hint Setting</Card.Header>
            <Hint />
            <Card.Body>
                <Row>
                    <Col className="col-md-10 col-sm-12">
                        <Row>
                            <Col className="col-md-4 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>가맹점</InputGroup.Text>
                                    <FormControl as="select">
                                        {options.map((option,index) =>(
                                            <option key={index} value={option.merchant}>{option.merchant}</option>
                                        ))}
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col className="col-md-4 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>테마</InputGroup.Text>
                                    <FormControl as="select">
                                        {options.map((option, index) => (
                                            <option key={index} value={option.theme}>{option.theme}</option>
                                        ))}
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col className="col-md-2 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>번호</InputGroup.Text>
                                    <FormControl as="input" type="text" disabled placeholder="인덱스 다음번호">
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col className="col-md-2 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>키</InputGroup.Text>
                                    <FormControl as="input" type="text" disabled placeholder="랜덤 키값">
                                    </FormControl>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="row-cols-2">
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>힌트 1</InputGroup.Text>
                                    <FormControl as="input">
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>힌트 2</InputGroup.Text>
                                    <FormControl as="input">
                                    </FormControl>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Button className="col-md-6 col-sm-12" as="input" type="reset" value="저장" />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

