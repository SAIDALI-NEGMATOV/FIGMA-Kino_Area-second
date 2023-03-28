import { Box, Typography,Button } from "@mui/material";
import {Link} from "react-router-dom";
import React, { Component } from "react";
import Logo from "./Img/Логотип (8).png";

class Reg extends Component {
  render() {
    return (
      <Box
        display={"flex"}
        justifyContent="center"
        alignContent={"center"}
        bgcolor={"#ccc"}
        flexDirection="column"
        paddingTop={"5px"}
      >
        <Box display={"flex"} justifyContent="center" alignContent={"center"}>
          <img src={Logo} alt="" />
        </Box>
        <Box
          bgcolor={"rgba(25, 30, 46, 1)"}
          display={"flex"}
          justifyContent="center"
          alignContent={"center"}
          mt="10px"
          padding={"24.5px"}
          gap="20px"
        >
          <form action="">
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
              }}
            >
             Зарегистрироваться
            </Typography>
            <input
              type="text"
              placeholder={"Имя"}
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
              placeholder={"Фамилия"}
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
              placeholder={"Придумайте логин"}
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
              placeholder={"Придумайте пароль"}
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
              placeholder={"Повторите пароль"}
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
              placeholder={"Номер телефона или e-mail"}
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
            <Box display={'flex'} justifyContent='center'>
            <input type="checkbox" style={{backgroundColor:'rgba(242, 246, 15, 1)', color:"rgba(242, 246, 15, 1)"}}/>
            <Typography variant="p" sx={{fontSize:'13px',color:'#fff',mr:'3px'}}>
            Соглашаюсь на условия 
            </Typography>
            <Typography variant="p" sx={{fontSize:'13px',color:'rgba(242, 246, 15, 1)'}}>
             политики конфиденциальности
            </Typography>
            </Box>
            <Box display={'flex'} paddingLeft='9px'>
            <input type="checkbox" style={{backgroundColor:'rgba(242, 246, 15, 1)', color:"rgba(242, 246, 15, 1)"}}/>
            <Typography variant="p" sx={{fontSize:'13px',color:'#fff',mr:'3px',textAlign:'start'}}>
            Соглашаюсь на обработку персональных данных
            </Typography>
            </Box>
            <input
              type="submit"
              placeholder={"Зарегистрироваться"}
              style={{
                padding: "15px 120px",
                backgroundColor: "rgba(242, 246, 15, 1)",
                border: "0px",
                borderRadius: "10px",
                color: "rgba(21, 26, 38, 1)",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                textAlign: "start",
                marginBottom: "15px",
                marginTop:'10px'
              }}
            />
          </form>
          <Link to="/Voyti">
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

export default Reg;
