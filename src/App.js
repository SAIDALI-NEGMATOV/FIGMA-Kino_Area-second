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
import img1 from './Components/images/Jokker.jpg'
import img2 from './Components/images/Escape.jpg'
import img3 from './Components/images/opoqi.jpg'
import img4 from './Components/images/Xennam.jpg'
import img5 from './Components/images/Ford.jpg'
import img6 from './Components/images/3022.jpg'
import img7 from './Components/images/Xarli.jpg'
import img8 from './Components/images/Police.jpg'

function DataFilms(id, name, defImg,Name,Xeshtag) {
  return { id, name , defImg,Name,Xeshtag};
}

let films = [
  DataFilms(1, "Escape", img2,'Побег из Претории','Триллер'),
  DataFilms(2, "Joker", img1,'Джокер','Триллер, драма, криминал'),
  DataFilms(3, "Star", img3,'Звёздные войны: Скайуокер. Восход','Фантастика, фэнтези, боевик, приключения'),
  DataFilms(4, "Xenam", img4,'Джентльмены','Боевик, комедия, криминал',),
  DataFilms(5, "Ford", img5,'Ford против Ferrari','Биография, спорт, драма, боевик',),
  DataFilms(6, "3022", img6,'3022','Фантастика, триллер',),
  DataFilms(7, "Харли", img7,' Потрясающая история Харли Квинн','Боевик, криминал, комедия',),
  DataFilms(8, "парни", img8,' Плохие парни навсегда','Боевик, комедия, криминал',),
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
          <Route path="/components/:filmId" element={<ItemProduct films={films} />} />
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
