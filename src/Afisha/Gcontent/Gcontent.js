import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import Gudbay from "../Asist/Gudbay.jpg";
import Dobriy from "../Asist/Dobriy.jpg";
import nikto from "../Asist/nikto.jpg";
import miss from "../Asist/miss.jpg";
import ments from "../Asist/ments.jpg";
import parazit from "../Asist/parazit.jpg";
import bes from "../Asist/bes.jpg";
import belka from "../Asist/strelka.jpg";
import Zona from "../Asist/xona.png";
import Chaqmoq from "../Asist/chaqmoq.png";
import Abe from "../Asist/Abe.png";
import Kursant from '../Asist/kursant.jpg'
import Vechni from '../Asist/vechni.png'
import Dalgi from '../Asist/dalgi.jpg'
import Lev from '../Asist/lev.jpg'
import Nami from '../Asist/nami.jpg'
import Qasam from '../Asist/qasam.png'
import Metr from '../Asist/metr.png'
import Pelle from '../Asist/pelle.png'

class Gcontent extends Component {
  render() {
    return (
      <Box
        bgcolor={"#1E2538"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent="start"
          alignItems={"center"}
          gap="40px"
        >
          {" "}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "35px",
              lineHeight: "80px",
              color: "#fff",
            }}
          >
            22 апреля 2020
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width="90%"
          justifyContent="start"
          alignItems={"flex-start"}
          gap="15px"
          mt="50px"
        >
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Gudbay} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Гудбай, Америка
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Мелодрама, комедия
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Dobriy} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Добрый человек из Сезуана
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Драма
            </Typography>
          </Box>
        </Box>
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent="start"
          alignItems={"center"}
          mt="10px"
          mb="-20px"
        >
          {" "}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "35px",
              lineHeight: "80px",
              color: "#fff",
            }}
          >
            23 апреля 2020
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width="90%"
          justifyContent="start"
          alignItems={"flex-start"}
          gap="15px"
          mt="50px"
        >
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={nikto} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Господин Никто
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Фантастика, мелодрама, фэнтези, драма, ...
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={miss} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Мисс Плохое поведение
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Комедия, драма, история, ...
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={ments} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Прекрасные лжецы
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Драма, комедия
            </Typography>
          </Box>
        </Box>
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent="start"
          alignItems={"center"}
          mt="10px"
          mb="-20px"
        >
          {" "}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "35px",
              lineHeight: "80px",
              color: "#fff",
            }}
          >
            30 апреля 2020
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width="90%"
          justifyContent="start"
          alignItems={"flex-start"}
          gap="15px"
          mt="50px"
        >
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={parazit} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Господин Никто
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Фантастика, мелодрама, фэнтези, драма, ...
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={bes} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Мисс Плохое поведение
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Комедия, драма, история, ...
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={belka} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Прекрасные лжецы
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Драма, комедия
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Zona} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Прекрасные лжецы
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Драма, комедия
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          width="90%"
          justifyContent="start"
          alignItems={"flex-start"}
          gap="15px"
          mt="50px"
        >
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Chaqmoq} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Гудбай, Америка
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Мелодрама, комедия
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Abe} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Добрый человек из Сезуана
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Драма
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          width="90%"
          justifyContent="start"
          alignItems={"flex-start"}
          gap="15px"
          mt="50px"
        >
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Kursant} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Гудбай, Америка
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Мелодрама, комедия
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          width="90%"
          justifyContent="start"
          alignItems={"flex-start"}
          gap="15px"
          mt="50px"
        >
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Vechni} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Господин Никто
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Фантастика, мелодрама, фэнтези, драма, ...
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Dalgi} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Мисс Плохое поведение
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Комедия, драма, история, ...
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Lev} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Прекрасные лжецы
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Драма, комедия
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Nami} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Прекрасные лжецы
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Драма, комедия
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          width="90%"
          justifyContent="start"
          alignItems={"flex-start"}
          gap="15px"
          mt="50px"
          mb='100px'
        >
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Qasam} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Господин Никто
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Фантастика, мелодрама, фэнтези, драма, ...
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Metr} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Мисс Плохое поведение
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Комедия, драма, история, ...
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={Pelle} alt="" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
              Прекрасные лжецы
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              Драма, комедия
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Gcontent;
