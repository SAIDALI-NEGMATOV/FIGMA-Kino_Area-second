import { Box, Typography, Button } from "@mui/material";
import React, { Component } from "react";
import Kitay from "../MImage/image 4 (16).jpg";
import Play from "../MImage/play.png";
import Tachka from "../MImage/Tachka.jpg";
import Xarbiy from "../MImage/Xarbiy.jpg";
import Neg from "../MImage/Neg.jpg";
import Zagruska from "../MImage/Zag.jpg";
import Wensday from "../MImage/Wensday.png";

class MContent extends Component {
  render() {
    return (
      <Box
        bgcolor={"#1E2538"}
        display="flex"
        justifyContent={"flex-start"}
        alignItems="flex-start"
        pl="80px"
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
            Медиа
          </Typography>
          <Box
            width={"300px"}
            borderTop={"1px solid #fff"}
            mt="10px"
            ml="300px"
            mr="300px"
          ></Box>
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
            Трейлеры
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
            Постеры
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
            Кадры
          </Typography>
        </Box>
        <Box mt="10px" gap="20px">
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
            Медиа
          </Typography>
        </Box>
        <Box mt="10px">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "30px",
              lineHeight: "80px",
              color: "#fff",
            }}
          >
            Трейлеры
          </Typography>
        </Box>
        <Box display={"flex"} gap="20px">
          <Box position={"relative"} borderRadius="10px" overflow={"hidden"}>
            <Box
              position={"absolute"}
              zIndex="1"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              width="100%"
              height={"85%"}
            >
              <img src={Play} alt="" />
            </Box>
            <img src={Kitay} alt="" width={"650px"} />
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
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
                Отель у озера
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
                24 Апр 2020
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
                  ml: "10px",
                }}
              >
                97
              </Typography>
            </Box>
          </Box>
          <Box position={"relative"} borderRadius="10px" overflow={"hidden"}>
            <Box
              position={"absolute"}
              zIndex="1"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              width="100%"
              height={"85%"}
            >
              <img src={Play} alt="" />
            </Box>
            <img src={Tachka} alt="" width={"650px"} />
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
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
                Отель у озера
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
                24 Апр 2020
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
                  ml: "10px",
                }}
              >
                97
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} gap="20px">
          <Box position={"relative"} borderRadius="10px" overflow={"hidden"}>
            <Box
              position={"absolute"}
              zIndex="1"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              width="100%"
              height={"85%"}
            >
              <img src={Play} alt="" />
            </Box>
            <img src={Xarbiy} alt="" width={"650px"} />
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
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
                Отель у озера
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
                24 Апр 2020
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
                  ml: "10px",
                }}
              >
                97
              </Typography>
            </Box>
          </Box>
          <Box position={"relative"} borderRadius="10px" overflow={"hidden"}>
            <Box
              position={"absolute"}
              zIndex="1"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              width="100%"
              height={"85%"}
            >
              <img src={Play} alt="" />
            </Box>
            <img src={Neg} alt="" width={"650px"} />
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
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
                Отель у озера
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
                24 Апр 2020
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
                  ml: "10px",
                }}
              >
                97
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} gap="20px">
          <Box position={"relative"} borderRadius="10px" overflow={"hidden"}>
            <Box
              position={"absolute"}
              zIndex="1"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              width="100%"
              height={"85%"}
            >
              <img src={Play} alt="" />
            </Box>
            <img src={Zagruska} alt="" width={"650px"} />
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
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
                Отель у озера
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
                24 Апр 2020
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
                  ml: "10px",
                }}
              >
                97
              </Typography>
            </Box>
          </Box>
          <Box position={"relative"} borderRadius="10px" overflow={"hidden"}>
            <Box
              position={"absolute"}
              zIndex="1"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              width="100%"
              height={"85%"}
            >
              <img src={Play} alt="" />
            </Box>
            <img src={Wensday} alt="" width={"650px"} />
            <Box
              display={"flex"}
              justifyContent="flex-start"
              alignItems={"center"}
            >
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
                Отель у озера
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
                24 Апр 2020
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
                  ml: "10px",
                }}
              >
                97
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box width={"100%"} display="flex" justifyContent={"center"}>
          <Button
            sx={{ border: "1px solid #fff", mt: "30px", padding: "10px 20px",mr:'100px',color:'#fff' }}
          >
            Показать ещё
          </Button>
        </Box>
      </Box>
    );
  }
}

export default MContent;
