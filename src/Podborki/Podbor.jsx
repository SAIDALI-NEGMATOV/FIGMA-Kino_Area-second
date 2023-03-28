import { Box } from '@mui/material';
import React, { Component } from 'react';
import Kino from './Kino/Kino';
import Podborki from './Podborki/Podborki';

class Podbor extends Component {
    render() {
        return (
            <Box>
                {<Podborki/>}
                {<Kino/>}
            </Box>
        );
    }
}

export default Podbor;
