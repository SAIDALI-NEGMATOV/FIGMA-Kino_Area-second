import { Box } from '@mui/material';
import React, { Component } from 'react';
import Kadri from './Kadri/Kadri';
import MContent from './MContent/MContent';
import MEmail from './MEmail/MEmail';
import MEnd from './MEnd/MEnd';
import Poster from './Poster/Poster';

class Media extends Component {
    render() {
        return (
            <Box>
                <MContent/>
                <Poster/>
                <Kadri/>
                <MEmail/>
                <MEnd/>
            </Box>
        );
    }
}

export default Media;
