import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import jokker2 from "../images/jokker2.jpg";
import istoriya from '../images/istoriya.jpg'
import gallivud from '../images/Gallived.jpg'
import sol from '../images/sol.jpg'

class Context extends Component {
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
          justifyContent="center"
          alignItems={"center"}
          gap="40px"
          pt={"30px"}
          mt='30px'
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
            Популярные фильмы
          </Typography>
          <Box width={"100px"} borderTop={"1px solid #fff"} mt="10px"></Box>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",
              color: "#fff",
              mt: "10px",
            }}
          >
            Всё время
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",

              mt: "10px",
            }}
          >
            2020
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",

              mt: "10px",
            }}
          >
            2019
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",
              mt: "10px",
            }}
          >
            2018
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",

              mt: "10px",
            }}
          >
            2017
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",
              mt: "10px",
            }}
          >
            {" "}
            2015
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",

              mt: "10px",
            }}
          >
            2016
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent="center" alignItems={"center"} gap='15px' mt='50px'>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={jokker2} alt="" />
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
                Джокер
            </Typography>
            <Typography variant="p"
               sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}>
            Триллер, драма, криминал
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={istoriya} alt="" />
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
                История игрушек 4
            </Typography>
            <Typography variant="p"
               sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}>
            Мультфильм, фэнтези, комедия, приключения ...
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={gallivud} alt="" />
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
                Однажды в… Голливуде
            </Typography>
            <Typography variant="p"
               sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}>
            Драма, комедия
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"}>
              <img src={sol} alt="" />
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
                Солнцестояние
            </Typography>
            <Typography variant="p"
               sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}>
            Ужасы, триллер, драма
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Context;
