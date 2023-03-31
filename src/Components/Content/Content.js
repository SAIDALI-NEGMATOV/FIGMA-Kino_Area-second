import React, { Component } from "react";
import { Box, Typography, Button } from "@mui/material";
import Back from "../images/123321.jpg";
import Escape from "../images/Escape.jpg";
import Jokker from "../images/Jokker.jpg";
import opoqi from "../images/opoqi.jpg";
import Xennam from "../images/Xennam.jpg";
import Fort from "../images/Ford.jpg";
import Siyu from "../images/3022.jpg";
import Xarli from "../images/Xarli.jpg";
import Police from "../images/Police.jpg";
import { Link } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <Box>
        <Box
          position={"relative"}
          bgcolor={"#1E2538"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          flexDirection={"column"}
          sx={{
            backgroundImage: `url(${Back})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#1E2538",
            backgroundSize: "100% 100%",
            backgroundBlendMode: "multiply",
          }}
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
              Сейчас в кино
            </Typography>
            <Box
              width={"100px"}
              borderTop={"1px solid #fff"}
              mt="10px"
              sx={{
                display: {
                  Pluse: "none",
                  Notebook: "none",
                  NoteL: "block",
                },
                width: {
                  Plu: "25px",
                  Notebook: "30px",
                  NoteL: "50px",
                },
                margin: {
                  NoteL: "0px 10px",
                },
              }}
            ></Box>
            <Box gap="40px" display={"flex"}>
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
                Все
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
                Боевики
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
                Приключения
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "22px",
                  mt: "10px",
                  color: "rgba(255, 255, 255, 0.35)",
                }}
              >
                Комедии
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
                Фантастика
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "22px",
                  mt: "10px",
                  color: "rgba(255, 255, 255, 0.35)",
                }}
              >
                {" "}
                Триллеры
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
                Драма
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
                    }
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
                  position={'relative'}
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
                  position={'relative'}
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
                  position={'relative'}
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
                  position={'relative'}
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
                  position={'relative'}
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
                  position={'relative'}
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
                  position={'relative'}
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
          <Link to='/Films' style={{margin:'50px'}}>
          <Button
            sx={{
              border: "1px solid #fff",
              color: "#fff",
              padding: "10px 20px",
              mt: "5%",
            }}
            >
            Все новинки
          </Button>
            </Link>
        </Box>
      </Box>
    );
  }
}

export default Content;
