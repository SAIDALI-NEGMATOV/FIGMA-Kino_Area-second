import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import Domi from "../images/dominik2.jpg";
import gonshi from "../images/gonshik.jpg";
import nevedimka from "../images/neva.jpg";
import mini from "../images/sonikmini.jpg";
import djen from "../images/dje.jpg";

class Client extends Component {
  render() {
    return (
      <Box
        bgcolor={"#151A26"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          gap="40px"
          pt={"30px"}
          mt="30px"
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
            Кассовые сборы
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",
              color: "#fff",
              mt: "10px",
              // color:'rgba(255, 255, 255, 0.35)',
            }}
          >
            13 марта — 15 марта
          </Typography>
          <Box
            ml="50px"
            width={"100px"}
            borderTop={"1px solid #fff"}
            mt="10px"
          ></Box>

          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",
              color: "rgba(255, 255, 255, 0.35)",
              mt: "10px",
              ml: "100px",
            }}
          >
            Россия
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",
              color: "#fff",

              mt: "10px",
            }}
          >
            Весь мир
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",
              color: "rgba(255, 255, 255, 0.35)",
              mt: "10px",
            }}
          >
            США и Канада
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          gap="25px"
          mt="30px"
        >
          <Box display={"flex"} overflow="hidden" borderRadius={"10px"}>
            <Box>
              <img src={Domi} alt="" />
            </Box>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"flex-start"}
              flexDirection="column"
            >
              <Typography variant="p" color={"#fff"} fontSize="15px">
                1. Бладшот
              </Typography>
              <Typography
                variant="p"
                color={"rgba(242, 246, 15, 1)"}
                fontSize="15px"
              >
                $13 млн
              </Typography>
              <Typography
                variant="p"
                color={"rgba(255, 255, 255, 0.35)"}
                fontSize="15px"
              >
                $15.1 млн за 4 недели
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} overflow="hidden" borderRadius={"10px"}>
            <Box>
              <img src={gonshi} alt="" />
            </Box>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"flex-start"}
              flexDirection="column"
            >
              <Typography variant="p" color={"#fff"} fontSize="15px">
                2. Вперёд
              </Typography>
              <Typography
                variant="p"
                color={"rgba(242, 246, 15, 1)"}
                fontSize="15px"
              >
                $6.8 млн
              </Typography>
              <Typography
                variant="p"
                color={"rgba(255, 255, 255, 0.35)"}
                fontSize="15px"
              >
                $41.4 млн за 4 недели
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} overflow="hidden" borderRadius={"10px"}>
            <Box>
              <img src={nevedimka} alt="" />
            </Box>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"flex-start"}
              flexDirection="column"
            >
              <Typography variant="p" color={"#fff"} fontSize="15px">
                3. Человек -невидимка
              </Typography>
              <Typography
                variant="p"
                color={"rgba(242, 246, 15, 1)"}
                fontSize="15px"
              >
                $6.2 млн
              </Typography>
              <Typography
                variant="p"
                color={"rgba(255, 255, 255, 0.35)"}
                fontSize="15px"
              >
               $58.3 млн за 3 недели
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} overflow="hidden" borderRadius={"10px"}>
            <Box>
              <img src={mini} alt="" />
            </Box>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"flex-start"}
              flexDirection="column"
            >
              <Typography variant="p" color={"#fff"} fontSize="15px">
              4. Соник в кино
              </Typography>
              <Typography
                variant="p"
                color={"rgba(242, 246, 15, 1)"}
                fontSize="15px"
              >
                $2.9 млн
              </Typography>
              <Typography
                variant="p"
                color={"rgba(255, 255, 255, 0.35)"}
                fontSize="15px"
              >
                $15.1 млн за 4 недели
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} overflow="hidden" borderRadius={"10px"}>
            <Box>
              <img src={djen} alt="" />
            </Box>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"flex-start"}
              flexDirection="column"
            >
              <Typography variant="p" color={"#fff"} fontSize="15px">
              5. Джентльмены
              </Typography>
              <Typography
                variant="p"
                color={"rgba(242, 246, 15, 1)"}
                fontSize="15px"
              >
               $1.8 млн
              </Typography>
              <Typography
                variant="p"
                color={"rgba(255, 255, 255, 0.35)"}
                fontSize="15px"
              >
                $78.7 млн за 11 недель
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Client;
