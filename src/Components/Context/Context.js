import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import jokker2 from "../images/jokker2.jpg";
import istoriya from '../images/istoriya.jpg'
import gallivud from '../images/Gallived.jpg'
import sol from '../images/sol.jpg'

class Context extends Component {
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
          width={"90%"}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          sx={{
            flexWrap:{
              NoteL:"nowrap",
              Planshet:"nowrap",
              Phone:"wrap"
            },justifyContent:{
              NoteL:"center",
              Planshet:"center",
              Phone:"flex-start"
            },gap:{
              NoteL:"40px",
              Planshet:"40px",
              Phone:"10px"
            },paddingTop:{
              NoteL:"30px",
              Planshet:"30px",
              Phone:"10px"
            }
          }}
          pt={"30px"}
          mt='30px'

        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize:{
                Planshet:"20px",
                NoteL:'65px',
                Phone:'30px'
              },
              lineHeight: "80px",
              color: "#fff",
              
            }}
          >
            Популярные фильмы
          </Typography>
          <Box width={"100px"} borderTop={"1px solid #fff"} mt="10px" sx={{
            display:{
              NoteL:'block',
              Planshet:'none',
              Phone:"none"
            }
          }}></Box>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: {
                Planshet:'12px',
                NoteL:'18px'
              },
              lineHeight: "22px",
              color: "#fff",
              mt: "10px",
            }}
          >
            Всё время
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
               fontSize: {
                Planshet:'12px',
                NoteL:'18px'
              },
              lineHeight: "22px",

              mt: {
                NoteL:"10px",
                Planshet:"10px",
                Phone:"0px"
              },
            }}
          >
            2020
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
               fontSize: {
                Planshet:'12px',
                NoteL:'18px'
              },
              lineHeight: "22px",

              mt: {
                NoteL:"10px",
                Planshet:"10px",
                Phone:"0px"
              },
            }}
          >
            2019
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: {
                Planshet:'12px',
                NoteL:'18px'
              },
              lineHeight: "22px",
              mt: {
                NoteL:"10px",
                Planshet:"10px",
                Phone:"0px"
              },
            }}
          >
            2018
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
               fontSize: {
                Planshet:'12px',
                NoteL:'18px'
              },
              lineHeight: "22px",

              mt: {
                NoteL:"10px",
                Planshet:"10px",
                Phone:"0px"
              },
            }}
          >
            2017
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
               fontSize: {
                Planshet:'12px',
                NoteL:'18px'
              },
              lineHeight: "22px",
              mt: {
                NoteL:"10px",
                Planshet:"10px",
                Phone:"0px"
              },
            }}
          >
            {" "}
            2015
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: {
                Planshet:'12px',
                NoteL:'18px'
              },
              lineHeight: "22px",

              mt: {
                NoteL:"10px",
                Planshet:"10px",
                Phone:"0px"
              },
            }}
          >
            2016
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent="center" alignItems={"center"} sx={{
          gap:{
            NoteL:"15px",
            Planshet:'8px'
          }
        }} mt='50px'>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"} sx={{
                width:{
                  NoteL:'330px',
                  Planshet:'180px',
                  Phone:"130px",
                },
                height:{
                  NoteL:'450px',
                  Planshet:'290px'
                }
            }}>
              <img src={jokker2} alt="" style={{width:'100%',height:'100%'}}/>
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: {
                  NoteL:"18px",
                  Planshet:"18px",
                  Phone:"14px"
                },
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
                Джокер
            </Typography>
            <Typography variant="p"
               sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: {
                  NoteL:"15px",
                  Planshet:'15px',
                  Phone:"10px"
                },
                lineHeight: "18px",
                color: "#F2F60F",
              }}>
            Триллер, драма
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"} sx={{
                width:{
                  NoteL:'330px',
                  Planshet:'180px',
                  Phone:"130px",
                },
                height:{
                  NoteL:'450px',
                  Planshet:'290px'
                }
            }}>
              <img src={istoriya} alt="" style={{width:'100%',height:'100%'}}/>
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: {
                  NoteL:"18px",
                  Planshet:"18px",
                  Phone:"14px"
                },
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
                История игрушек 4
            </Typography>
            <Typography variant="p"
               sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: {
                  NoteL:"15px",
                  Planshet:'15px',
                  Phone:"10px"
                },
                lineHeight: "18px",
                color: "#F2F60F",
              }}>
            Мультфильм, фэнтези
            </Typography>
          </Box>
          <Box>
            <Box borderRadius="15px" overflow={"hidden"} sx={{
                width:{
                  NoteL:'330px',
                  Planshet:'180px',
                   Phone:"130px",
                },
                height:{
                  NoteL:'450px',
                  Planshet:'290px'
                }
            }}>
              <img src={gallivud} alt="" style={{width:'100%',height:'100%'}}/>
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: {
                  NoteL:"18px",
                  Planshet:"18px",
                  Phone:"14px"
                },
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
                Однажды Голливуде
            </Typography>
            <Typography variant="p"
               sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: {
                  NoteL:"15px",
                  Planshet:'15px',
                  Phone:"10px"
                },
                lineHeight: "18px",
                color: "#F2F60F",
              }}>
            Драма, комедия
            </Typography>
          </Box>
          <Box sx={{display:{
                  NoteL:"block",
                  Planshet:"block",
                  Phone:"none",
                }}}>
            <Box borderRadius="15px" overflow={"hidden"}sx={{
                width:{
                  NoteL:'330px',
                  Planshet:'180px',
                  Phone:"130px",
                },
                height:{
                  NoteL:'450px',
                  Planshet:'290px'
                },
            }}>
              <img src={sol} alt="" style={{width:'100%',height:'100%'}}/>
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: {
                  NoteL:"15px",
                  Planshet:'15px',
                  Phone:"10px"
                },
                lineHeight: "22px",
                color: "#FFF",
              }}
            >
                Солнцестояние
            </Typography>
            <Typography variant="p"
               sx={{
                fontStyle: "normal",
                fontFamily: "-moz-initial",
                fontWeight: "400",
                fontSize: {
                  NoteL:"15px",
                  Planshet:'15px',
                  Phone:"10px"
                },
                lineHeight: "18px",
                color: "#F2F60F",
              }}>
            Ужасы, триллер, драма
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Context;
