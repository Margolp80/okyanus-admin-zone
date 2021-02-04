import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
const FormDisplay = (props) => {
  var [formState, setFormState] = useState("Tree");

  var [formObject, setFormObject] = useState({
    id: "",
    collapsed: "true",
    children: [{ id: "dummy", collapsed: true, children: [{ id: "test" }] }],
  });

  const handleSelectChange = (value) => {
    if (value === "Tree") {
      setFormObject({
        id: "",
        collapsed: "true",
        children: [],
      });
    } else {
      setFormObject({ id: "", link: "", info: "" });
    }
  };

  const checkFormState = () => {
    if (formState === "Link") {
      return (
        <div>
          <Form.Group controlId="formBasicEmail">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i className="fas fa-link"></i>
              </InputGroup.Text>
              <Form.Control
                type="url"
                placeholder="Link URL (example: https://haveibeenpwned.com)"
                onChange={(e) =>
                  setFormObject({ ...formObject, link: e.target.value })
                }
              />
            </InputGroup.Prepend>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <InputGroup.Prepend>
              <InputGroup.Text>Description</InputGroup.Text>
              <Form.Control
                value={formObject.info}
                type="texterea"
                placeholder="Enter Name"
                onChange={(e) =>
                  setFormObject({ ...formObject, info: e.target.value })
                }
              />
            </InputGroup.Prepend>
          </Form.Group>
        </div>
      );
    }
  };

  const handleValueChanged = (value) => {
    setFormObject({ ...formObject, id: value });
  };

  const handleFormDisplay = () => {
    if (
      props.fullObjectList !== props.currentList &&
      props.fullObjectList &&
      typeof props.currentList != "string"
    ) {
      return (
        <div>
          <Form style={{ width: "60%", margin: "auto" }}>
            <Row>
              <Col xs={8}>
                <Form.Group controlId="formBasicEmail">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Name</InputGroup.Text>
                    <Form.Control
                      value={formObject.id}
                      type="text"
                      placeholder="Enter Name"
                      onChange={(e) => handleValueChanged(e.target.value)}
                    />
                  </InputGroup.Prepend>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formGridState">
                  <Form.Control
                    onChange={(e) => {
                      setFormState(e.target.value);
                      handleSelectChange(e.target.value);
                    }}
                    as="select"
                    value={formState}
                  >
                    <option value="Tree">Tree</option>
                    <option value="Link">Link</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            {checkFormState()}
          </Form>
          <div style={{ width: "60%", margin: "auto" }}>
            <Button
              onClick={() => {
                console.log("The from to be pushed is: ", formObject);
                props.handlePush(formObject);
                setFormState("Tree");
                setFormObject({
                  id: "",
                  collapsed: "true",
                  children: [
                    {
                      id: "dummy",
                      collapsed: true,
                      children: [{ id: "test" }],
                    },
                  ],
                });
              }}
              block
              variant="primary"
            >
              <i className="fas fa-plus"></i>
            </Button>{" "}
          </div>
        </div>
      );
    }
  };

  return <div>{handleFormDisplay()}</div>;
};

export default FormDisplay;
