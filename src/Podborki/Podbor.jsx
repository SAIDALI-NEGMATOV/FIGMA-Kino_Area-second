import { Box } from '@mui/material';
import React, { Component } from 'react';
import Bottons from './Buttons/Bottons';
import Kino from './Kino/Kino';
import PEmail from './PEmail/PEmail';
import PEnd from './PEnd/PEnd';
import Podborki from './Podborki/Podborki';
import Top from './Top/Top';

class Podbor extends Component {
    render() {
        return (
            <Box>
                <Podborki/>
                <Kino/>
                <Top/>
                <Bottons/>
                <PEmail/>
                <PEnd/>
            </Box>
        );
    }
}

export default Podbor;
