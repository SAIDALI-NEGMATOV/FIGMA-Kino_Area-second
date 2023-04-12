import { Box } from "@mui/material";
import React from 'react'
import Content from '../Components/Content/Content'
import Hame from '../Components/Home/Hame'
import Custom from '../Components/Custom/Custom'
import Context from '../Components/Context/Context';
import Personaj from '../Components/Personaj/Personaj'
import Newc from '../Components/News/Newc'
import Loding from '../Components/Loding/Loding'
import Client from '../Components/Client/Client'
import Email from '../Components/E-mail/Email'
import End from '../Components/End/End'





export const Components = ({films}) => {
  return (
    <Box>
          <Content films={films}/>
          <Hame />
          <Custom />
          <Context />
          <Personaj />
          <Newc />
          <Loding />
          <Client />
          <Email />
          <End />
      </Box>
  )
}
