import React from "react";
import { Table } from "react-bootstrap";

const TutorialsList = (props) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Link to tutorial</th>
            <th>Image url</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.tutorialObjects).map((id) => {
            return (
              <tr key={id}>
                <td>{props.tutorialObjects[id].subjectName}</td>
                <td>{props.tutorialObjects[id].linkUrl}</td>
                <td>{props.tutorialObjects[id].imgUrl}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TutorialsList;
