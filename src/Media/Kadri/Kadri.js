import { Box, Typography, Button } from "@mui/material";
import React, { Component } from "react";
import Shoushen from "../MImage/Shoushen.jpg";
import Zemla from "../MImage/Zemla.jpg";
import Gamp from "../MImage/Gamp.jpg";
import Shidler from "../MImage/Shodler.jpg";
import One from "../MImage/One.jpg";
import Nachalo from "../MImage/Nachalo.jpg";
import Leon from "../MImage/Leon.jpg";
import Bred from "../MImage/Bred.jpg";
import Jiszn from "../MImage/Jizn.jpg";

class Kadri extends Component {
  render() {
    return (
      <Box
        bgcolor={"#1E2538"}
        display="flex"
        justifyContent={"flex-start"}
        alignItems="flex-start"
        pl="80px"
        flexDirection={"column"}
      >
        <Box mt="30px">
          <Typography
            variant="p"
            sx={{
              fontFamily: "-moz-initial",
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "22px",
              color: "#fff",
              mt: "10px",
            }}
          >
            Кадры
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent="center" gap="20px">
          <Box mt={"15px"} borderRadius="10px" overflow={"hidden"}>
            <img src={Shoushen} alt="" width={"430px"} />
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#fff",
                  mt: "10px",
                }}
              >
                Побег из Шоушенка
              </Typography>
            </Box>
          </Box>
          <Box mt={"15px"} borderRadius="10px" overflow={"hidden"}>
            <img src={Zemla} alt="" width={"430px"} />
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#fff",
                  mt: "10px",
                }}
              >
                Зеленая миля
              </Typography>
            </Box>
          </Box>
          <Box mt={"15px"} borderRadius="10px" overflow={"hidden"}>
            <img src={Gamp} alt="" width={"430px"} />
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#fff",
                  mt: "10px",
                }}
              >
                Форрест Гамп
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent="center" gap="20px">
          <Box mt={"15px"} borderRadius="10px" overflow={"hidden"}>
            <img src={Shidler} alt="" width={"430px"} />
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#fff",
                  mt: "10px",
                }}
              >
                Список Шиндлера
              </Typography>
            </Box>
          </Box>
          <Box mt={"15px"} borderRadius="10px" overflow={"hidden"}>
            <img src={One} alt="" width={"430px"} />
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#fff",
                  mt: "10px",
                }}
              >
                1+1
              </Typography>
            </Box>
          </Box>
          <Box mt={"15px"} borderRadius="10px" overflow={"hidden"}>
            <img src={Nachalo} alt="" width={"430px"} />
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#fff",
                  mt: "10px",
                }}
              >
                Леон
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent="center" gap="20px">
          <Box mt={"15px"} borderRadius="10px" overflow={"hidden"}>
            <img src={Leon} alt="" width={"430px"} />
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#fff",
                  mt: "10px",
                }}
              >
                Бойцовский клуб
              </Typography>
            </Box>
          </Box>
          <Box mt={"15px"} borderRadius="10px" overflow={"hidden"}>
            <img src={Bred} alt="" width={"430px"} />
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#fff",
                  mt: "10px",
                }}
              >
                Жизнь прекрасна
              </Typography>
            </Box>
          </Box>
          <Box mt={"15px"} borderRadius="10px" overflow={"hidden"}>
            <img src={Jiszn} alt="" width={"430px"} />
            <Box>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "-moz-initial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "22px",
                  color: "#fff",
                  mt: "10px",
                }}
              >
                Форрест Гамп
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box width={"100%"} display="flex" justifyContent={"center"}>
          <Button
            sx={{
              border: "1px solid #fff",
              mt: "30px",
              padding: "10px 20px",
              mr: "100px",
              color: "#fff",
              mb:'50px'
            }}
          >
            Показать ещё
          </Button>
        </Box>
      </Box>
    );
  }
}

export default Kadri;
