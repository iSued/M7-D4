import React, { useState } from "react";
import { Card, Row, Col, Image, Modal } from "react-bootstrap";
import { Button } from "@material-ui/core";

function Details(props) {
  const [show, setShow] = useState(false);
  const htmlDescription = () => {
    return { __html: props.job.description };
  };
  const htmlHowToApply = () => {
    return { __html: props.job.how_to_apply };
  };
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setShow(true)}>
        Show Details
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.job.company}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center align-items-center">
              <Image
                src={`${props.job.company_logo}`}
                style={{ width: "30%" }}
              />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "100%" }}>
                <Card.Header as="h5">Company Url</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <a
                      href={`${props.job.company_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {props.job.company_url}
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "100%" }}>
                <Card.Header as="h5">Created at</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>{props.job.created_at}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "100%" }}>
                <Card.Header as="h5">Title</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>{props.job.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "100%" }}>
                <Card.Header as="h5">Location</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>{props.job.location}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "100%" }}>
                <Card.Header as="h5">Type</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>{props.job.type}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "100%" }}>
                <Card.Header as="h5">Original Job Url</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <a
                      href={`${props.job.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {props.job.url}
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "100%" }}>
                <Card.Header as="h5">Description</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <div dangerouslySetInnerHTML={htmlDescription()} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center align-items-center">
              <Card style={{ width: "100%" }}>
                <Card.Header as="h5">How to apply</Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <div dangerouslySetInnerHTML={htmlHowToApply()} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Details;
