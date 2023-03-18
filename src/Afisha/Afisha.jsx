import { Box } from "@mui/material";
import React, { Component } from "react";
import AEmail from "./AEmail/AEmail";
import AEnd from "./AEnd/AEnd";
import Gcontent from "./Gcontent/Gcontent";
import Grafk from "./Grafik/Grafk";

class Afisha extends Component {
  render() {
    return (
      <Box>
        <Grafk />
        <Gcontent />
        <AEmail />
        <AEnd />
      </Box>
    );
  }
}

export default Afisha;
