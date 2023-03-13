import React, { Component } from "react";
import { Box } from "@mui/material";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import { Route, Routes } from "react-router";
import Hame from "./Components/Home/Hame";
import Custom from "./Components/Custom/Custom";
import Context from "./Components/Context/Context";

class App extends Component {
  render() {
    return (
      <Box overflow={"hidden"}>
        <Nav />
        <Content />  
        <Hame/>   
        <Custom/>  
        <Context/>
      </Box>
    );
  }
}

export default App;
