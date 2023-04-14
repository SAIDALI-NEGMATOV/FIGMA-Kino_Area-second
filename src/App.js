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
import img1 from "./Components/images/Jokker.jpg";
import img2 from "./Components/images/Escape.jpg";
import img3 from "./Components/images/opoqi.jpg";
import img4 from "./Components/images/Xennam.jpg";
import img5 from "./Components/images/Ford.jpg";
import img6 from "./Components/images/3022.jpg";
import img7 from "./Components/images/Xarli.jpg";
import img8 from "./Components/images/Police.jpg";
import bgIMG from "./Components/images/BGA1.jpg";
import Static from "./Components/images/Statistic.png";
import Static2 from "./Components/images/IMDb.png";

function DataFilms(
  id,
  name,
  defImg,
  Name,
  Xeshtag,
  bgimg,
  Fon,
  Menyu,
  Text,
  Info,
  Static,
  Static2,
  Text2
) {
  return {
    id,
    name,
    defImg,
    Name,
    Xeshtag,
    bgimg,
    Fon,
    Menyu,
    Text,
    Info,
    Static,
    Static2,
    Text2,
  };
}

let films = [
  DataFilms(
    1,
    "Escape",
    img2,
    "Побег из Претории",
    "Триллер",
    bgIMG,
    img2,
    "Главная > Фильмы > Побег из Претории",
    "Побег из Претории",
    "Escape from Pretoria",
    Static,
    Static2,
    "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана."
  ),
  DataFilms(2, "Joker", img1, "Джокер", "Триллер, драма, криминал"),
  DataFilms(
    3,
    "Star",
    img3,
    "Звёздные войны: Скайуокер. Восход",
    "Фантастика, фэнтези, боевик, приключения"
  ),
  DataFilms(4, "Xenam", img4, "Джентльмены", "Боевик, комедия, криминал"),
  DataFilms(
    5,
    "Ford",
    img5,
    "Ford против Ferrari",
    "Биография, спорт, драма, боевик"
  ),
  DataFilms(6, "3022", img6, "3022", "Фантастика, триллер"),
  DataFilms(
    7,
    "Харли",
    img7,
    " Потрясающая история Харли Квинн",
    "Боевик, криминал, комедия"
  ),
  DataFilms(
    8,
    "парни",
    img8,
    " Плохие парни навсегда",
    "Боевик, комедия, криминал"
  ),
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box overflow={"hidden"}>
        <Nav />
        <Routes>
          <Route path="/" element={<Components films={films} />} />
          <Route
            path="/components/:filmId"
            element={<ItemProduct films={films} />}
          />
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
