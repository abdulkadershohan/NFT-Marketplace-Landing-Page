import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import logo from '../../../assets/images/logo.png';
import CTypography from "../../../utility/CTypography";
const navItems = ['Marketplace', 'Collection', 'Community', "Create"];

export default function Navbar() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2,
                px: 20,
            }}
        >
            <Box
                sx={{
                    gap: '1rem',
                    alignItems: 'center',
                    display: { xs: 'none', sm: 'flex' },
                }}
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
            <Box
                sx={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                }}
            >
                {
                    navItems.map((item, index) => (
                        <CTypography
                            key={item}
                            fontSize="20px"
                            fontWeight="400"
                            fontFamily="Poppins"
                            sx={{
                                cursor: 'pointer',
                            }
                            }
                        >
                            {item}
                        </CTypography>
                    ))
                }
                <Box
                    component="button"
                    sx={{
                        alignItems: 'center',
                        color: '#fff',
                        backgroundColor: '#2F80ED',
                        padding: '10px 20px',
                        borderRadius: '60px',
                        fontSize: '20px',
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        cursor: 'pointer',
                        "&:hover": {
                            backgroundColor: '#2F80f1',
                        },
                    }}
                >
                    Connect Wallet
                </Box>
            </Box>
        </Box >
    )
}
