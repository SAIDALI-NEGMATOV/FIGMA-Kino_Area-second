import { Box, ToggleButton,ToggleButtonGroup, } from "@mui/material";
import React, { Component } from "react";

class Kino extends Component {
  // const [alignment, setAlignment] = React.useState('web');
  state={
    alignment: "kino"
  }

  handleChange = (event, newAlignment) => {
    this.setState({
      alignment: newAlignment
    });
  };
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
          gap='120px'
        >
          <ToggleButtonGroup
          color="primary"
          value={this.state.alignment}
          exclusive
          onChange={this.handleChange}
          aria-label="Platform"
          sx={{
            gap:'120px'
          }}
          >

          <ToggleButton value="kino">Kinoarea</ToggleButton>
          <ToggleButton value="serial">Сериалы</ToggleButton>
          <ToggleButton value="Naprav">Направления</ToggleButton>
          <ToggleButton value="Imag">Критика</ToggleButton>
          <ToggleButton value="Premium">Премии</ToggleButton>
          <ToggleButton value="week">Годы</ToggleButton>
          <ToggleButton value="Janr">Жанры</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
    );
  }
}

export default Kino;
