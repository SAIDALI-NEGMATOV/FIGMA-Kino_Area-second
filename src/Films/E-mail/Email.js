import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import Back from "../img/Back.jpg"
import logo from "../img/Логотип (2).png";

class Email extends Component {
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
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          flexDirection={"column"}
          width="80%"
          height={"55vh"}
          mt="100px"
          sx={{
            backgroundColor: "rgba(29, 58, 160, 0.9)",
            backgroundImage: `url(${Back})`,
            backgroundBlendMode: "color-dodge",
          }}
        >
          <Box>
            <img src={logo} alt="" />
          </Box>
          <Box>
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
              Подпишитесь на E-mail рассылку
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "25px",
                lineHeight: "30px",
                color: "#fff",
              }}
            >
              Если хотиет быть в курсе последних новостей и новинок кино -{" "}
              <br />
              заполните форму ниже и оформите бесплатную E-mail рассылку!
            </Typography>
          </Box>
          <Box mt="30px">
            <form action="">
              <input
                type="text"
                style={{
                  padding: "15px 60px",
                  borderRadius: "10px",
                  border: "0",
                }}
                value="Введите свой E-mail адрес"
              />{" "}
              <input
                type="submit"
                style={{
                  padding: "15px 30px",
                  border: "0px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(242, 246, 15, 1)",
                }}
                value="Подписаться"
              />
            </form>
          </Box>
          <Box display={'flex'} gap='10px' mt='10px'>
            <form action="">
              <input
                type="checkbox"
                name=""
                id=""
                style={{
                  backgroundColor: "rgba(242, 246, 15, 1)",
                  color: "rgba(21, 26, 38, 1)",
                  padding: "10px 10px",
                }}
              />
            </form>
            <Typography variant="p" color={'#fff'}>
              Соглашаюсь на условия 
            </Typography>
            <Typography variant="p" color={'rgba(242, 246, 15, 1)'}>
               политики конфиденциальности
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Email;
