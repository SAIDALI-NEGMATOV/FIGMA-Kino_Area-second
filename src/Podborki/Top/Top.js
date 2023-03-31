import { Box, Typography, Button } from "@mui/material";
import React from "react";
import star from "../Images/Img.png";
import LOGo from "../Images/Логотип.png";
import Like from "../Images/Img (1).png";
import Serdechka from "../Images/Serdechka.png";

export default function Top() {
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
        flexDirection="column"
        pt={"20px"}
      >
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="20px"
        >
          <Box>
            <Box position={"relative"} right="15px">
              <Box>
                <img src={star} alt="" width={"200px"} />
              </Box>
              <Box position={"absolute"} top="35%" left="25%">
                <Typography
                  variant="p"
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "serif",
                    fontSize: "20px",
                    lineHeight: "21px",
                    fontWeight: "700",
                  }}
                >
                  ТОП <span style={{ color: "#3657CB" }}>250</span>
                  <br /> ФИЛЬМОВ
                </Typography>
                <Box ml={"25px"}>
                  <img src={LOGo} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            flexDirection="column"
          >
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "sans-serif",
                fontSize: "25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              ТОП 250 лучших фильмов
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#F2F60F",
                fontFamily: "sans-serif",
                fontSize: "15px",
                lineHeight: "21px",
                fontWeight: "700",
                mt: "10px",
              }}
            >
              250 фильмов
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            marginLeft="630px"
          >
            <Button
              sx={{
                padding: "20px 30px",
                bgcolor: "#3657CB",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Посмотреть
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="20px"
        >
          <Box>
            <Box position={"relative"} right="15px">
              <Box>
                <img src={Like} alt="" width={"200px"} />
              </Box>
              <Box position={"absolute"} top="35%" left="20%">
                <Typography
                  variant="p"
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "serif",
                    fontSize: "20px",
                    lineHeight: "21px",
                    fontWeight: "700",
                  }}
                >
                  <span style={{ color: "#3657CB" }}>Популярные</span> фильмы
                </Typography>
                <Box ml={"25px"}>
                  <img src={LOGo} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            flexDirection="column"
          >
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "sans-serif",
                fontSize: "25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Популярные фильмы и сериалы
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#F2F60F",
                fontFamily: "sans-serif",
                fontSize: "15px",
                lineHeight: "21px",
                fontWeight: "700",
                mt: "10px",
              }}
            >
              1 000 фильмов
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            marginLeft="550px"
          >
            <Button
              sx={{
                padding: "20px 30px",
                bgcolor: "#3657CB",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Посмотреть
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="20px"
        >
          <Box>
            <Box position={"relative"} right="15px">
              <Box>
                <img src={Serdechka} alt="" width={"200px"} />
              </Box>
              <Box position={"absolute"} top="40%" left="20%">
                <Typography
                  variant="p"
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "serif",
                    fontSize: "17px",
                    lineHeight: "21px",
                    fontWeight: "700",
                  }}
                >
                  <span style={{ color: "#3657CB" }}> ОЖИДАЕМЫЕ</span> ФИЛЬМЫ
                </Typography>
                <Box ml={"25px"}>
                  <img src={LOGo} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            flexDirection="column"
          >
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "sans-serif",
                fontSize: "25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Ожидаемые фильмы
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#F2F60F",
                fontFamily: "sans-serif",
                fontSize: "15px",
                lineHeight: "21px",
                fontWeight: "700",
                mt: "10px",
              }}
            >
              480 фильмов
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            marginLeft="695px"
          >
            <Button
              sx={{
                padding: "20px 30px",
                bgcolor: "#3657CB",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Посмотреть
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="20px"
        >
          <Box>
            <Box position={"relative"} right="15px">
              <Box>
                <img src={star} alt="" width={"200px"} />
              </Box>
              <Box position={"absolute"} top="45%" left="25%">
                <Typography
                  variant="p"
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "serif",
                    fontSize: "20px",
                    lineHeight: "21px",
                    fontWeight: "700",
                  }}
                >
                  ПРО<span style={{ color: "#3657CB" }}> АКУЛ </span>
                </Typography>
                <Box ml={"25px"}>
                  <img src={LOGo} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            flexDirection="column"
          >
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "sans-serif",
                fontSize: "25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Фильмы про акул
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#F2F60F",
                fontFamily: "sans-serif",
                fontSize: "15px",
                lineHeight: "21px",
                fontWeight: "700",
                mt: "10px",
              }}
            >
              29 фильмов
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            marginLeft="730px"
          >
            <Button
              sx={{
                padding: "20px 30px",
                bgcolor: "#3657CB",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Посмотреть
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="20px"
        >
          <Box>
            <Box position={"relative"} right="15px">
              <Box>
                <img src={star} alt="" width={"200px"} />
              </Box>
              <Box position={"absolute"} top="45%" left="25%">
                <Typography
                  variant="p"
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "serif",
                    fontSize: "20px",
                    lineHeight: "21px",
                    fontWeight: "700",
                  }}
                >
                  ПРО <span style={{ color: "#3657CB" }}>любовь</span>
                </Typography>
                <Box ml={"25px"}>
                  <img src={LOGo} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            flexDirection="column"
          >
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "sans-serif",
                fontSize: "25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Фильмы про любовь
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#F2F60F",
                fontFamily: "sans-serif",
                fontSize: "15px",
                lineHeight: "21px",
                fontWeight: "700",
                mt: "10px",
              }}
            >
              70 фильмов
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            marginLeft="690px"
          >
            <Button
              sx={{
                padding: "20px 30px",
                bgcolor: "#3657CB",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Посмотреть
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="20px"
        >
          <Box>
            <Box position={"relative"} right="15px">
              <Box>
                <img src={star} alt="" width={"200px"} />
              </Box>
              <Box position={"absolute"} top="45%" left="25%">
                <Typography
                  variant="p"
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "serif",
                    fontSize: "20px",
                    lineHeight: "21px",
                    fontWeight: "700",
                  }}
                >
                  ПРО <span style={{ color: "#3657CB" }}>школу</span>
                </Typography>
                <Box ml={"25px"}>
                  <img src={LOGo} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            flexDirection="column"
          >
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "sans-serif",
                fontSize: "25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Фильмы про школу
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#F2F60F",
                fontFamily: "sans-serif",
                fontSize: "15px",
                lineHeight: "21px",
                fontWeight: "700",
                mt: "10px",
              }}
            >
              30 фильмов
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            marginLeft="710px"
          >
            <Button
              sx={{
                padding: "20px 30px",
                bgcolor: "#3657CB",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Посмотреть
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="20px"
        >
          <Box>
            <Box position={"relative"} right="15px">
              <Box>
                <img src={star} alt="" width={"200px"} />
              </Box>
              <Box position={"absolute"} top="45%" left="15%">
                <Typography
                  variant="p"
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "serif",
                    fontSize: "20px",
                    lineHeight: "21px",
                    fontWeight: "700",
                  }}
                >
                  ПРО <span style={{ color: "#3657CB" }}>вампиров</span>
                </Typography>
                <Box ml={"25px"}>
                  <img src={LOGo} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            flexDirection="column"
          >
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "sans-serif",
                fontSize: "25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Фильмы про вампиров
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#F2F60F",
                fontFamily: "sans-serif",
                fontSize: "15px",
                lineHeight: "21px",
                fontWeight: "700",
                mt: "10px",
              }}
            >
              70 фильмов
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            marginLeft="660px"
          >
            <Button
              sx={{
                padding: "20px 30px",
                bgcolor: "#3657CB",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Посмотреть
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="20px"
        >
          <Box>
            <Box position={"relative"} right="15px">
              <Box>
                <img src={star} alt="" width={"200px"} />
              </Box>
              <Box position={"absolute"} top="45%" left="25%">
                <Typography
                  variant="p"
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "serif",
                    fontSize: "20px",
                    lineHeight: "21px",
                    fontWeight: "700",
                  }}
                >
                  ПРО <span style={{ color: "#3657CB" }}> зомби</span>
                </Typography>
                <Box ml={"25px"}>
                  <img src={LOGo} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            flexDirection="column"
          >
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "sans-serif",
                fontSize: "25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Фильмы про зомби
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#F2F60F",
                fontFamily: "sans-serif",
                fontSize: "15px",
                lineHeight: "21px",
                fontWeight: "700",
                mt: "10px",
              }}
            >
              70 фильмов
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            marginLeft="710px"
          >
            <Button
              sx={{
                padding: "20px 30px",
                bgcolor: "#3657CB",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Посмотреть
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="20px"
        >
          <Box>
            <Box position={"relative"} right="15px">
              <Box>
                <img src={star} alt="" width={"200px"} />
              </Box>
              <Box position={"absolute"} top="45%" left="25%">
                <Typography
                  variant="p"
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "serif",
                    fontSize: "20px",
                    lineHeight: "21px",
                    fontWeight: "700",
                  }}
                >
                  ПРО <span style={{ color: "#3657CB" }}> войну</span>
                </Typography>
                <Box ml={"25px"}>
                  <img src={LOGo} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            flexDirection="column"
          >
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "sans-serif",
                fontSize: "25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Фильмы про войну
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#F2F60F",
                fontFamily: "sans-serif",
                fontSize: "15px",
                lineHeight: "21px",
                fontWeight: "700",
                mt: "10px",
              }}
            >
              70 фильмов
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            marginLeft="710px"
          >
            <Button
              sx={{
                padding: "20px 30px",
                bgcolor: "#3657CB",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Посмотреть
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap="20px"
        >
          <Box>
            <Box position={"relative"} right="15px">
              <Box>
                <img src={star} alt="" width={"200px"} />
              </Box>
              <Box position={"absolute"} top="43%" left="15%">
                <Typography
                  variant="p"
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "serif",
                    fontSize: "25px",
                    lineHeight: "21px",
                    fontWeight: "700",
                  }}
                >
                  Комедийные <br />
                  <span style={{ color: "#3657CB" }}>боевики</span>
                </Typography>
                <Box ml={"25px"}>
                  <img src={LOGo} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            flexDirection="column"
          >
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "sans-serif",
                fontSize: "25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Фильмы про любовь
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#F2F60F",
                fontFamily: "sans-serif",
                fontSize: "15px",
                lineHeight: "21px",
                fontWeight: "700",
                mt: "10px",
              }}
            >
              70 фильмов
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"start"}
            marginLeft="690px"
          >
            <Button
              sx={{
                padding: "20px 30px",
                bgcolor: "#3657CB",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Посмотреть
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
