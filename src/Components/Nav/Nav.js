import { Box, Typography, Button } from "@mui/material";
import React, { Component } from "react";
import Kino from "../images/Логотип (2).png";
import Icon from "../images/icon.png";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {
    Search: true,
  };

  SearchBTN = () => {
    if (this.state.Search === true) {
      alert("salom");
    }
  };
  render() {
    return (
      <Box
        // padding={"5px"}
        zIndex={"100"}
        bgcolor={"#1E2538"}
        display={"flex"}
        // position={'relative'}
        justifyContent="space-between"
        gap={"10px"}
        sx={{
          opacity: "",
          gap: {
            Planshet: "1px",
          },
          height: {
            NoteL: "70px",
            Planshet: "140px",
            Phone: "80px",
          },
          justifyContent: {},
        }}
      >
        <Box
          ml={"5%"}
          mr={"5%"}
          mt={"10px"}
          sx={{
            position: {
              NoteL: "relative",
              Planshet: "absolute",
              Phone:"absolute"
            },
            left: {
              NoteL: "10px",
              Planshet: "270px",
              Phone:'140px'
              
            },
            top: {
              NoteL: "0px",
              Planshet: "13px",
              Phone:"1px"
            },
          }}
        >
          <Box sx={{
            width:{
              NoteL:"120px",
              Phone:"80px",
            }
          }}>
            <Link to={"/"}>
              <img
                src={Kino}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
          </Box>
          <Box sx={{
            width:{
              NoteL:"120px",
              Phone:"80px"
            }
          }}>
            <img src={Icon} alt="" style={{ width: "100%", height: "100%" }}/>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          // border='1px solid red'
          sx={{
            marginRight: {
              NoteL: "200px",
              Planshet: "10px",
            },
            position: {
              Planshet: "absolute",
              Phone:"absolute"
            },
            top: {
              Planshet: "100px",
              NoteL: "23px",
              Phone:"50px"
            },
            left: {
              NoteL: "400px",
              Planshet: "180px",
              Phone:"30px"
            },
            gap: {
              NoteL: "40px",
              Planshet: "10px",
              Phone: "5px",
            },
            zIndex: "2",
          }}
        >
          <Link to={"/afisha"}>
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "monospace",
                fontSize: {
                  NoteL: "17px",
                  Planshet: "13px",
                },
                lineHeight: "21px",
                fontWeight: "700",
                cursor: "pointer",
                Margintop: {
                  Planshet: "200px",
                },
              }}
            >
              Афиша
            </Typography>
          </Link>
          <Link to={"/media"}>
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "monospace",
                fontSize: {
                  NoteL: "17px",
                  Planshet: "13px",
                },
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Медиа
            </Typography>
          </Link>
          <Link to="/Films">
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "monospace",
                fontSize: {
                  NoteL: "17px",
                  Planshet: "13px",
                },
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Фильмы
            </Typography>
          </Link>
          <Link to="/Actors">
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "monospace",
                fontSize: {
                  NoteL: "17px",
                  Planshet: "13px",
                },
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Актёры
            </Typography>
          </Link>
          <Link to="/news">
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "monospace",
                fontSize: {
                  NoteL: "17px",
                  Planshet: "13px",
                },
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Новости
            </Typography>
          </Link>
          <Link to="/Podbor">
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "monospace",
                fontSize: {
                  NoteL: "17px",
                  Planshet: "13px",
                },
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Подборки
            </Typography>
          </Link>
          <Typography
            variant="p"
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "monospace",
              fontSize: {
                NoteL: "17px",
                Planshet: "13px",
              },
              lineHeight: "21px",
              fontWeight: "700",
            }}
          >
            Категории
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            ml={"10px"}
            sx={{
              marginRight: {
                Planshet: "10px",
              },
              position: {
                NoteL: "absolute",
                Planshet: "absolute",
                Phone:"absolute"
              },
              left: {
                NoteL: "1250px",
                Planshet: "10px",
                Phone:"10px"
                
              },
              top: {
                NoteL: "13px",
                Planshet: "30px",
                Phone:"20px"
              },
            }}
          >
            <Button
              onClick={this.SearchBTN}
              variant="contained"
              sx={{
                bgcolor: "#fff",
                color: "blue",
                padding: { Planshet: "11px 16px", NoteL: "15px 20px",Phone:"120px , 16px"},
              }}
            >
              <i class="bx bx-search-alt-2"></i>
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mr={"50px"}
          sx={{
            position: {
              NoteL: "absolute",
              Planshet: "absolute",
              Phone:"absolute"
            },
            left: {
              NoteL: "1350px",
              Planshet: "640px",
              Phone:"350px"
            },
            top: {
              NoteL: "13px",
              Planshet: "30px",
              Phone:"12px"
            },
          }}
        >
          <Link to="/Voyti">
            <Button
              sx={{
                backgroundColor: "rgba(54, 87, 203, 1)",
                color: "#fff",
                borderRadius: "10px,",
                padding: { Planshet: "7px 5px", NoteL: "10px 20px" },
              }}
            >
              Войти
            </Button>
          </Link>
        </Box>
      </Box>
    );
  }
}

export default Nav;
