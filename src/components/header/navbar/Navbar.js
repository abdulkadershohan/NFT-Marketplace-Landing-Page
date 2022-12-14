import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, Stack, Typography } from "@mui/material";
import React from "react";
import logo from '../../../assets/images/logo.png';
import CButton from '../../../utility/CButton';
import CTypography from "../../../utility/CTypography";

const navItems = ['Marketplace', 'Collection', 'Community', "Create"];
const navItems2 = [
    {
        id: 1,
        title: 'Marketplace',
        link: '/marketplace'
    }
];

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    return (
        <Box>
            {/* nav items */}
            <Box
                sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 2,
                    px: {
                        lg: 10,
                        md: 2,
                    },

                }}
            >
                <Box
                    sx={{
                        gap: '1rem',
                        alignItems: 'center',
                        display: 'flex',
                    }}
                    component={'a'}
                    href={'/'}

                >
                    <Stack
                        component="img"
                        src={logo}
                        alt="logo"
                        sx={{ width: '3rem', height: '3rem' }}
                    />
                    <Typography
                        sx={{
                            fontSize: '36px',
                            fontWeight: 600,
                            color: '#fff',
                            fontFamily: 'Poppins',
                        }}
                    >
                        ENDFT
                    </Typography>
                </Box>
                {/* nav items */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: {
                            lg: '4rem',
                            md: '1rem',
                        },
                        alignItems: 'center',
                    }}
                >
                    {
                        navItems.map((item, index) => (
                            <CTypography
                                key={item}
                                fontSize="18px"
                                fontWeight="500"
                                fontFamily="Poppins"
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.1)'
                                    },
                                }}
                            >
                                {item}
                            </CTypography>
                        ))
                    }
                    <CButton
                        padding='10px 30px'
                        fontSize="18px"
                        fontWeight="500"
                        fontFamily="Poppins"
                    >
                        Connect Wallet
                    </CButton>
                </Box>
            </Box >
            {/* nav items for mobile */}
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    p: 2,
                }}
            >
                <MenuIcon
                    sx={{
                        color: '#fff',
                        fontSize: '2rem',
                        cursor: 'pointer',
                    }}
                    onClick={() => setOpen(true)}
                />
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    anchor="left"
                    sx={{
                        '.MuiDrawer-paper': {
                            width: '70%',
                            backgroundColor: '#0E1135',
                        }
                    }}

                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        p={2}
                    >
                        <Box
                            sx={{
                                gap: '1rem',
                                alignItems: 'center',
                                display: 'flex',

                            }}
                            component='a'
                            href='/'

                        >
                            <Stack
                                component="img"
                                src={logo}
                                alt="logo"
                                sx={{ width: '3rem', height: '3rem' }}
                            />
                            <Typography
                                sx={{
                                    fontSize: '36px',
                                    fontWeight: 600,
                                    color: '#fff',
                                    fontFamily: 'Poppins',
                                }}
                            >
                                ENDFT
                            </Typography>

                        </Box>
                        <CloseIcon
                            sx={{
                                color: '#fff',
                                fontSize: '2rem',
                                cursor: 'pointer',
                            }}
                            onClick={() => setOpen(false)}
                        />
                    </Stack>

                    <Stack
                        px={4}
                        spacing={2}
                    >
                        {
                            navItems.map((item, index) => (
                                <CTypography
                                    key={item}
                                    fontSize="20px"
                                    fontWeight="400"
                                    fontFamily="Poppins"
                                    align="center"
                                    p={1}
                                    sx={{
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: '#1A1D3D',
                                        },
                                    }}
                                    onClick={() => setOpen(false)}

                                >
                                    {item}
                                </CTypography>
                            ))
                        }
                        <Box
                            align="center"
                        >
                            <CButton>
                                Connect Wallet
                            </CButton>
                        </Box>
                    </Stack>


                </Drawer>


            </Box>
        </Box>
    )
}
