import { Box, Typography } from "@mui/material";
import React from "react";
import Leonardo from "../Img/image 7.jpg";
import Denial from "../Img/Denial.jpg";
import Uber from '../Img/Uber.jpg'
import ien from '../Img/Ien.jpg'
import Mark from '../Img/Mark.jpg'
import Neyt from '../Img/Peyj.jpg'
import Manba from '../Img/Manba.jpg'
import Jenet from '../Img/Jenat.jpg'
import Adam from '../Img/Adam.jpg'
import Ovadiya from '../Img/Ovadi.jpg'
import Stiven from '../Img/Stiven.jpg'
import Jeka from '../Img/Jeka.jpg'
import Raf from '../Img/Raf.jpg'
import Tom from '../Img/Tom.jpg'
import Duen from '../Img/Duen.jpg'
import Depp from '../Img/Dep.jpg'
import Xenks from '../Img/Xenks.jpg'
import Dizel from '../Img/Dizel.jpg'
import Smit from '../Img/Smit.jpg'
import Robert from '../Img/Robert.jpg'
import Rosamaxa from '../Img/Rosamaxa.jpg'
import Bred from '../Img/Bred.jpg'
import Kiano from '../Img/Kiano.jpg'
import Sendler from '../Img/Sendler.jpg'
import Morgan from '../Img/Morgan.jpg'
import Chan from '../Img/Chan.jpg'
import Evans from '../Img/Evans.jpg'
import Kris from '../Img/Kris.jpg'
import Nikola from '../Img/Nikola.jpg'
import Stalone from '../Img/Stalone.jpg'

export default function ActorsChild() {
  return (
    <Box
      position={"relative"}
      bgcolor={"#1E2538"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      flexDirection={"column"}
    >
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        gap="50px"
        pt={"30px"}
        flexWrap={"wrap"}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "-moz-initial",
            fontStyle: "normal",
            fontWeight: "900",
            fontSize: {
              NoteL: "60px",
            },
            lineHeight: "80px",
            color: "#FFFFFF",
          }}
        >
          Актёры
        </Typography>
      </Box>
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        gap="50px"
        pt={"30px"}
        flexWrap={'wrap'}
      >
        <Box position={"relative"}>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "20px",
              color: "#fff",
              mt: "10px",
              mr: "13px",
            }}
          >
            Главная
          </Typography>
          <i
            class="bx bx-chevron-right"
            style={{
              position: "absolute",
              top: "5px",
              left: "48px",
              color: "#fff",
            }}
          ></i>
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "20px",
              color: "#fff",
              mt: "10px",
            }}
          >
            Актёры
          </Typography>
        </Box>
      </Box>
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        gap="90px"
        pt={"30px"}
        flexWrap={'wrap'}
      >
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img src={Leonardo} alt="" style={{ width: "200px" }} />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
              Леонардо ДиКаприо
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Denial}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
              Дэниэл Рэдклифф
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Uber}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Даниэль Уэббер
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={ien}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
              Иэн Харт
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Mark}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Марк Леонард Винтер
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        gap="90px"
        pt={"30px"}
        flexWrap={'wrap'}
      >
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img src={Neyt} alt="" style={{ width: "200px",height: "267px"  }} />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Нэйтан Пейдж
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Manba}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Ратидзо Мамбо
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Jenet}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Жанетт Кронин
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Adam}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
              Адам Туоминен
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Ovadiya}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Адам Овадия
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        gap="90px"
        pt={"30px"}
        flexWrap={'wrap'}
      >
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img src={Stiven} alt="" style={{ width: "200px",height: "267px"  }} />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Нэйтан Пейдж
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Raf}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Шон Форель
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Jeka}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Жека Картон
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Tom}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Том Круз
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Duen}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Дуэйн Джонсон
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        gap="90px"
        pt={"30px"}
        flexWrap={'wrap'}
      >
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img src={Depp} alt="" style={{ width: "200px",height: "267px"  }} />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Джонни Депп
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Xenks}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Том Хэнкс
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Dizel}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Вин Дизель
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Smit}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Уилл Смит
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Robert}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Роберт Дауни
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        gap="90px"
        pt={"30px"}
        flexWrap={'wrap'}
      >
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img src={Rosamaxa} alt="" style={{ width: "200px",height: "267px"  }} />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Хью Джекман
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Bred}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Брэд Питт
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Kiano}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
           Киану Ривз
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Sendler}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
             Адам Сэндлер
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Morgan}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Морган Фримен
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        gap="90px"
        pt={"30px"}
        flexWrap={'wrap'}
      >
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img src={Chan} alt="" style={{ width: "200px",height: "267px"  }} />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Джеки Чан
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Evans}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Крис Эванс
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Kris}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
           Крис Хемсворт
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Nikola}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Николас Кейдж
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box borderRadius={"10px"} overflow={"hidden"}>
            <img
              src={Stalone}
              alt=""
              style={{ width: "200px", height: "267px" }}
            />
          </Box>
          <Box>
            {" "}
            <Typography
              variant="p"
              sx={{
                fontFamily: "-moz-initial",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "15px",
                lineHeight: "20px",
                color: "#fff",
                mt: "10px",
              }}
            >
            Сильвестр Сталлоне
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
