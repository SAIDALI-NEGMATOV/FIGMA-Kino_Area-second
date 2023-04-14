import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Play from "./images/Play3.png";
import Icon from "./images/Icons.png";
import Reyting from "./images/Reyting.png";
import Ocenka from "./images/Ocenka.png";

// import { useParams } from "react-router-dom";

export const ItemProduct = ({ films }) => {
  // let { filmId } = useParams();
  // console.log(filmId);
  return (
    <Box>
      {films.map((item, index) => (
        <Box
          key={index}
          width={"100%"}
          height={"100vh"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          flexDirection={"column"}
          sx={{
            backgroundImage: `url(${item.bgimg})`,
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
                <img src={item.Fon} alt="" />
              </Box>
            </Box>
            <Box
              flexDirection={"column"}
              flexWrap={"wrap"}
              width={"540px"}
              gap={"50px"}
              mb="30px"
            >
              <Typography variant="p">{item.Menyu}</Typography>
              <Typography
                variant="h2"
                sx={{ color: "rgba(255, 255, 255, 1)", mb: "10px" }}
              >
                {item.Text}
              </Typography>
              <Typography variant="h5" sx={{ color: "rgba(255, 255, 255, 1)" }}>
                {item.Info}
              </Typography>
              <Box display={"flex"} mb={"30px"} mt="30px">
                <img src={item.Static} alt="" />
                <img src={item.Static2} alt="" />
              </Box>
              <Typography variant="p" sx={{ color: "rgba(255, 255, 255, 1)" }}>
                {item.Text2}
              </Typography>
              <Box display={"flex"} mt="30px">
                <Button
                  sx={{
                    padding: "40px,20px",
                    border: "1px solid #fff",
                  }}
                >
                  <Box mt={"5px"} mr={"10px"}>
                    <img src={Play} alt="" />
                  </Box>
                  Смотреть трейлер
                </Button>
                <Box mt={"14px"} ml="10px">
                  <img src={Icon} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} gap={"10px"} width={'70%'}>
            <Box>
              <img src={Reyting} alt="" />
            </Box>
            <Box>
              <img src={Ocenka} alt="" />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
