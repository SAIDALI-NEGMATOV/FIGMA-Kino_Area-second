import { Box } from '@mui/system';
import React, { Component } from 'react';
import NContent from './NContent/NContent';
import NEmail from './NEmail/NEmail';
import NEnd from './NEnd/NEnd';

class News extends Component {
    render() {
        return (
            <Box>
                <NContent/>
                <NEmail/>
                <NEnd/>
            </Box>
        );
    }
}

export default News;
