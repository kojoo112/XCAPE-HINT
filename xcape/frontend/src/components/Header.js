import React from 'react'
import { Card, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import '../Header.css'

export default function Header(props){

    const hintListSize = props.hintListSize;
    const merchantList = props.merchantList;
    const themeList = props.themeList;

    return(
        <Card className="mb-3 bg-dark text-white">
            <Card.Header>XCAPE Hint Setting</Card.Header>
            <Card.Body>
                <Row>
                    <Col className="col-md-10 col-sm-12">
                        <Row>
                            <Col className="col-md-4 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>가맹점</InputGroup.Text>
                                    <FormControl as="select" onChange={props.handleMerchantCode}>
                                        {merchantList.map((merchant, index) =>(
                                            <option key={index} value={merchant.merchant.merchantCode}>
                                                {merchant.merchant.merchantName}
                                            </option>
                                        ))}
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col className="col-md-4 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>테마</InputGroup.Text>
                                    <FormControl as="select" onChange={props.handleThemeCode}>
                                        {themeList.map((theme, index) => (
                                            <option key={index} value={theme.themeCode}>{theme.themeName}</option>
                                        ))}
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col className="col-md-4 col-sm-12">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>번호</InputGroup.Text>
                                    <FormControl as="input" type="text" disabled value={hintListSize}>
                                    </FormControl>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="row-cols-2">
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>힌트 1</InputGroup.Text>
                                    <FormControl as="input" type="text" id="message1" onChange={props.handleMessage1}>
                                    </FormControl>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>힌트 2</InputGroup.Text>
                                    <FormControl as="input" type="text" id="message2" onChange={props.handleMessage2}>
                                    </FormControl>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Button className="col-md-6 col-sm-12" onClick={props.registerHint}>저장</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

