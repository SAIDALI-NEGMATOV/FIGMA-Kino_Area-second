import { Box, Typography, Button } from "@mui/material";
import React, { Component } from "react";
import Kino from "../images/Логотип (2).png";
import Icon from "../images/icon.png";
import Lupa from "../images/Lupa.png";
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
        justifyContent="flex-start"
        gap={"20px"}
        sx={{ opacity: "" , gap:{
          Planshet:"10px"
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
          gap={"15px"}
          sx={{marginRight:{
            NoteL:'250px',
            Planshet:"20px",
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
            borderRadius={"10px"}
            ml={"20px"}
            border='1px solid red'
          >
            <Button
              onClick={this.SearchBTN}
              variant="contained"
              sx={{ bgcolor: "#fff", color: "blue",padding:{Planshet:'',NoteL: "12px 20px"} }}
            >
              {" "}
              <img src={Lupa} alt="" style={{  }} />
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
                padding: "10px 20px",
                borderRadius: "10px,",
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
