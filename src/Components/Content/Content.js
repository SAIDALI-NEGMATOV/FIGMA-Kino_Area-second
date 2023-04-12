import React from "react";
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
import istoriya from "../images/istoriya.jpg";
import { Link, Routes, Route } from "react-router-dom";
import { Film } from "./Film/Film";
import { useNavigate } from "react-router-dom";

export default function Content({ films,match }) {
  const navigate = useNavigate();


  let ItemProduction = (item) => {
    navigate('/componets/'+item.id);

    console.log(item);
  };
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
                Planshet: "40px",
                Phone: "40px",
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
          <Box
            display={"flex"}
            sx={{
              gap: {
                NoteL: "40px",
                Planshet: "20px",
                Phone: "5px",
              },
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontWeight: "700",
                fontSize: {
                  NoteL: "18px",
                  Phone: "12px",
                },
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
                fontSize: {
                  NoteL: "18px",
                  Phone: "12px",
                },
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
                fontSize: {
                  NoteL: "18px",
                  Phone: "12px",
                },
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
                fontSize: {
                  NoteL: "18px",
                  Phone: "12px",
                },
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
                fontSize: {
                  NoteL: "18px",
                  Phone: "12px",
                },
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
                fontSize: {
                  NoteL: "18px",
                  Phone: "12px",
                },
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
                fontSize: {
                  NoteL: "18px",
                  Phone: "12px",
                },
                lineHeight: "22px",
                color: "rgba(255, 255, 255, 0.35)",
                mt: "10px",
              }}
            >
              Драма
            </Typography>
          </Box>
        </Box>
        {films.map((item, index) => (
          <Box key={index}>
            <Box>
              <Box
                width={"90%"}
                mt={"5%"}
                display={"flex"}
                gap={"10px"}
                sx={{
                  marginLeft: {
                    Planshet: "0px",
                    NoteL: "0px",
                    Phone: "20px",
                  },
                }}
              >
                <Box>
                  <Box
                    sx={[
                      {
                        borderRadius: "10px",
                        width: {
                          NoteL: "320px",
                          Planshet: "180px",
                        },
                        height: {
                          NoteL: "450px",
                          Planshet: "300px",
                        },
                        overflow: "hidden",
                        position: "relative",
                        marginLeft: {
                          Planshet: "8px",
                          NateL: "0px",
                        },
                      },
                    ]}
                  >
                    <img
                      src={Escape}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
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
                      fontSize: {
                        NoteL: "18px",
                        Planshet: "18px",
                        Phone: "14px",
                      },
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
                <Box
                // border={'1px solid red'}
                >
                  <Box
                    borderRadius={"10px"}
                    // width="100%"
                    overflow={"hidden"}
                    height={"450px"}
                    position={"relative"}
                    // border={'1px solid red'}
                    sx={{
                      width: {
                        NoteL: "320px",
                        Planshet: "180px",
                      },
                      height: {
                        NoteL: "450px",
                        Planshet: "290px",
                      },
                    }}
                  >
                    <img
                      src={Jokker}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                    <Box
                      sx={[
                        {
                          width: "100%",
                          height: "100%",
                          bgcolor: "transparent",
                          position: "absolute",
                          top: "250px",
                          zIndex: "10",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        { "&:hover": { bgcolor: "#3657CBA6", top: "1px" } },
                      ]}
                    >
                      <Link to={""}>
                        <Button
                          
                          onClick={() => ItemProduction(item)}
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
                        <Routes>
                          {" "}
                          <Route
                            path="/Film"
                            element={<Film films={films} />}
                          />
                        </Routes>
                      </Link>
                    </Box>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontStyle: "normal",
                      fontFamily: "-moz-initial",
                      fontWeight: "400",
                      fontSize: {
                        NoteL: "18px",
                        Planshet: "18px",
                        Phone: "14px",
                      },
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
                      fontSize: {
                        NoteL: "15px",
                        Planshet: "15px",
                        Phone: "10px",
                      },
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
                    sx={{
                      width: {
                        NoteL: "330px",
                        Planshet: "180px",
                      },
                      height: {
                        NoteL: "450px",
                        Planshet: "300px",
                      },
                    }}
                  >
                    <img
                      src={opoqi}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
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
                      fontSize: {
                        NoteL: "18px",
                        Planshet: "18px",
                        Phone: "14px",
                      },
                      lineHeight: "22px",
                      color: "#FFF",
                    }}
                  >
                    Звёздные войны:
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontStyle: "normal",
                      fontFamily: "-moz-initial",
                      fontWeight: "400",
                      fontSize: {
                        NoteL: "15px",
                        Planshet: "15px",
                        Phone: "10px",
                      },
                      lineHeight: "18px",
                      color: "#F2F60F",
                    }}
                  >
                    Фантастика, фэнтези,
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: {
                      NoteL: "block",
                      Planshet: "block",
                      Phone: "none",
                    },
                  }}
                >
                  <Box
                    borderRadius={"10px"}
                    width="100%"
                    overflow={"hidden"}
                    height={"450px"}
                    position={"relative"}
                    sx={{
                      width: {
                        NoteL: "320px",
                        Planshet: "180px",
                      },
                      height: {
                        NoteL: "450px",
                        Planshet: "290px",
                      },
                    }}
                  >
                    <img
                      src={Xennam}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
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
                      fontSize: {
                        NoteL: "18px",
                        Planshet: "18px",
                        Phone: "14px",
                      },
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
                      fontSize: {
                        NoteL: "15px",
                        Planshet: "15px",
                        Phone: "10px",
                      },
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
              <Box
                width={"90%"}
                mt="5%"
                display={"flex"}
                gap={"10px"}
                sx={{
                  marginLeft: {
                    Planshet: "0px",
                    NoteL: "0px",
                    Phone: "20px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: {
                      NoteL: "none",
                      Planshet: "none",
                      Phone: "block",
                    },
                  }}
                >
                  <Box
                    borderRadius={"10px"}
                    width="100%"
                    overflow={"hidden"}
                    height={"450px"}
                    position={"relative"}
                    sx={{
                      width: {
                        NoteL: "320px",
                        Planshet: "180px",
                      },
                      height: {
                        NoteL: "450px",
                        Planshet: "290px",
                      },
                    }}
                  >
                    <img
                      src={Xennam}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
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
                      fontSize: {
                        NoteL: "18px",
                        Planshet: "18px",
                        Phone: "14px",
                      },
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
                      fontSize: {
                        NoteL: "15px",
                        Planshet: "15px",
                        Phone: "10px",
                      },
                      lineHeight: "18px",
                      color: "#F2F60F",
                    }}
                  >
                    Боевик, комедия, криминал
                  </Typography>
                </Box>
                <Box>
                  <Box
                    borderRadius={"10px"}
                    width="100%"
                    overflow={"hidden"}
                    height={"450px"}
                    position={"relative"}
                    sx={{
                      width: {
                        NoteL: "320px",
                        Planshet: "180px",
                      },
                      height: {
                        NoteL: "450px",
                        Planshet: "290px",
                      },
                    }}
                  >
                    <img
                      src={Fort}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
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
                      fontSize: {
                        NoteL: "18px",
                        Planshet: "18px",
                        Phone: "14px",
                      },
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
                      fontSize: {
                        NoteL: "15px",
                        Planshet: "15px",
                        Phone: "10px",
                      },
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
                    sx={{
                      width: {
                        NoteL: "320px",
                        Planshet: "180px",
                      },
                      height: {
                        NoteL: "450px",
                        Planshet: "290px",
                      },
                    }}
                  >
                    <img
                      src={Siyu}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
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
                      fontSize: {
                        NoteL: "18px",
                        Planshet: "18px",
                        Phone: "14px",
                      },
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
                      fontSize: {
                        NoteL: "15px",
                        Planshet: "15px",
                        Phone: "10px",
                      },
                      lineHeight: "18px",
                      color: "#F2F60F",
                    }}
                  >
                    Триллер, драма, криминал
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: {
                      NoteL: "block",
                      Planshet: "block",
                      Phone: "none",
                    },
                  }}
                >
                  <Box
                    borderRadius={"10px"}
                    width="100%"
                    overflow={"hidden"}
                    height={"450px"}
                    position={"relative"}
                    sx={{
                      width: {
                        NoteL: "320px",
                        Planshet: "180px",
                      },
                      height: {
                        NoteL: "450px",
                        Planshet: "290px",
                      },
                    }}
                  >
                    <img
                      src={Xarli}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
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
                      fontSize: {
                        NoteL: "18px",
                        Planshet: "18px",
                        Phone: "14px",
                      },
                      lineHeight: "22px",
                      color: "#FFF",
                    }}
                  >
                    Звёздные войны
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontStyle: "normal",
                      fontFamily: "-moz-initial",
                      fontWeight: "400",
                      fontSize: {
                        NoteL: "15px",
                        Planshet: "15px",
                        Phone: "10px",
                      },
                      lineHeight: "18px",
                      color: "#F2F60F",
                    }}
                  >
                    Фантастика, фэнтези,
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: {
                      NoteL: "block",
                      Planshet: "block",
                      Phone: "none",
                    },
                  }}
                >
                  <Box
                    borderRadius={"10px"}
                    width="100%"
                    overflow={"hidden"}
                    height={"450px"}
                    position={"relative"}
                    sx={{
                      width: {
                        NoteL: "320px",
                        Planshet: "180px",
                      },
                      height: {
                        NoteL: "450px",
                        Planshet: "290px",
                      },
                    }}
                  >
                    <img
                      src={Police}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
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
                      fontSize: {
                        NoteL: "18px",
                        Planshet: "18px",
                        Phone: "14px",
                      },
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
                      fontSize: {
                        NoteL: "15px",
                        Planshet: "15px",
                        Phone: "10px",
                      },
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
        ))}
        <Box
          sx={{
            display: {
              NoteL: "none",
              Planshet: "none",
              Phone: "block",
            },
          }}
        >
          <Box
            width={"90%"}
            mt="5%"
            display={"flex"}
            gap={"10px"}
            sx={{
              marginLeft: {
                Planshet: "0px",
                NoteL: "0px",
                Phone: "20px",
              },
            }}
          >
            <Box
              sx={{
                display: {
                  NoteL: "none",
                  Planshet: "none",
                  Phone: "block",
                },
              }}
            >
              <Box
                borderRadius={"10px"}
                width="100%"
                overflow={"hidden"}
                height={"450px"}
                position={"relative"}
                sx={{
                  width: {
                    NoteL: "320px",
                    Planshet: "180px",
                  },
                  height: {
                    NoteL: "450px",
                    Planshet: "290px",
                  },
                }}
              >
                <img
                  src={Xarli}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
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
                  fontSize: {
                    NoteL: "18px",
                    Planshet: "18px",
                    Phone: "14px",
                  },
                  lineHeight: "22px",
                  color: "#FFF",
                }}
              >
                Звёздные войны
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: {
                    NoteL: "15px",
                    Planshet: "15px",
                    Phone: "10px",
                  },
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Фантастика, фэнтези,
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  NoteL: "none",
                  Planshet: "none",
                  Phone: "block",
                },
              }}
            >
              <Box
                borderRadius={"10px"}
                width="100%"
                overflow={"hidden"}
                height={"450px"}
                position={"relative"}
                sx={{
                  width: {
                    NoteL: "320px",
                    Planshet: "180px",
                  },
                  height: {
                    NoteL: "450px",
                    Planshet: "290px",
                  },
                }}
              >
                <img
                  src={Police}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
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
                  fontSize: {
                    NoteL: "18px",
                    Planshet: "18px",
                    Phone: "14px",
                  },
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
                  fontSize: {
                    NoteL: "15px",
                    Planshet: "15px",
                    Phone: "10px",
                  },
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Боевик, комедия, криминал
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  NoteL: "none",
                  Planshet: "none",
                  Phone: "block",
                },
              }}
            >
              <Box
                borderRadius="10px"
                overflow={"hidden"}
                sx={{
                  width: {
                    NoteL: "330px",
                    Planshet: "180px",
                  },
                  height: {
                    NoteL: "450px",
                    Planshet: "300px",
                  },
                }}
              >
                <img
                  src={istoriya}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: {
                    NoteL: "18px",
                    Planshet: "18px",
                    Phone: "14px",
                  },
                  lineHeight: "22px",
                  color: "#FFF",
                }}
              >
                История игрушек 4
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontStyle: "normal",
                  fontFamily: "-moz-initial",
                  fontWeight: "400",
                  fontSize: {
                    NoteL: "15px",
                    Planshet: "15px",
                    Phone: "10px",
                  },
                  lineHeight: "18px",
                  color: "#F2F60F",
                }}
              >
                Мультфильм, фэнтези
              </Typography>
            </Box>
          </Box>
        </Box>
        <Link to="/Films" style={{ margin: "50px" }}>
          <Button
            sx={{
              border: "1px solid #fff",
              color: "#fff",
              padding: {
                NoteL: "10px 20px",
                Planshet: "10px 20px",
                Phone: "5px 10px",
              },
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
