import React, { useState } from "react";
import { Jumbotron, Button, ListGroup, Badge, Card } from "react-bootstrap";
import BreadCrumb from "../breadcrumb/BreadCrumb";
import FormDisplay from "../form/FormDisplay";

const List = (props) => {
  var [currentList, setCurrentList] = useState();
  var [listType, setListType] = useState();
  var [listKeys, setListKeys] = useState();

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
                  onClick={() => {
                    setCurrentList(props.fullObjectList.children);
                    props.handleSetPath("children/");
                  }}
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
      if (currentList != null && typeof currentList === "object") {
        console.log("yes");
        console.log("list type", listType);
        // the error is that when firebase values change it returnes a object and not an array..
        if (Array.isArray(currentList) && listType === undefined) {
          console.log("testttttt");
          var obj = {};
          for (let i = 0; i < currentList.length; i++) {
            obj[i] = currentList[i];
          }
          console.log(obj);
          currentList = obj;
        }
        if (!Array.isArray(currentList)) {
          var newList = [];
          var keys = [];
          for (const key in currentList) {
            newList.push(currentList[key]);
            keys.push(key);
          }
          console.log("the keys are: ", keys);

          setCurrentList(newList);
          currentList = newList;
          setListType("Object");

          setListKeys(keys);
          listKeys = keys;
          console.log(listKeys);
        }

        const listArray = currentList.map((element, num) => {
          return (
            <ListGroup.Item
              variant="warning"
              style={{ cursor: "pointer" }}
              key={listKeys[num]}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{ flexGrow: "10" }}
                  onClick={() => {
                    setCurrentList(
                      currentList[num].children
                        ? currentList[num].children
                        : currentList[num].link
                    );
                    props.handleSetPath(`${listKeys[num]}/children/`);
                  }}
                >
                  {element.id}
                </div>

                <div>
                  <span style={{ margin: "auto" }}>
                    {/* <Badge pill variant="success">
                      -----<i className="fas fa-pen-alt"></i>-----
                    </Badge>{" "} */}
                    <Badge
                      onClick={() => {
                        props.handleDelete(listKeys[num]);
                      }}
                      pill
                      variant="danger"
                    >
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
        handlePush={props.handlePush}
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
        handleSetPath={props.handleSetPath}
      />
      {displayForm()}
      {printId()}
    </div>
  );
};

export default List;
