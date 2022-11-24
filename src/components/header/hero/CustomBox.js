import { Box } from "@mui/material";
import React from "react";

const CustomBox = ({ ...rest }) => {
    return (
        <Box
            sx={[
                {
                    display: 'flex',
                    width: 440,
                    height: 300,
                    background: 'linear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                    filter: 'drop-shadow(0px 4.28214px 52.4562px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(13.3817px)',
                    borderRadius: '21px',
                    transform: 'matrix(0.98, 0, -0.19, 1, 0, 0)',
                    border: '1.6px solid rgba(255, 255, 255, 0.2)',
                    ...rest
                }
            ]}
        >

        </Box >
    );
}
export default CustomBox;
