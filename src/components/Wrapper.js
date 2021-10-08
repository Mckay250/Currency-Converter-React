import React from "react";
import Header from "./Header";
import TextInput from "./TextInput";
import Drop from "./Drop";
import Info from "./Info";
import Button from "./Button";

class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
          <TextInput></TextInput>
          <Drop></Drop>
          <Info></Info>
          <Button></Button>
      </div>
    );
  }
}

export default Wrapper;
