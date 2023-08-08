import { Box, styled } from "@mui/material";

export const sxStyle = {
    position: 'relative',
    height: '100vh'
};

export const overlayStyle = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0.2, 0.3, 0.4, 0.8)', // Change the alpha value (0.8) to control the darkness of the overlay
};



// export const Root = styled('div')({
//     display: 'flex',
//     height: '100%',
// });