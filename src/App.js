import React, { Component } from "react";
import { Box,ThemeProvider } from "@mui/material";
import Nav from "./Components/Nav/Nav";
import Components from "./Components/Components";
import { Route, Routes } from "react-router";
import Afisha from "./Afisha/Afisha";
import Media from "./Media/Media";
import News from "./News/News";
import Voyti from "./Voyti/Voyti";
import Reg from "./Reg/Reg";
import Pasword from "./Pasword/Pasword";
import Parol from "./Parol/Parol";
import Podbor from "./Podborki/Podbor";
import theme from "./Components/Style/Style";
import Films from "./Films/Films";



class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Box overflow={"hidden"}>
        <Nav />
        <Routes>
          <Route path="/" element={<Components/>} />
          <Route path="/afisha" element={<Afisha />} />
          <Route path="/media" element={<Media/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path='/Voyti' element={<Voyti/>}/>
          <Route path='/Reg' element={<Reg/>}/>
          <Route path="/Pasword" element={<Pasword/>}/>
          <Route path='/Parol' element={<Parol/>}/>
          <Route path='/Podbor' element={<Podbor/>}/>
          <Route path='/Films' element={<Films/>}/>
        </Routes>
      </Box>
      </ThemeProvider>
    );
  }
}

export default App;
