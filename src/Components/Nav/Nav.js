import { Box, Typography,Button } from "@mui/material";
import React, { Component } from "react";
import Kino from "../images/Логотип (2).png";
import Icon from "../images/icon.png";
import Lupa from '../images/Lupa.png'

class Nav extends Component {
  render() {
    return (
      <Box
        padding={"5px"}
        zIndex={"100"}
        bgcolor={"#1E2538"}
        display={"flex"}
        justifyContent="center"
        gap={'20px'}
        sx={{ opacity: "" }}
      >
        <Box ml={"5%"} mr={"5%"} width={"90%"}>
          <Box>
            <img src={Kino} alt="" />
          </Box>
          <Box>
            <img src={Icon} alt="" />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={'15px'} mr={'250px'}>
          <Typography
            variant="p"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "monospace",
              fontSize: "17px",
              lineHeight: "21px",
              fontWeight: "700",
            }}
          >
            Афиша
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "monospace",
              fontSize: "17px",
              lineHeight: "21px",
              fontWeight: "700",
            }}
          >
            Медиа
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "monospace",
              fontSize: "17px",
              lineHeight: "21px",
              fontWeight: "700",
            }}
          >
            Фильмы
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "monospace",
              fontSize: "17px",
              lineHeight: "21px",
              fontWeight: "700",
            }}
          >
            Актёры
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "monospace",
              fontSize: "17px",
              lineHeight: "21px",
              fontWeight: "700",
            }}
          >
            Новости
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "monospace",
              fontSize: "17px",
              lineHeight: "21px",
              fontWeight: "700",
            }}
          >
            Подборки
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "monospace",
              fontSize: "17px",
              lineHeight: "21px",
              fontWeight: "700",
            }}
          >
            Категории
          </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={"center"}>
        <Box height={'45px'} width={'65px'} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={'3px 20px'} borderRadius={'10px'} ml={'20px'} bgcolor={"#fff"}>
          <img src={Lupa} alt="" />
        </Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mr={'50px'}>
          <Button sx={{backgroundColor:'rgba(54, 87, 203, 1)',color:'#fff', padding:'10px 20px',borderRadius:'10px,'}}>Войти</Button>
        </Box>
      </Box>
    );
  }
}

export default Nav;
