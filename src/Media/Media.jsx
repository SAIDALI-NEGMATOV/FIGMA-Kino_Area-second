import { Box } from '@mui/material';
import React, { Component } from 'react';
import Kadri from './Kadri/Kadri';
import MContent from './MContent/MContent';
import Poster from './Poster/Poster';

class Media extends Component {
    render() {
        return (
            <Box>
                <MContent/>
                <Poster/>
                <Kadri/>
            </Box>
        );
    }
}

export default Media;
