import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import strelka from "../images/strellka.png";
import Bond from "../images/Bond.jpg";
import Sonnik from "../images/sonnik.jpg";
import mini from "../images/mini.jpg";
import yomgir from "../images/yomgir.jpg";
import sahro from "../images/shro.png";

class Newc extends Component {
  render() {
    return (
      <Box
        bgcolor={"#1E2538"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt="50px"
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: {
                NoteL:'65px',
                Planshet:'40px'
              },
              lineHeight: "80px",
              color: "#fff",
            }}
          >
            Последние новости
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: {
                NoteL:"22px",
                Planshet:'18px'
              },
              lineHeight: "27px",
              color: "#fff",
              mt: "12px",
              ml: {
                Planshet:'200px',
                NoteL:"700px"
              },
            }}
          >
            Все трейлеры
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"20px"}
            pt={"35px"}
          >
            <img src={strelka} alt="" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          gap={"20px"}
          position="relative"
          sx={{
            flexDirection:{
              Planshet:'column',
              NoteL:"row"
            },ml:{
              Planshet:"10px"
            }
          }}
        >
          <Box borderRadius={"20px"} overflow="hidden" position={"relative"} sx={{
            width:{
              Planshet:'750px',
              NoteL:"1200px"
            }
          }}>
            <Typography
              variant="p"
              position={"absolute"}
              left={"10px"}
              top={"10px"}
              color={"#fff"}
            >
              15 Апр 2020
            </Typography>
            <Typography
              variant="p"
              // fontSize={"40px"}
              sx={{
                position:{
                  Planshet:"absolute",
                  NoteL:'absolute'
                },
                left:{
                  Planshet:"10px",
                  NoteL:"10px"
                },
                top:{
                  Planshet:'300px',
                  NoteL:"600px"
                },fontSize:{
                  Planshet:"30px",
                  NoteL:'40px'
                }
              }}
              // position={"absolute"}
              // left={"10px"}
              // top={"600px"}
              color={"#fff"}
              fontFamily={"fantasy"}
            >
              Не время умирать. Перенос релиза фильма
            </Typography>
            <Typography
              variant="p"
              fontSize={"20px"}
              sx={{
                position:{
                  Planshet:"absolute",
                  NoteL:'absolute'
                },
                left:{
                  Planshet:"10px",
                  NoteL:"10px"
                },
                top:{
                  Planshet:'350px',
                  NoteL:"650px"
                },fontSize:{
                  Planshet:"18px",
                  NoteL:"20px"
                }
              }}
              color={"#fff"}
            >
              Но действия представителей оппозиции в равной степени
              предоставлены сами себе. В рамках <br /> спецификации современных
              стандартов, стремящиеся вытеснить традиционное производство,
              нанотехнологии указаны как претенденты на роль ключевых факторов.
            </Typography>
            <img src={Bond} alt="" style={{width:'100%',height:'100%'}}/>
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            sx={{
              flexDirection:{
                NoteL:"column",
                Planshet:"row"
              }
            }}
            gap="10px"
          >
            <Box overflow={"hidden"} borderRadius="10px" position={"relative"}>
              <Typography
                variant="p"
                position={"absolute"}
                color="#fff"
                top="5px"
              >
                15 Апр 2020
              </Typography>
              <Typography
                variant="p"
                sx={{
                  position:{
                    NoteL:'absolute',
                    Planshet:'absolute',
                  },top:{
                    NoteL:"150px",
                    Planshet:"100px"
                  },fontSize:{
                    NoteL:"15px",
                    Planshet:"12px"
                  }
                }}
                color={"#fff"}
                fontFamily="fantasy"
              >
                Как изменили Соника с последнего анонса
              </Typography>
              <img src={Sonnik} alt="" style={{width:"100%",height:'100%'}}/>
            </Box>
            <Box overflow={"hidden"} borderRadius="10px" position={"relative"}>
              <Box position={"absolute"}></Box>
              <img src={mini} alt="" style={{width:"100%",height:'100%'}}/>
            </Box>
            <Box overflow={"hidden"} borderRadius="10px" position={"relative"}>
              <Typography
                variant="p"
                position={"absolute"}
                color="#fff"
                top="5px"
              >
                15 Апр 2020
              </Typography>
              <Typography
                variant="p"
                sx={{
                  position:{
                    NoteL:'absolute',
                    Planshet:'absolute',
                  },top:{
                    NoteL:"150px",
                    Planshet:"100px"
                  },fontSize:{
                    NoteL:"15px",
                    Planshet:"12px"
                  }
                }}
                color={"#fff"}
                // fontSize={"15px"}
                fontFamily="fantasy"
              >
                Как изменили Соника с последнего анонса
              </Typography>
              <img src={yomgir} alt="" style={{width:"100%",height:'100%'}}/>
            </Box>
            <Box overflow={"hidden"} borderRadius="10px" position={"relative"}>
              <Typography
                variant="p"
                position={"absolute"}
                color="#fff"
                top="5px"
              >
                15 Апр 2020
              </Typography>
              <Typography
                variant="p"
                sx={{
                  position:{
                    NoteL:'absolute',
                    Planshet:'absolute',
                  },top:{
                    NoteL:"150px",
                    Planshet:"100px"
                  },fontSize:{
                    NoteL:"15px",
                    Planshet:"12px"
                  }
                }}
                // position={"absolute"}
                // top="150px"
                color={"#fff"}
                // fontSize={"15px"}
                fontFamily="fantasy"
              >
                Как изменили Соника с последнего анонса
              </Typography>
              <img src={sahro} alt="" style={{width:"100%",height:'100%'}}/>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Newc;
