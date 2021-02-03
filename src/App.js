import React, { useEffect, useState } from "react";
import List from "./components/list/List";
import firebase from "./firebase";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  var [fullObjectList, setFullObjectList] = useState(null);

  useEffect(() => {
    const jsonRef = firebase.database().ref("okyanus");
    jsonRef.on("value", (snapshot) => {
      setFullObjectList(snapshot.val());
    });
  }, []);

  return (
    <div>
      <List fullObjectList={fullObjectList} />
    </div>
  );
};

export default App;
