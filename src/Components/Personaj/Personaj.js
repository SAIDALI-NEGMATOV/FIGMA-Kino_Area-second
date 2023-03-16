import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import Mujik from "../images/mujik.jpg";
import Mujikt from "../images/mujikt.jpg";

class Personaj extends Component {
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
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt="50px"
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
            Популярные персоны
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "22px",
              lineHeight: "27px",
              color: "#fff",
              mt: "12px",
              ml: "500px",
            }}
          >
            За год
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "22px",
              lineHeight: "27px",
              color: "#fff",
              mt: "12px",
              ml: "20px",
            }}
          >
            За месяц
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "22px",
              lineHeight: "27px",
              color: "#fff",
              mt: "12px",
              ml: "20px",
            }}
          >
            За неделю
          </Typography>
        </Box>
        <Box
          mt="30px"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          gap="20px"
        >
          <Box position={"relative"}>
            <Typography
              variant="p"
              sx={{
                position: "absolute",
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              1-е место
            </Typography>
            <Typography
              variant="p"
              sx={{
                position: "absolute",
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "35px",
                lineHeight: "18px",
                color: "#FFF",
                top: "350px",
              }}
            >
              Квентин Тарантино
            </Typography>
            <Typography
              variant="p"
              sx={{
                position: "absolute",
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "25px",
                lineHeight: "18px",
                color: "#340",
                top: "380px",
              }}
            >
              Quentin Tarantino
            </Typography>
            <Typography
              variant="p"
              sx={{
                position: "absolute",
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                top: "400px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              57 лет
            </Typography>
            <img src={Mujikt} alt="" />
          </Box>
          <Box position={"relative"}>
            <Typography
              variant="p"
              sx={{
                position: "absolute",
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              2-е место
            </Typography>
            <Typography
              variant="p"
              sx={{
                position: "absolute",
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "35px",
                lineHeight: "18px",
                color: "#FFF",
                top: "350px",
              }}
            >
              Джейсон Стейтем
            </Typography>
            <Typography
              variant="p"
              sx={{
                position: "absolute",
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "25px",
                lineHeight: "18px",
                color: "#340",
                top: "380px",
              }}
            >
              Jason Statham
            </Typography>
            <Typography
              variant="p"
              sx={{
                position: "absolute",
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: "15px",
                top: "400px",
                lineHeight: "18px",
                color: "#F2F60F",
              }}
            >
              52 года
            </Typography>
            <img src={Mujik} alt="" />
          </Box>
          <Box
            display={"flex"}
            padding="20px"
            justifyContent="flex-start"
            flexDirection="column"
            bgcolor={"rgba(27, 33, 51, 1)"}
            width={"440px"}
            height="440px"
          >
            <Box display={"flex"} justifyContent="space-between">
              <Box
                display={"flex"}
                justifyContent="center"
                gap={"10px"}
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "25px",
                    lineHeight: "18px",
                    color: "#fff",
                    top: "380px",
                  }}
                >
                  Тинто Брасс
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "18px",
                    color: "#333",
                    top: "380px",
                  }}
                >
                  Jason Statham
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "15px",
                    top: "400px",
                    lineHeight: "18px",
                    color: "#F2F60F",
                  }}
                >
                  52 года
                </Typography>
              </Box>
              <Box mt='20px'>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "15px",
                    top: "400px",
                    lineHeight: "18px",
                    color: "#F2F60F",
                  }}
                >
                  3-е место
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent="space-between" mt='40px'>
              <Box
                display={"flex"}
                justifyContent="center"
                gap={"10px"}
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "25px",
                    lineHeight: "18px",
                    color: "#fff",
                    top: "380px",
                  }}
                >
                  Джеки Чан
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "18px",
                    color: "#333",
                    top: "380px",
                  }}
                >
                  Jackie Chan
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "15px",
                    top: "400px",
                    lineHeight: "18px",
                    color: "#F2F60F",
                  }}
                >
                  66 лет
                </Typography>
              </Box>
              <Box mt='20px'>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "15px",
                    top: "400px",
                    lineHeight: "18px",
                    color: "#F2F60F",
                  }}
                >
                  4-е место
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent="space-between" mt='40px'>
              <Box
                display={"flex"}
                justifyContent="center"
                gap={"10px"}
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "25px",
                    lineHeight: "18px",
                    color: "#fff",
                    top: "380px",
                  }}
                >
                  Том Харди
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "18px",
                    color: "#333",
                    top: "380px",
                  }}
                >
                  Tom Hardy
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "15px",
                    top: "400px",
                    lineHeight: "18px",
                    color: "#F2F60F",
                  }}
                >
                 42 года
                </Typography>
              </Box>
              <Box mt='20px'>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "15px",
                    top: "400px",
                    lineHeight: "18px",
                    color: "#F2F60F",
                  }}
                >
                  5-е место
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent="space-between" mt='30px'>
              <Box
                display={"flex"}
                justifyContent="center"
                gap={"10px"}
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "25px",
                    lineHeight: "18px",
                    color: "#fff",
                    top: "380px",
                  }}
                >
                  Акшай Кумар
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "18px",
                    color: "#333",
                    top: "380px",
                  }}
                >
                  Akshay Kumar
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "15px",
                    top: "400px",
                    lineHeight: "18px",
                    color: "#F2F60F",
                  }}
                >
                 52 года
                </Typography>
              </Box>
              <Box mt='20px'>
                <Typography
                  variant="p"
                  sx={{
                    fontStyle: "normal",
                    fontFamily: "-moz-initial",
                    fontWeight: "400",
                    fontSize: "15px",
                    top: "400px",
                    lineHeight: "18px",
                    color: "#F2F60F",
                  }}
                >
                 6-е место
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Personaj;
