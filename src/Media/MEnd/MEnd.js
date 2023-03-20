import { Box,Typography } from '@mui/material';
import React, { Component } from 'react';
import Icons from "../MImage/Icon.png";

class MEnd extends Component {
    render() {
        return (
            <Box
            bgcolor={"#151A26"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            flexDirection={"column"}
          >
            <Box mt={"50px"}>
              <img src={Icons} alt="" />
            </Box>
            <Box display={"flex"} gap="15px" mt='20px'>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: "15px",
                  lineHeight: "30px",
                  color: "#fff",
                }}
              >
                Афиша
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: "15px",
                  lineHeight: "30px",
                  color: "#fff",
                }}
              >
                Новости
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: "15px",
                  lineHeight: "30px",
                  color: "#fff",
                }}
              >
                Персоны
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: "15px",
                  lineHeight: "30px",
                  color: "#fff",
                }}
              >
                Рейтинги
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: "15px",
                  lineHeight: "30px",
                  color: "#fff",
                }}
              >
                Рецензии
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: "15px",
                  lineHeight: "30px",
                  color: "#fff",
                }}
              >
                Каталог
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: "15px",
                  lineHeight: "30px",
                  color: "#fff",
                }}
              >
                фильмов
              </Typography>
            </Box>
            <Box mt={'20px'}>
            <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: "13px",
                  lineHeight: "30px",
                  color: "rgba(227, 230, 240, 0.72)",
                }}
              >
               2020 © Kinoarea.  Все права защищены
              </Typography>
            </Box>
            <Box mt={'20px'}>
            <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: "13px",
                  lineHeight: "30px",
                  color: "rgba(227, 230, 240, 0.72)",
                }}
              >
              Политика конфиденциальности
              </Typography>
            </Box>
          </Box>
        );
    }
}

export default MEnd;
