import { Box, Typography } from "@mui/material";
import React, { Component } from "react";

class Podborki extends Component {
  render() {
    return (
      <Box
        position={"relative"}
        bgcolor={"#1E2538"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent="flex-start"
          alignItems={"center"}
          pt={"20px"}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "40px",
              lineHeight: "80px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Подборки фильмов
          </Typography>
        </Box>
        <Box width={"90%"} mt="10px" gap="20px">
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "22px",
              color: "rgba(255, 255, 255, 0.35)",
              mr: "0px",
              mt: "10px",
            }}
          >
            Главная
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#fff",

              mt: "10px",
              ml: "10px",
            }}
          >
            Подборки
          </Typography>
        </Box>
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent="flex-start"
          alignItems={"center"}
          pt={"20px"}
        >
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#fff",
            }}
          >
            Также как дальнейшее развитие различных форм деятельности, в своём
            классическом представлении, допускает <br /> внедрение
            первоочередных требований. Современные технологии достигли такого
            уровня, что внедрение <br /> современных методик предполагает
            независимые способы реализации стандартных подходов. Сторонники{" "}
            <br /> тоталитаризма в науке могут быть объявлены нарушающими
            общечеловеческие нормы этики и морали.
          </Typography>
        </Box>
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent="flex-start"
          alignItems={"center"}
          pt={"20px"}
        ></Box>
      </Box>
    );
  }
}

export default Podborki;
