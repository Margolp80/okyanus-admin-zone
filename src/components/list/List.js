import React, { useState } from "react";
import { Jumbotron, Button, ListGroup, Badge, Card } from "react-bootstrap";
import BreadCrumb from "../breadcrumb/BreadCrumb";
import FormDisplay from "../form/FormDisplay";

const List = (props) => {
  var [currentList, setCurrentList] = useState();

  const printId = () => {
    //check if initialzation with firebase has accured
    if (props.fullObjectList) {
      if (!currentList) {
        setCurrentList(props.fullObjectList);
      }
      if (props.fullObjectList === currentList) {
        return (
          <div style={{ margin: "auto", marginTop: "100px", width: "80%" }}>
            <Jumbotron>
              <h1 style={{ textAlign: "center" }}>OKYANUS</h1>

              <p style={{ textAlign: "center" }}>
                <Button
                  onClick={() => setCurrentList(props.fullObjectList.children)}
                  variant="primary"
                >
                  Admin Zone
                </Button>
              </p>
            </Jumbotron>
          </div>
        );
      }
      if (typeof currentList === "string") {
        return (
          <div
            style={{
              textAlign: "center",
              width: "20%",
              margin: "auto",
            }}
          >
            <Card style={{ width: "18rem", marginTop: "80px" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              />
              <Card.Body>
                <Card.Title>{currentList}</Card.Title>

                <a
                  style={{ color: "white" }}
                  rel="noreferrer"
                  target="_blank"
                  href={currentList}
                >
                  <Button variant="primary">Go to website</Button>
                </a>
              </Card.Body>
            </Card>
          </div>
        );
      }
      if (currentList && typeof currentList === "object") {
        const listArray = currentList.map((element, num) => {
          return (
            <ListGroup.Item
              variant="warning"
              style={{ cursor: "pointer" }}
              key={num}
              onClick={() =>
                setCurrentList(
                  currentList[num].children
                    ? currentList[num].children
                    : currentList[num].link
                )
              }
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{element.id}</div>
                <div>
                  <span style={{ margin: "auto" }}>
                    <Badge pill variant="success">
                      -----<i className="fas fa-pen-alt"></i>-----
                    </Badge>{" "}
                    <Badge pill variant="danger">
                      -----<i className="fas fa-trash-alt"></i>-----
                    </Badge>{" "}
                  </span>
                </div>
              </div>
            </ListGroup.Item>
          );
        });

        return (
          <ListGroup style={{ width: "60%", margin: "auto" }}>
            {listArray}
          </ListGroup>
        );
      }
    }
  };

  const displayForm = () => {
    return (
      <FormDisplay
        fullObjectList={props.fullObjectList}
        currentList={currentList}
      />
    );
  };

  const changeCurrentList = (list) => {
    setCurrentList(list);
  };

  return (
    <div>
      <BreadCrumb
        fullObjectList={props.fullObjectList}
        changeCurrentList={changeCurrentList}
      />
      {displayForm()}
      {printId()}
    </div>
  );
};

export default List;
