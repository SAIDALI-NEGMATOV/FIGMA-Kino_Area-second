import { Box, Typography, Stack } from "@mui/material";
import React from "react";

export const Film = ({ films, match }) => {
  console.log(match);
  return (
    <Box>
      {films.map((item, index) => (
        <Stack border={1} padding={"10px 20px"}>
          <Typography variant="p">Film</Typography>
        </Stack>
      ))}
    </Box>
  );
};
