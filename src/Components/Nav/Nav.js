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
        padding={"5px"}
        zIndex={"100"}
        bgcolor={"#1E2538"}
        display={"flex"}
        position={'relative'}
        justifyContent="flex-start"
        gap={"10px"}
        sx={{ opacity: "" , gap:{
          Planshet:"1px",
        }}}
      >
        <Box ml={"5%"} mr={"5%"} width={"90%"}>
          <Box>
            <Link to={"/"}>
              <img src={Kino} alt="" />
            </Link>
          </Box>
          <Box>
            <img src={Icon} alt="" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10px"}
          // border='1px solid red'
          sx={{marginRight:{
            NoteL:'250px',
            Planshet:"10px",
            marginTop:{
              Planshet:'100px'
            },
           
          }}}
        >
          <Link to={"/afisha"}>
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "monospace",
                fontSize:{
                  NoteL:'17px',
                 Planshet:'13px',
               },
                lineHeight: "21px",
                fontWeight: "700",
                cursor: "pointer",
                Margintop:{
                  Planshet:'200px'
                }
                
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
                fontSize:{
                  NoteL:'17px',
                 Planshet:'13px',
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
                fontSize:{
                  NoteL:'17px',
                 Planshet:'13px',
               },
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Фильмы
            </Typography>
          </Link>
          <Link to='/Actors'>
            <Typography
              variant="p"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: "monospace",
                fontSize:{
                  NoteL:'17px',
                 Planshet:'13px',
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
                fontSize:{
                  NoteL:'17px',
                 Planshet:'13px',
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
                 fontSize:{
                   NoteL:'17px',
                  Planshet:'13px',
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
              fontSize:{
                NoteL:'17px',
               Planshet:'13px',
             },
              lineHeight: "21px",
              fontWeight: "700",
            }}
          >
            Категории
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            ml={"10px"}
            sx={{marginRight:{
              Planshet:'10px'
            }}}
          >
            <Button
              onClick={this.SearchBTN}
              variant="contained"
              sx={{ bgcolor: "#fff", color: "blue",padding:{Planshet:'11px 16px',NoteL: "15px 20px"} }}
            >
              <i class='bx bx-search-alt-2'></i>
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mr={"50px"}
        >
          <Link to="/Voyti">
            <Button
              sx={{
                backgroundColor: "rgba(54, 87, 203, 1)",
                color: "#fff",
                borderRadius: "10px,",
                padding:{Planshet:'7px 5px',NoteL: "10px 20px"}
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
