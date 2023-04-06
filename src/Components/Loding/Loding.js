import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import strelka from "../images/Слайдер.png";
import Escape2 from "../images/escape2.jpg";
import adios from "../images/adios2.jpg";
import chorni from "../images/chorni.jpg";
import pri from "../images/pri.jpg";

class Loding extends Component {
  render() {
    return (
      <Box
        bgcolor={"#151A26"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt="50px"
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: {
                NoteL: "65px",
                Planshet: "40px",
              },
              lineHeight: "80px",
              color: "#fff",
            }}
          >
            Ожидаемые новинки
          </Typography>
          <Box
            mt="12px"
            sx={{
              ml: {
                NoteL: "700px",
                Planshet: "250px",
              },
            }}
          >
            <img
              src={strelka}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          gap="15px"
          mt="50px"
        >
          <Box>
            <Box
              borderRadius="15px"
              overflow={"hidden"}
              sx={{
                width: {
                  NoteL: "320px",
                  Planshet: "180px",
                },
                height: {
                  NoteL: "450px",
                  Planshet: "300px",
                },
              }}
            >
              <img
                src={Escape2}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
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
              Побег из Претории
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
              14 мая 2020 в России
            </Typography>
          </Box>
          <Box>
            <Box
              borderRadius="15px"
              overflow={"hidden"}
              sx={{
                width: {
                  NoteL: "320px",
                  Planshet: "180px",
                },
                height: {
                  NoteL: "450px",
                  Planshet: "300px",
                },
              }}
            >
              <img
                src={adios}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
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
              Прощай
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
              14 мая 2020 в России
            </Typography>
          </Box>
          <Box>
            <Box
              borderRadius="15px"
              overflow={"hidden"}
              sx={{
                width: {
                  NoteL: "320px",
                  Planshet: "180px",
                },
                height: {
                  NoteL: "450px",
                  Planshet: "300px",
                },
              }}
            >
              <img
                src={chorni}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
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
              Дружить по-русски!
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
              21 мая 2020 в России
            </Typography>
          </Box>
          <Box>
            <Box
              borderRadius="15px"
              overflow={"hidden"}
              sx={{
                width: {
                  NoteL: "320px",
                  Planshet: "180px",
                },
                height: {
                  NoteL: "450px",
                  Planshet: "300px",
                },
              }}
            >
              <img src={pri} alt="" style={{ width: "100%", height: "100%" }} />
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
              Приди ко мне
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
              21 мая 2020 в России
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Loding;
