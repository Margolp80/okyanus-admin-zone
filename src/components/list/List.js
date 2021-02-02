import React, { useState } from "react";
import { Badge, ListGroup } from "react-bootstrap";

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
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            onClick={() => setCurrentList(props.fullObjectList.children)}
          >
            okyanus
          </ListGroup.Item>
        );
      }
      if (typeof currentList === "string") {
        return (
          <a style={{ cursor: "pointer" }} target="_blank" href={currentList}>
            {currentList}
          </a>
        );
      }
      if (currentList && typeof currentList === "object") {
        const listArray = currentList.map((element, num) => {
          return (
            <ListGroup.Item
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                key={num}
                onClick={() =>
                  setCurrentList(
                    currentList[num].children
                      ? currentList[num].children
                      : currentList[num].link
                  )
                }
              >
                {element.id}
              </div>
              <div>
                <span style={{ marginLeft: "auto" }}>
                  <Badge variant="danger">
                    <i className="fas fa-trash-alt"></i>
                  </Badge>{" "}
                  <Badge variant="success">
                    <i className="fas fa-pen-alt"></i>
                  </Badge>
                </span>
              </div>
            </ListGroup.Item>
          );
        });

        return listArray;
      }
    }
  };

  return (
    <div style={{ width: "40%", margin: "auto", marginTop: "15px" }}>
      <ListGroup>{printId()}</ListGroup>
    </div>
  );
};

export default List;
