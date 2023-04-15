import { Box, Typography } from "@mui/material";
import React from "react";

import { useParams } from "react-router-dom";

export const ItemProduct = ({ films }) => {
  let { filmId } = useParams();
  console.log(filmId);
  return (
    <Box>
        <Box flexDirection={"column"} position={"relative"}>
          <Box
            width={"100%"}
            height={"100vh"}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            flexDirection={"column"}
            sx={{
              backgroundImage: `url(${films[filmId-1].bgimg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "Cover",
              bgcolor: "rgba(27, 33, 49, 20)",
              backgroundBlendMode: "color-dodge",
            }}
          >
            <Box
              mt={"4%"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              width={"70%"}
              gap={"50px"}
            >
              <Box flexDirection={"column"}>
                <Box overflow={"hidden"} borderRadius={"10px"} mb={"10px"}>
                  <img src={films[filmId-1].Fon} alt="" />
                </Box>
              </Box>
              <Box
                flexDirection={"column"}
                flexWrap={"wrap"}
                width={"540px"}
                gap={"50px"}
                mb="30px"
              >
                <Typography variant="p">{films[filmId-1].Menyu}</Typography>
                <Typography
                  variant="h2"
                  sx={{ color: "rgba(255, 255, 255, 1)", mb: "10px" }}
                >
                  {films[filmId-1].Text}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "rgba(255, 255, 255, 1)" }}
                >
                  {films[filmId-1].Info}
                </Typography>
                <Box display={"flex"} mb={"30px"} mt="30px">
                  <img src={films[filmId-1].Static} alt="" />
                  <img src={films[filmId-1].Static2} alt="" />
                </Box>
                <Typography
                  variant="p"
                  sx={{ color: "rgba(255, 255, 255, 1)" }}
                >
                  {films[filmId-1].Text2}
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  gap="20px"
                >
                  {films[filmId-1].Button}
                  <Box mt="10px">
                    <img src={films[filmId].Icon} alt="" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box width={"70%"}>
              <img src={films[filmId-1].Ball2} alt="" style={{ marginRight: "20px" }} />
              <img src={films[filmId-1].Ball} alt="" />
            </Box>
            <Box
              bgcolor={"rgba(27, 33, 51, 1)"}
              position={"absolute"}
              zIndex={"2"}
              width={"100%"}
              height={"100vh"}
              top={"620px"}
              sx={
                {
                  // opacity:"0.5"
                }
              }
            >
              <Box
                mt={"4%"}
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                width={"70%"}
                gap={"50px"}
              ></Box>
            </Box>
          </Box>
        </Box>
    </Box>
  );
};
