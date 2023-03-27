import { Box, Typography,Button } from "@mui/material";
import React, { Component } from "react";
import Logo from "./Image/Логотип (10).png";
import { Link } from "react-router-dom";

class Parol extends Component {
  render() {
    return (
      <Box
        display={"flex"}
        justifyContent="center"
        alignContent={"center"}
        bgcolor={"#ccc"}
        flexDirection="column"
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignContent={"center"}
          padding="20px"
        >
          <img src={Logo} alt="" />
        </Box>
        <Box bgcolor={"rgba(25, 30, 46, 1)"}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "40px",
              lineHeight: "80px",
              color: "#fff",
              textAlign: "center",
              mb: "10px",
              mt:'140px'
            }}
          >
            Восстановить пароль
          </Typography>
        </Box>
        <Box
          display={"flex"}
          bgcolor={"rgba(25, 30, 46, 1)"}
          justifyContent="center"
          alignContent={"center"}
          position='relative'
          height={'48.5vh'}
        >
          <Box >
            <form action="">
              <input
                type="text"
                value={"Придумайте новый пароль"}
                style={{
                  padding: "15px 100px",
                  backgroundColor: "rgba(30, 37, 56, 1)",
                  border: "0px",
                  borderRadius: "10px",
                  color: "rgba(255, 255, 255, 0.6)",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "center",
                  marginBottom: "15px",
                }}
              />
              <input
                type="text"
                value={"Подтвердите новый пароль"}
                style={{
                  padding: "15px 100px",
                  backgroundColor: "rgba(30, 37, 56, 1)",
                  border: "0px",
                  borderRadius: "10px",
                  color: "rgba(255, 255, 255, 0.6)",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "center",
                  marginBottom: "15px",
                }}
              />
              <Link to="/Voyti">
              <input
                type="submit"
                value={"Готово!"}
                style={{
                  padding: "15px 160px",
                  backgroundColor: "rgba(242, 246, 15, 1)",
                  border: "0px",
                  borderRadius: "10px",
                  color: "rgba(21, 26, 38, 1)",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "start",
                  marginBottom: "15px",
                }}
                />
                </Link>
            </form>
          </Box>
          <Box position={'absolute'} left='1000px' top='-110px' bottom={'100px'}>
          <Link to="/Voyti">
              <Button >
                <i class="bx bx-x" style={{ fontSize: "30px" }}></i>
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Parol;
