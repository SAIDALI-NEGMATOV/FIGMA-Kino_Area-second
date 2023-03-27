import { Box, Typography, Button } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Log from "./Img/Kinoarea.png";

class Voyti extends Component {
  render() {
    return (
      <Box
        display={"flex"}
        justifyContent="center"
        alignContent={"center"}
        bgcolor={"#ccc"}
        flexDirection="column"
        paddingTop={"10px"}
      >
        <Box display={"flex"} justifyContent="center" alignContent={"center"}>
          <img src={Log} alt="" />
        </Box>
        <Box
          bgcolor={"rgba(25, 30, 46, 1)"}
          height="83.8vh"
          display={"flex"}
          justifyContent="center"
          alignContent={"center"}
          mt="20px"
          padding={"60px"}
          gap="20px"
        >
          <form action="" style={{ gap: "20px" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "65px",
                lineHeight: "80px",
                color: "#fff",
                textAlign: "center",
                mb: "30px",
              }}
            >
              Войти
            </Typography>
            <input
              type="text"
              value={"Логин, почта или телефон"}
              style={{
                padding: "15px 100px",
                backgroundColor: "rgba(30, 37, 56, 1)",
                border: "0px",
                borderRadius: "10px",
                color: "rgba(255, 255, 255, 0.6)",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                textAlign: "start",
                marginBottom: "15px",
              }}
            />
            <input
              value={"Ваш пароль"}
              type="text"
              style={{
                padding: "15px 100px",
                backgroundColor: "rgba(30, 37, 56, 1)",
                border: "0px",
                borderRadius: "10px",
                color: "rgba(255, 255, 255, 0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "15px",
              }}
            />
            <input
              type="submit"
              value={"Войти"}
              style={{
                padding: "15px 163px",
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
            <Link to='/Reg'>
            <Button
              style={{
                padding: "10px 95px",
                backgroundColor: "rgba(30, 37, 56, 1)",
                border: "0px",
                borderRadius: "10px",
                color: "rgba(255, 255, 255, 1)",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                textAlign: "center",
                marginBottom: "10px",
              }}
              >
              Зарегистрироваться
            </Button>
              </Link>
              <Link to='/Pasword'>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "80px",
                color: "rgba(54, 87, 203, 1)",
                textAlign: "center",
                // mb: "10px",
              }}
              >
              Восстановить пароль
            </Typography>
              </Link>
            <Box display={"flex"} justifyContent="center" gap="10px">
              <Box
                padding={"10px 12px"}
                bgcolor="rgba(30, 37, 56, 1)"
                borderRadius={"10px"}
              >
                <i
                  class="bx bxl-vk"
                  style={{ color: "rgba(255, 255, 255, 1)", fontSize: "25px" }}
                ></i>
              </Box>
              <Box
                padding={"10px 12px"}
                bgcolor="rgba(54, 87, 203, 1)"
                borderRadius={"10px"}
              >
                <i
                  class="bx bxl-facebook"
                  style={{ color: "rgba(255, 255, 255, 1)", fontSize: "25px" }}
                ></i>
              </Box>
              <Box
                padding={"10px 12px"}
                bgcolor="rgba(30, 37, 56, 1)"
                borderRadius={"10px"}
              >
                <i
                  class="bx bxl-google"
                  style={{ color: "rgba(255, 255, 255, 1)", fontSize: "25px" }}
                ></i>
              </Box>
              <Box
                padding={"10px 12px"}
                bgcolor="rgba(30, 37, 56, 1)"
                borderRadius={"10px"}
              >
                <i
                  class="bx bxl-twitter"
                  style={{ color: "rgba(255, 255, 255, 1)", fontSize: "25px" }}
                ></i>
              </Box>
            </Box>
          </form>
          <Link to="/components">
            <Box>
              <Button>
                <i
                  class="bx bx-x"
                  style={{ color: "#fff", fontSize: "30px" }}
                ></i>
              </Button>
            </Box>
          </Link>
        </Box>
      </Box>
    );
  }
}

export default Voyti;
