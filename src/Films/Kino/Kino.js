import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Escape from "../img/image 1.jpg";
import Jokker from "../img/Joker.jpg";
import opoqi from "../img/Opoqi.jpg";
import Xennam from "../img/Xenam.jpg";
import Fort from "../img/Ford.jpg";
import Siyu from "../img/Gallaktos.jpg";
import Xarli from "../img/Xarli.jpg";
import Police from "../img/Parni.jpg";

export default function Kino() {
  return (
    <Box>
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
          justifyContent="space-between"
          alignItems={"center"}
          gap="50px"
          pt={"30px"}
          flexWrap={"wrap"}
          // border={"1px solid red"}
          sx={{
            gap: {
              NoteL: "20px",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: {
                NoteL: "60px",
              },
              lineHeight: "80px",
              color: "#FFFFFF",
            }}
          >
            Все новинки
          </Typography>
        </Box>
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent="flex-start"
          alignItems={"center"}
          gap="50px"
          pt={"30px"}
        >
            <Box position={'relative'}>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "20px",
              color: "#fff",
              mt: "10px",
              mr:"13px"
            }}
          >
            Главная 
          </Typography>
          <i class='bx bx-chevron-right'style={{position:'absolute',top:'5px',left:'48px',color:"#fff"}} ></i>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "20px",
              color: "#fff",
              mt: "10px",
            }}
          >
            Фильмы
          </Typography>
            </Box>
        </Box>
        <Box>
          <Box width={"90%"} mt={"5%"} display={"flex"} gap={"10px"}>
            <Box>
              <Box
                sx={[
                  {
                    borderRadius: "10px",
                    width: "100%",
                    overflow: "hidden",
                    height: "450px",
                    position: "relative",
                  },
                ]}
              >
                <img src={Escape} alt="" />
                <Box
                  sx={[
                    {
                      width: "100%",
                      height: "100%",
                      bgcolor: "transparent",
                      position: "absolute",
                      top: "300px",
                      zIndex: "10",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    { "&:hover": { bgcolor: "#3657CBA6", top: "1px" } },
                  ]}
                >
                  <Button
                    sx={[
                      {
                        bgcolor: "#fff",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      },
                    ]}
                  >
                    Карточка фильма
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "#FFF",
                }}
              >
                Побег из Претории
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Триллер
              </Typography>
            </Box>
            <Box>
              <Box
                borderRadius={"10px"}
                width="100%"
                overflow={"hidden"}
                height={"450px"}
                position={"relative"}
              >
                <img src={Jokker} alt="" />
                <Box
                  sx={[
                    {
                      width: "100%",
                      height: "100%",
                      bgcolor: "transparent",
                      position: "absolute",
                      top: "300px",
                      zIndex: "10",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    { "&:hover": { bgcolor: "#3657CBA6", top: "1px" } },
                  ]}
                >
                  <Button
                    sx={[
                      {
                        bgcolor: "#fff",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      },
                    ]}
                  >
                    Карточка фильма
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "#FFF",
                }}
              >
                Джокер
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Триллер, драма, криминал
              </Typography>
            </Box>
            <Box>
              <Box
                borderRadius={"10px"}
                width="100%"
                overflow={"hidden"}
                height={"450px"}
                position={"relative"}
              >
                <img src={opoqi} alt="" />
                <Box
                  sx={[
                    {
                      width: "100%",
                      height: "100%",
                      bgcolor: "transparent",
                      position: "absolute",
                      top: "300px",
                      zIndex: "10",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    { "&:hover": { bgcolor: "#3657CBA6", top: "1px" } },
                  ]}
                >
                  <Button
                    sx={[
                      {
                        bgcolor: "#fff",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      },
                    ]}
                  >
                    Карточка фильма
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "#FFF",
                }}
              >
                Звёздные войны: Скайуокер. Восход
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Фантастика, фэнтези, боевик, приключения
              </Typography>
            </Box>
            <Box>
              <Box
                borderRadius={"10px"}
                width="100%"
                overflow={"hidden"}
                height={"450px"}
                position={"relative"}
              >
                <img src={Xennam} alt="" />
                <Box
                  sx={[
                    {
                      width: "100%",
                      height: "100%",
                      bgcolor: "transparent",
                      position: "absolute",
                      top: "300px",
                      zIndex: "10",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    { "&:hover": { bgcolor: "#3657CBA6", top: "1px" } },
                  ]}
                >
                  <Button
                    sx={[
                      {
                        bgcolor: "#fff",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      },
                    ]}
                  >
                    Карточка фильма
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "#FFF",
                }}
              >
                Джентльмены
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Боевик, комедия, криминал
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box width={"90%"} mt="5%" display={"flex"} gap={"10px"}>
            <Box>
              <Box
                borderRadius={"10px"}
                width="100%"
                overflow={"hidden"}
                height={"450px"}
                position={"relative"}
              >
                <img src={Fort} alt="" />
                <Box
                  sx={[
                    {
                      width: "100%",
                      height: "100%",
                      bgcolor: "transparent",
                      position: "absolute",
                      top: "300px",
                      zIndex: "10",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    { "&:hover": { bgcolor: "#3657CBA6", top: "1px" } },
                  ]}
                >
                  <Button
                    sx={[
                      {
                        bgcolor: "#fff",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      },
                    ]}
                  >
                    Карточка фильма
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "#FFF",
                }}
              >
                Побег из Претории
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Триллер
              </Typography>
            </Box>
            <Box>
              <Box
                borderRadius={"10px"}
                width="100%"
                overflow={"hidden"}
                height={"450px"}
                position={"relative"}
              >
                <img src={Siyu} alt="" />
                <Box
                  sx={[
                    {
                      width: "100%",
                      height: "100%",
                      bgcolor: "transparent",
                      position: "absolute",
                      top: "300px",
                      zIndex: "10",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    { "&:hover": { bgcolor: "#3657CBA6", top: "1px" } },
                  ]}
                >
                  <Button
                    sx={[
                      {
                        bgcolor: "#fff",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      },
                    ]}
                  >
                    Карточка фильма
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "#FFF",
                }}
              >
                Джокер
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Триллер, драма, криминал
              </Typography>
            </Box>
            <Box>
              <Box
                borderRadius={"10px"}
                width="100%"
                overflow={"hidden"}
                height={"450px"}
                position={"relative"}
              >
                <img src={Xarli} alt="" />
                <Box
                  sx={[
                    {
                      width: "100%",
                      height: "100%",
                      bgcolor: "transparent",
                      position: "absolute",
                      top: "300px",
                      zIndex: "10",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    { "&:hover": { bgcolor: "#3657CBA6", top: "1px" } },
                  ]}
                >
                  <Button
                    sx={[
                      {
                        bgcolor: "#fff",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      },
                    ]}
                  >
                    Карточка фильма
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "#FFF",
                }}
              >
                Звёздные войны: Скайуокер. Восход
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Фантастика, фэнтези, боевик, приключения
              </Typography>
            </Box>
            <Box>
              <Box
                borderRadius={"10px"}
                width="100%"
                overflow={"hidden"}
                height={"450px"}
                position={"relative"}
              >
                <img src={Police} alt="" />
                <Box
                  sx={[
                    {
                      width: "100%",
                      height: "100%",
                      bgcolor: "transparent",
                      position: "absolute",
                      top: "300px",
                      zIndex: "10",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    { "&:hover": { bgcolor: "#3657CBA6", top: "1px" } },
                  ]}
                >
                  <Button
                    sx={[
                      {
                        bgcolor: "#fff",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      },
                    ]}
                  >
                    Карточка фильма
                  </Button>
                </Box>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "#FFF",
                }}
              >
                Джентльмены
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Боевик, комедия, криминал
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
