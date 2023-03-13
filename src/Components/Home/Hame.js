import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import strelka from "../images/strellka.png";
import torret from "../images/torret.jpg";
import play from "../images/Play.png";
import icons from '../images/icon.png'
import Like from '../images/like.png'

class Hame extends Component {
  render() {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        bgcolor={"rgba(30, 37, 56, 1)"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "65px",
              lineHeight: "80px",
              color: "#fff",
            }}
          >
            Новые трейлеры
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "22px",
              lineHeight: "27px",
              color: "#fff",
              mt: "12px",
              ml: "700px",
            }}
          >
            Все трейлеры
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"20px"}
            pt={"35px"}
          >
            <img src={strelka} alt="" />
          </Box>
        </Box>
        <Box mt={"30px"} position={"relative"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            top={"47%"}
            left={"47%"}
            zIndex={"2"}
          >
            <img src={play} alt="" />
          </Box>
          <img src={torret} alt="" />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems="center"
          gap='900px'
          mt={'20px'}
        >
          <Box display={'flex'} justifyContent='space-between' alignItems={'center'} gap='10px'>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "45px",
                lineHeight: "80px",
                color: "#fff",
              }}
            >
              Форсаж 9
            </Typography>
            <Box mt={'10px'}>
                <img src={icons} alt="" />
            </Box>
          </Box>
          <Box>
            <img src={Like} alt="" />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Hame;
