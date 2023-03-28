import { Box, Typography, Button } from "@mui/material";
import React, { Component } from "react";
import Logo from "./Image/Логотип (9).png";
import { Link } from "react-router-dom";

class Pasword extends Component {
  render() {
    return (
      <Box
        display={"flex"}
        justifyContent="center"
        alignContent={"center"}
        bgcolor={"#ccc"}
        flexDirection="column"
      >
        <Box display={"flex"} justifyContent="center" alignContent={"center"} padding='20px'>
          <img src={Logo} alt="" />
        </Box>
        <Box
          bgcolor={"rgba(25, 30, 46, 1)"}
          display={"flex"}
          justifyContent="center"
          alignContent={"center"}
          flexDirection="column"
          position={"relative"}
          height="80.6vh"
        >
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
            }}
          >
            Восстановить пароль
          </Typography>
          <Box position={"absolute"} left="1000px" top={"160px"}>
            <Link to="/Voyti">
              <Button>
                <i class="bx bx-x" style={{ fontSize: "30px" }}></i>
              </Button>
            </Link>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection="column"
          >
            <form action="">
              <input
                type="text"
                placeholder={"Почта или номер телефона"}
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
            </form>
            <Box display={"flex"}>
              <form action="" style={{ display: "flex", gap: "10px" }}>
                <input
                  type="submit"
                  placeholder={"Отправить"}
                  style={{
                    padding: "15px 50px",
                    backgroundColor: "rgba(54, 87, 203, 1)",
                    border: "0px",
                    borderRadius: "10px",
                    color: "rgba(255, 255, 255, 1)",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                />
                <input
                  type="text"
                  placeholder={"Полученный код"}
                  style={{
                    padding: "15px 10px",
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
              </form>
            </Box>
            <Box>
              <Link to='/Parol'>
                <input
                  type="submit"
                  value={"Далее"}
                  style={{
                    padding: "15px 165px",
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
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Pasword;
