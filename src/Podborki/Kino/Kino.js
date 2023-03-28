import { Box, Button } from "@mui/material";
import React, { Component } from "react";

class Kino extends Component {
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
          <Button>Kinoarea</Button>
          <Button>Сериалы</Button>
          <Button>Направления</Button>
          <Button>Критика</Button>
          <Button>Премии</Button>
          <Button>Годы</Button>
          <Button>Жанры</Button>
        </Box>
      </Box>
    );
  }
}

export default Kino;
