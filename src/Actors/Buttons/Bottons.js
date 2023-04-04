import { Box } from "@mui/material";
import React from "react";
import Back from "./Img/Назад (2).png";
import One from "./Img/one.png";
import Two from "./Img/Two.png";
import Three from "./Img/Three.png";
import Dot from "./Img/Dot.png";
import FotiFive from './Img/FotiFive.png'
import Next from './Img/Next.png'

export default function Bottons() {
  return (
    <Box
      position={"relative"}
      bgcolor={"#1E2538"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
    >
      <Box display={"flex"} gap="10px" mt="50px" mb='40px'>
        <Box sx={{ cursor: "pointer" }} bgcolor={"#1B2133"} borderRadius="10px">
          <img src={Back} alt="" />
        </Box>
        <Box sx={{ cursor: "pointer" }}>
          <img src={One} alt="" />
        </Box>
        <Box sx={{ cursor: "pointer" }} bgcolor={"#1B2133"} borderRadius="10px">
          <img src={Two} alt="" />
        </Box>
        <Box sx={{ cursor: "pointer" }} bgcolor={"#1B2133"} borderRadius="10px">
          <img src={Three} alt="" />
        </Box>
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          sx={{ cursor: "pointer" }}
          bgcolor={"#1B2133"}
          padding="0px 30px"
          borderRadius="10px"
        >
          <img src={Dot} alt="" />
        </Box>
        <Box sx={{ cursor: "pointer" }} bgcolor={"#1B2133"} borderRadius="10px">
          <img src={FotiFive} alt="" />
        </Box>
        <Box sx={{ cursor: "pointer" }} bgcolor={"#1B2133"} borderRadius="10px">
          <img src={Next} alt="" />
        </Box>
      </Box>
    </Box>
  );
}
