import React from 'react'
import { Card, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'

export default function Header(){
    return(
      <Card className="mb-3">
        <Card.Header>XCAPE Hint Setting</Card.Header>
        <Card.Body>
        <Row>
          <Col className="col-md-10 col-sm-12">
            <Row>
              <Col className="col-md-4 col-sm-12">
                <InputGroup className="mb-3">
                <InputGroup.Text>가맹점</InputGroup.Text>
                  <FormControl as="select">
                    <option>가맹점</option>
                  </FormControl>
                </InputGroup>
              </Col>
              <Col className="col-md-4 col-sm-12">
                <InputGroup className="mb-3">
                <InputGroup.Text>테마</InputGroup.Text>
                  <FormControl as="select">
                    <option>테마</option>
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

