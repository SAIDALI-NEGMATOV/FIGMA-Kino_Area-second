import { Box, Typography,Button } from "@mui/material";
import React, { Component } from "react";
import Dayving from "../NImage/image 12 (1).jpg";
import Gitara from "../NImage/Gitara.jpg";
import Tizer from "../NImage/Tizer.jpg";
import Shou from "../NImage/Shou.jpg";
import Eyfori from "../NImage/Eyfori.jpg";
import Dau from "../NImage/Dau.jpg";
import Zapad from "../NImage/Zapad.jpg";
import German from "../NImage/German.jpg";
import Morbius from "../NImage/Morbius.jpg";
import Daun from "../NImage/Daun.jpg";
import Chochqa from "../NImage/Chochqa.jpg";
import Priz from '../NImage/Priz.jpg'
import Pauk from '../NImage/Pauk.jpg'
import Saitama from '../NImage/Saitama.jpg'
import Lucas from '../NImage/Lucas.jpg'
import Debil from '../NImage/Dr.jpg'

class NContent extends Component {
  render() {
    return (
      <Box>
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
            justifyContent="flex-start"
            alignItems={"center"}
            gap="40px"
            pt={"30px"}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "65px",
                lineHeight: "80px",
                color: "#fff",
              }}
            >
              Новости
            </Typography>
          </Box>
          <Box mt="10px" gap="20px" width={"90%"}>
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontWeight: "700",
                fontSize: "15px",
                lineHeight: "22px",
                color: "rgba(255, 255, 255, 0.35)",
                mr: "0px",
                mt: "10px",
              }}
            >
              Главная
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontWeight: "700",
                fontSize: "15px",
                lineHeight: "22px",
                color: "#fff",

                mt: "10px",
                ml: "10px",
              }}
            >
              Новости
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent="center" gap={"15px"} mt="30px">
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Dayving} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Фильм недели: «Спутник» — <br /> sci-fi про Чужого в позднем{" "}
                  <br /> СССР, мечтающий быть чем-то
                  <br /> большим
                </Typography>
              </Box>
            </Box>
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Gitara} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Джеймс Ганн назвал 10 самых <br /> недооцененных сериалов{" "}
                  <br /> последних лет
                </Typography>
              </Box>
            </Box>
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Tizer} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
                bgcolor="linear-gradient(1.33deg, rgba(0, 0, 0, 0.88) 1.06%, rgba(0, 0, 0, 0) 107.21%)"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Тизер-постер фильма «Оторви <br /> и выбрось»: Режиссер «Папа,{" "}
                  <br /> сдохни» готовит <br /> приключенческую комедию
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent="center" gap={"15px"} mt="30px">
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Shou} alt="" />
              <Box
                position={"absolute"}
                top="300px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Шоураннер «Жизней матрешки» займется <br /> сериалом по
                  «Звездным войнам»
                </Typography>
              </Box>
            </Box>
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Eyfori} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
                bgcolor="linear-gradient(1.33deg, rgba(0, 0, 0, 0.88) 1.06%, rgba(0, 0, 0, 0) 107.21%)"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  A24 выставила на аукцион <br /> платье из «Солнцестояния» и{" "}
                  <br /> худи из «Эйфории»
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent="center" gap={"15px"} mt="30px">
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Dau} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
                bgcolor="linear-gradient(1.33deg, rgba(0, 0, 0, 0.88) 1.06%, rgba(0, 0, 0, 0) 107.21%)"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Прокуратура Украины завела <br /> уголовные дела на создателей{" "}
                  <br /> проекта «Дау»
                </Typography>
              </Box>
            </Box>
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Zapad} alt="" />
              <Box
                position={"absolute"}
                top="300px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  «Мир Дикого Запада» продлен на четвертый сезон
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent="center" gap={"15px"} mt="30px">
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={German} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Фильм недели: «Спутник» — <br /> sci-fi про Чужого в позднем{" "}
                  <br /> СССР, мечтающий быть чем-то
                  <br /> большим
                </Typography>
              </Box>
            </Box>
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Morbius} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Джеймс Ганн назвал 10 самых <br /> недооцененных сериалов{" "}
                  <br /> последних лет
                </Typography>
              </Box>
            </Box>
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Daun} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
                bgcolor="linear-gradient(1.33deg, rgba(0, 0, 0, 0.88) 1.06%, rgba(0, 0, 0, 0) 107.21%)"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Тизер-постер фильма «Оторви <br /> и выбрось»: Режиссер «Папа,{" "}
                  <br /> сдохни» готовит <br /> приключенческую комедию
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent="center" gap={"15px"} mt="30px">
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Chochqa} alt="" />
              <Box
                position={"absolute"}
                top="300px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Шоураннер «Жизней матрешки» займется <br /> сериалом по
                  «Звездным войнам»
                </Typography>
              </Box>
            </Box>
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Eyfori} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
                bgcolor="linear-gradient(1.33deg, rgba(0, 0, 0, 0.88) 1.06%, rgba(0, 0, 0, 0) 107.21%)"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  A24 выставила на аукцион <br /> платье из «Солнцестояния» и{" "}
                  <br /> худи из «Эйфории»
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent="center" gap={"15px"} mt="30px">
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Priz} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
                bgcolor="linear-gradient(1.33deg, rgba(0, 0, 0, 0.88) 1.06%, rgba(0, 0, 0, 0) 107.21%)"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Прокуратура Украины завела <br /> уголовные дела на создателей{" "}
                  <br /> проекта «Дау»
                </Typography>
              </Box>
            </Box>
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Pauk} alt="" />
              <Box
                position={"absolute"}
                top="300px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  «Мир Дикого Запада» продлен на четвертый сезон
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent="center" gap={"15px"} mt="30px">
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Saitama} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Фильм недели: «Спутник» — <br /> sci-fi про Чужого в позднем{" "}
                  <br /> СССР, мечтающий быть чем-то
                  <br /> большим
                </Typography>
              </Box>
            </Box>
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Lucas} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Джеймс Ганн назвал 10 самых <br /> недооцененных сериалов{" "}
                  <br /> последних лет
                </Typography>
              </Box>
            </Box>
            <Box overflow={"hidden"} borderRadius="15px" position={"relative"}>
              <img src={Debil} alt="" />
              <Box
                position={"absolute"}
                top="250px"
                bottom={""}
                zIndex={"1"}
                display="flex"
                flexDirection={"column"}
                bgcolor="linear-gradient(1.33deg, rgba(0, 0, 0, 0.88) 1.06%, rgba(0, 0, 0, 0) 107.21%)"
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "initial",
                    color: "rgba(152, 152, 152, 1)",
                  }}
                >
                  Новость
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "monospace",
                    color: "#fff",
                  }}
                >
                  24 Апр 2020
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "25px",
                    fontFamily: "fantasy",
                    fontStyle: "normal",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Тизер-постер фильма «Оторви <br /> и выбрось»: Режиссер «Папа,{" "}
                  <br /> сдохни» готовит <br /> приключенческую комедию
                </Typography>
              </Box>
            </Box>
          </Box>
        <Button
            sx={{
              border: "1px solid #fff",
              color: "#fff",
              padding: "10px 20px",
              mt: "5%",
              mb:'50px'
            }}
          >
            Все новинки
          </Button>
        </Box>
      </Box>
    );
  }
}

export default NContent;
