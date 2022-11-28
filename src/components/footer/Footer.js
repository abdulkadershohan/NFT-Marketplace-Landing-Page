import { Box, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import logo from '../../assets/images/logo.png';
import DiscordIcon from "../../assets/svg/DiscordIcon";
import InstraIcon from "../../assets/svg/InstraIcon";
import TwitterIcon from "../../assets/svg/TwitterIcon";
import YoutubeIcon from "../../assets/svg/YoutubeIcon";
import { CTypography } from "../../utility";
import InputForm from "./InputForm";
export default function Footer() {
    const GetMoreUpdateSection = () => {
        return (
            <Stack
                spacing={3}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <CTypography
                    fontSize="48px"
                    fontWeight="600"
                    fontFamily="ClashDisplay"
                    sx={{
                        color: '#fff',
                    }}
                    align={'center'}
                >
                    Get More Updates
                </CTypography>
                <CTypography
                    fontSize="20px"
                    fontWeight="300"
                    fontFamily="Poppins"
                    sx={{
                        color: '#fff',
                    }}
                    align={'center'}
                >
                    Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
                </CTypography>
                <InputForm />

            </Stack>
        )
    }
    const marketplaceData = [
        {
            id: 1,
            title: 'Explore',
            url: '#'
        },
        {
            id: 2,
            title: 'Articls',
            url: '#'
        },
        {
            id: 3,
            title: 'How it works',
            url: '#'
        },
        {
            id: 4,
            title: 'Help',
        }
    ]
    const linkData = [
        {
            id: 1,
            title: 'Token',
            url: '#'
        },
        {
            id: 2,
            title: 'API',
            url: '#'
        },
        {
            id: 3,
            title: 'Big Bounty',
            url: '#'
        },
        {
            id: 4,
            title: 'Become a partner',
            url: '#'
        }

    ]
    const socailIcon = [
        {
            id: 3,
            icon: <DiscordIcon />
        },
        {
            id: 1,
            icon: <TwitterIcon />

        },
        {
            id: 2,
            icon: <InstraIcon />
        },

        {
            id: 4,
            icon: <YoutubeIcon />
        }
    ]
    const FooterSection = () => {
        return (
            <Stack
                sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                }}
                justifyContent={'space-between'}
            >
                <Stack>
                    <Stack direction={'row'}
                        spacing={2}
                        component={'a'}
                        href={'#'}
                        width={'fit-content'}

                    >
                        <Box
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
                    </Stack>
                    <Stack
                        maxWidth={'400px'}
                        py={5}
                    >
                        <Typography
                            fontSize="16px"
                            fontWeight="300"
                            fontFamily="Poppins"
                            color={"#E0E0E0"}
                            textTransform={'capitalize'}
                        >
                            the leading NFT Marketplace on Ethereum Home to the next generation of digital creators. Discover the best NFT collections.
                        </Typography>
                    </Stack>
                    <Stack
                        direction={'row'}
                        spacing={3}
                    >
                        {
                            socailIcon.map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        '&:hover': {
                                            cursor: 'pointer',
                                            transform: 'scale(1.1)',
                                        }
                                    }}
                                >
                                    {item.icon}
                                </Box>
                            ))
                        }
                    </Stack>

                </Stack>
                {/* link & marketplace */}
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    width="50%"
                >
                    <Stack >
                        <CTypography
                            fontSize="32px"
                            fontWeight="600"
                            fontFamily="Poppins"
                        >
                            Marketplace
                        </CTypography>
                        <Stack
                            spacing={2}
                            py={5}
                        >
                            {
                                marketplaceData.map((item) => (
                                    <Box
                                        component={'a'}
                                        target={'_blank'}
                                        sx={{
                                            width: 'fit-content',
                                            '&:hover': {
                                                transform: 'scale(1.1)',
                                            }
                                        }}
                                        href={item.url}
                                        key={item.id}
                                    >
                                        <CTypography
                                            fontSize="16px"
                                            fontWeight="300"
                                            fontFamily="Poppins"
                                            color={"#E0E0E0"}
                                        >
                                            {item.title}
                                        </CTypography>
                                    </Box>
                                ))
                            }
                        </Stack>
                    </Stack>
                    <Stack>
                        <CTypography
                            fontSize="32px"
                            fontWeight="600"
                            fontFamily="Poppins"
                        >
                            Links
                        </CTypography>
                        <Stack
                            spacing={2}
                            py={5}

                        >
                            {
                                linkData.map((item) => (
                                    <Box
                                        component={'a'}
                                        target={'_blank'}
                                        sx={{
                                            width: 'fit-content',
                                            '&:hover': {
                                                transform: 'scale(1.1)',
                                            }
                                        }}
                                        href={item.url}
                                        key={item.id}
                                    >
                                        <CTypography
                                            fontSize="16px"
                                            fontWeight="300"
                                            fontFamily="Poppins"
                                            color={"#E0E0E0"}
                                        >
                                            {item.title}
                                        </CTypography>
                                    </Box>
                                ))
                            }
                        </Stack>
                    </Stack>

                </Stack>

            </Stack >
        )
    }
    return (
        <Stack
            mx={10}
        >
            <GetMoreUpdateSection />
            <Divider
                sx={{
                    backgroundColor: '#fff',
                    opacity: 0.4,
                    my: 5,
                    // mx: 10,
                }}
            />
            <FooterSection />
            <CTypography
                fontSize="16px"
                fontWeight="300"
                fontFamily="Poppins"
                color={"#fff"}
                textAlign={'center'}
                pt={5}
            >
                © {new Date().getFullYear()} Endft. All rights reserved.
            </CTypography>
        </Stack>
    )
}
