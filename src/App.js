import React, { Component } from "react";
import { Box } from "@mui/material";
import Nav from "./Components/Nav/Nav";
import Components from "./Components/Components";
import { Route, Routes } from "react-router";
import Afisha from "./Afisha/Afisha";
import Media from "./Media/Media";
import News from "./News/News";


class App extends Component {
  render() {
    return (
      <Box overflow={"hidden"}>
        <Nav />
        <Routes>
          <Route path="/components" element={<Components/>} />
          <Route path="/afisha" element={<Afisha />} />
          <Route path="/media" element={<Media/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
      </Box>
    );
  }
}

export default App;
