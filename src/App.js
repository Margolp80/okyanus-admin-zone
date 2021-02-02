import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbo from "./components/Jumbo";
import TutorialForm from "./components/TutorialForm";
import TutorialsList from "./components/TutorialsList";
import firebaseDb from "./firebase";
import { useState, useEffect } from "react";

function App() {
  //states
  var [tutorialObjects, setTutorialObjects] = useState({});
  //end of states

  useEffect(() => {
    firebaseDb.child("Tutorials/").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setTutorialObjects({ ...snapshot.val() });
      }
    });
  });

  const addOrEdit = (obj) => {
    firebaseDb.child("Tutorials/").push(obj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };
  return (
    <div>
      <Container>
        <Jumbo />

        <Row>
          <Col>
            <TutorialForm addOrEdit={addOrEdit} />
          </Col>
          <Col>
            <TutorialsList tutorialObjects={tutorialObjects} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
