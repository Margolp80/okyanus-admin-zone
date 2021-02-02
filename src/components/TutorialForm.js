import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
  Button,
} from "react-bootstrap";

const TutorialForm = (props) => {
  const initialFieldsValues = {
    subjectName: "",
    linkUrl: "",
    imgUrl: "",
    description: "",
  };

  //State
  var [values, setValues] = useState(initialFieldsValues);
  //end of state region

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
    console.log("form submitted");
  };
  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Container>
          <Row>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <div>
                    <i className="fas fa-book-open"></i>
                  </div>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                name="subjectName"
                id="inlineFormInputGroupUsername2"
                placeholder="Name of the tutorial"
                value={values.subjectName}
                onChange={handleInputChange}
              />
            </InputGroup>
          </Row>

          <Row
            style={{ marginTop: "20px" }}
            className="justify-content-between"
          >
            <div>
              <InputGroup className="mb-2 mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <div>
                      <i className="fas fa-link"></i>{" "}
                    </div>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  name="linkUrl"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Link to tutorials url"
                  value={values.linkUrl}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </div>

            <div>
              <InputGroup className="mb-2 mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <div>
                      <i className="fas fa-link"></i>{" "}
                    </div>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  name="imgUrl"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Image url"
                  value={values.imgUrl}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </div>
          </Row>

          <Row style={{ marginTop: "20px" }}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Description</span>
              </div>
              <textarea
                className="form-control"
                aria-label="With textarea"
                value={values.description}
                name="description"
                onChange={handleInputChange}
              ></textarea>
            </div>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default TutorialForm;
