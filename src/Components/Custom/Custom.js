import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import mulan from "../images/mulan.jpg";
import play from "../images/play2.png";
import dominik from '../images/dominik.jpg'
import vodova from '../images/vodova.jpg'
import pistol from '../images/pistol.jpg'

class Custom extends Component {
  render() {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
        bgcolor="rgba(30, 37, 56, 1)"
      >
        <Box
          mt="50px"
          height={"15px"}
          borderRadius="10px"
          width={"90%"}
          border={"1px solid rgba(27, 33, 51, 1)"}
        >
          <Box
            height={"13px"}
            width="350px"
            ml="200px"
            bgcolor={"rgba(54, 87, 203, 1)"}
            borderRadius="10px"
          ></Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          gap={"10px"}
          alignItems="center"
          mt="20px"
        >
          <Box
            flexDirection={"column"}
          >
            <Box position={"relative"} sx={{
              width:{
                NoteL:'350px',
                Planshet:'180px',
                Phone:"100px"
              }
            }}>
              <Box position={"absolute"} top="45%" left={"45%"} sx={{
                width:{
                  Phone:"15px"
                }
              }}>
                <img src={play} alt="" style={{
                  width:"100%",
                  height:"100%"
                }}/>
              </Box>
              <img src={mulan} alt="" style={{width:'100%',height:'100%'}}/>
            </Box>
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: {
                  NoteL:"15px",
                  Planshet:"15px",
                  Phone:"13px"
                },
                lineHeight: "27px",
                color: "#fff",
              }}
            >
              Мулан
            </Typography>
          </Box>
          <Box
            flexDirection={"column"}
          >
            <Box position={"relative"} sx={{
              width:{
                NoteL:'350px',
                Planshet:'180px'
              }
            }}>
              <Box position={"absolute"} top="45%" left={"45%"}sx={{
                 width:{
                  NoteL:"30px",
                  Phone:"15px"
                }
              }}>
                <img src={play} alt="" style={{width:'100%',height:'100%'}}/>
              </Box>
              <img src={dominik} alt="" style={{width:'100%',height:'100%'}}/>
            </Box>
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: {
                  NoteL:"15px",
                  Planshet:"15px",
                  Phone:"13px"
                },
                lineHeight: "27px",
                color: "#fff",
              }}
            >
             Форсаж 9
            </Typography>
          </Box>
          <Box
            flexDirection={"column"}
          >
            <Box position={"relative"}
            sx={{
              width:{
                NoteL:'350px',
                Planshet:'180px'
              }
            }}>
              <Box position={"absolute"} top="45%" left={"45%"} sx={{
                 width:{
                  NoteL:"30px",
                  Phone:"15px"
                }
              }}>
                <img src={play} alt="" style={{
                  width:'100%',height:"100%"
                }}/>
              </Box>
              <img src={vodova} alt="" style={{width:'100%',height:'100%'}}/>
            </Box>
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: {
                  NoteL:"15px",
                  Planshet:"15px",
                  Phone:"13px"
                },
                lineHeight: "27px",
                color: "#fff",
              }}
            >
              Чёрная Вдова
            </Typography>
          </Box>
          <Box
            flexDirection={"column"}
          >
            <Box position={"relative"}
            sx={{
              width:{
                NoteL:'350px',
                Planshet:'180px'
              }
            }}>
              <Box position={"absolute"} top="45%" left={"45%"} sx={{
                 width:{
                  NoteL:"30px",
                  Phone:"15px"
                }
              }}>
                <img src={play} alt="" style={{
                 width:"100%",height:"100%"
                }}/>
              </Box>
              <img src={pistol} alt="" style={{width:'100%',height:'100%'}}/>
            </Box>
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: {
                  NoteL:"15px",
                  Planshet:"15px",
                  Phone:"13px"
                },
                lineHeight: "27px",
                color: "#fff",
              }}
            >
             Тихое место 2
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Custom;
