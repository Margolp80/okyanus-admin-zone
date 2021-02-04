import React, { useEffect, useState } from "react";
import List from "./components/list/List";
import firebase from "./firebase";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  var [fullObjectList, setFullObjectList] = useState(null);
  var [objectPath, setObjectPath] = useState("okyanos/");

  useEffect(() => {
    const jsonRef = firebase.database().ref("okyanos");
    jsonRef.on("value", (snapshot) => {
      setFullObjectList(snapshot.val());
      console.log(snapshot.val());
      console.log("object path is", objectPath);
    });
  }, [objectPath]);

  // const handleTest = () => {
  //   const ref = firebase.database().ref("okyanos/children/");
  //   ref.push({ id: "blah", collapsed: true, children: { test: "blah" } });
  // };

  const handleSetPath = (val) => {
    if (val === "root") {
      setObjectPath("okyanos/children/");
    } else {
      setObjectPath(objectPath + val);
    }
  };

  const handlePush = (obj) => {
    const ref = firebase.database().ref(objectPath);
    ref.push(obj);
  };

  const handleDelete = (num) => {
    console.log("delete path:", `${objectPath}/${num}`);
    const ref = firebase.database().ref(`${objectPath}/${num}`);
    ref.remove();
  };

  return (
    <div>
      {/* <button onClick={() => handleTest()}>test</button> */}
      <List
        handlePush={handlePush}
        handleSetPath={handleSetPath}
        handleDelete={handleDelete}
        fullObjectList={fullObjectList}
      />
    </div>
  );
};

export default App;
