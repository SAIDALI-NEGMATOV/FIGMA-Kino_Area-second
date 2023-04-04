import { Box } from "@mui/material";
import React from "react";
import ActorsChild from "./Actors/ActorsChild";
import Bottons from "./Buttons/Bottons";
import Email from "./E-mail/Email";
import End from "./End/End";

export default function Actors() {
  return (
    <Box>
      <ActorsChild />
      <Bottons/>
      <Email/>
      <End/>
    </Box>
  );
}
