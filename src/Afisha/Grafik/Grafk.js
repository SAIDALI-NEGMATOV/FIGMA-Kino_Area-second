import { Box, Typography } from "@mui/material";
import React, { Component } from "react";

class Grafk extends Component {
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
          pt={"30px"}
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
            График премьер фильмов
          </Typography>
        </Box>
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent="start"
          alignItems={"center"}
          gap="20px"
        >
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "20px",
              color: "rgba(79, 91, 124, 1)",
              mt:'10px'
            }}
          >
            Главная
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "20px",
              color: "#fff",
              mt:'10px'
            }}
          >
            Афиша
          </Typography>
        </Box>
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent="start"
          alignItems={"center"}
          gap="20px"
          mt='20px'
        >
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "168.7%",
              color: "#fff",
            }}
          >
            Также как дальнейшее развитие различных форм деятельности, в своём
            классическом представлении, допускает <br /> внедрение первоочередных
            требований. Современные технологии достигли такого уровня, что
            внедрение <br /> современных методик предполагает независимые способы
            реализации стандартных подходов. Сторонники <br /> тоталитаризма в науке
            могут быть объявлены нарушающими общечеловеческие нормы этики и
            морали.
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default Grafk;
