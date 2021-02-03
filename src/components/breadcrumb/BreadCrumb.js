import React from "react";
import { Breadcrumb } from "react-bootstrap";
const BreadCrumb = (props) => {
  if (props.fullObjectList) {
    return (
      <div>
        <Breadcrumb style={{ width: "80%", margin: "auto" }}>
          <Breadcrumb.Item href="http://localhost:3001/">
            Okyanus
          </Breadcrumb.Item>
          <Breadcrumb.Item
            onClick={() =>
              props.changeCurrentList(props.fullObjectList.children)
            }
            href=""
          >
            Main
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
  return <div></div>;
};

export default BreadCrumb;
