import React, { Component } from "react";
import { Box } from "@mui/material";
import Nav from "./Components/Nav/Nav";
// import Content from "./Components/Content/Content";
// import { Route, Routes } from "react-router";
// import Hame from "./Components/Home/Hame";
// import Custom from "./Components/Custom/Custom";
// import Context from "./Components/Context/Context";
// import Personaj from "./Components/Personaj/Personaj";
// import Newc from "./Components/News/Newc";
// import Loding from "./Components/Loding/Loding";
// import Client from "./Components/Client/Client";
// import Email from "./Components/E-mail/Email";
// import End from "./Components/End/End";
import Grafk from "./Afisha/Grafik/Grafk";
import Gcontent from "./Afisha/Gcontent/Gcontent";
import AEmail from "./Afisha/AEmail/AEmail";
import AEnd from "./Afisha/AEnd/AEnd";

class App extends Component {
  render() {
    return (
      <Box overflow={"hidden"}>
        <Nav />
        <Box>
          <Grafk/>
          <Gcontent/>
          <AEmail/>
          <AEnd/>
        </Box>
        {/* <Box>
        <Content />  
        <Hame/>   
        <Custom/>  
        <Context/>
        <Personaj/>
        <Newc/>
        <Loding/>
        <Client/>
        <Email/>
        <End/>
        </Box> */}
      </Box>
    );
  }
}

export default App;
