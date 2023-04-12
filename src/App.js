import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import Nav from "./Components/Nav/Nav";
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
import Actors from "./Actors/Actors";
import { ItemProduct } from "./Components/ItemProduct";
import { Components } from "./Components/Components";

function DataFilms(id, name) {
  return { id, name };
}

let films = [
  DataFilms(1, "Jokker1"),
  // DataFilms(2,"Jokker2"),
  // DataFilms(3,"Jokker3"),
  // DataFilms(4,"Jokker4"),
  // DataFilms(5,"Jokker5"),
  // DataFilms(6,"Jokker6"),
  // DataFilms(7,"Jokker7"),
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box overflow={"hidden"}>
        <Nav />
        <Routes>
          <Route path="/" element={<Components films={films} />} />
          <Route path="/components/:id" element={<ItemProduct films={films} />} />
          <Route path="/afisha" element={<Afisha />} />
          <Route path="/media" element={<Media />} />
          <Route path="/news" element={<News />} />
          <Route path="/Voyti" element={<Voyti />} />
          <Route path="/Reg" element={<Reg />} />
          <Route path="/Pasword" element={<Pasword />} />
          <Route path="/Parol" element={<Parol />} />
          <Route path="/Podbor" element={<Podbor />} />
          <Route path="/Films" element={<Films />} />
          <Route path="/Actors" element={<Actors />} />
          {/* <Route path="*" element={<></>} /> */}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
