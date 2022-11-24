import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import foxImg from "../../../assets/images/fox.png";
import HeroImg from "../../../assets/images/heroImg3.png";
import VerifiedIcon from "../../../assets/svg/VerifiedIcon";
import CButton from "../../../utility/CButton";
import CTypography from "../../../utility/CTypography";

// BID NOW! section
const Card1 = () => {
    return (
        <Box
            sx={[
                {
                    position: 'absolute',
                    top: "-2%",
                    right: "-10%",
                    // top: { xs: "5%", sm: '20%', lg: '5%' },
                    // right: { xs: "5%", sm: '50%', lg: '5%' },
                    width: 'fit-content',
                    p: 2,
                    px: 4,
                    background: 'linear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                    filter: 'drop-shadow(0px 4.28214px 52.4562px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(13.3817px)',
                    borderRadius: '21px',
                    transform: ' matrix(0.98, 0, -0.18, 1, 0, 0)',
                    border: '1.6px solid rgba(255, 255, 255, 0.2)',
                }
            ]}
        >
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    transform: 'matrix(0.98, 0, -0.18, 1, 0, 0)'
                }}

            >
                <CTypography
                    fontFamily="ClashDisplay"
                    fontSize="25px"
                    fontWeight="700"
                    color={"#fff"}
                >
                    BID NOW!
                </CTypography>
                <CTypography
                    fontFamily="ClashDisplay"
                    fontSize="14px"
                    fontWeight="500"
                    color={"#000"}

                >
                    Latest Collection
                </CTypography>
            </Stack>

        </Box >
    )
}
//HAPE #6959 section
const Card2 = () => {
    return (
        <Box
            sx={[
                {
                    position: 'absolute',
                    right: '-20%',
                    top: "65%",
                    // bottom: {
                    //     lg: '-50%',

                    // },
                    //   top: { xs: "5%", sm: '20%', lg: '5%' },
                    //    right: { xs: "5%", sm: '50%', lg: '5%' },
                    width: 'fit-content',
                    height: 'fit-content',
                    p: 2,
                    px: 4,
                    background: "linear-gradient(155.14deg, rgba(252, 255, 117, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)",
                    filter: 'drop-shadow(0px 4.28214px 52.4562px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(24.6223px)',
                    borderRadius: '21.4107px',
                    transform: ' matrix(0.98, -0.01, -0.18, 1, 0, 0)',
                    border: '1.6px solid rgba(255, 255, 255, 0.2)',
                }
            ]}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={2}

            >
                <Box
                    sx={{
                        position: 'relative',
                    }}
                >
                    <Box
                        component={'img'}
                        src={foxImg}
                        alt="foxImg"
                        sx={{
                            height: { xs: 50, sm: 60, lg: 60 },
                            width: { xs: 50, sm: 60, lg: 60 },
                            borderRadius: '16px',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            right: -5,
                            bottom: 0,
                        }}
                    >
                        <VerifiedIcon />
                    </Box>
                </Box>

                <Stack
                    // alignItems="center"
                    ///  justifyContent="center"
                    sx={{
                        transform: 'matrix(0.98, -0.01, -0.18, 1, 0, 0)'
                    }}
                >
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="30px"
                        fontWeight="600"
                        color={"#fff"}
                    >HAPE #6959
                    </CTypography>
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="14px"
                        fontWeight="500"
                        color={"#000"}

                    >
                        HAPES PRIME
                    </CTypography>

                </Stack>
            </Stack>

        </Box >
    )
}
// Latest Bid section
const Card3 = () => {
    return (
        <Box
            sx={[
                {
                    position: 'absolute',
                    bottom: '-7%',
                    left: '-15%',
                    width: 'fit-content',
                    height: 'fit-content',
                    p: 2,
                    px: 4,
                    background: "linear-gradient(155.14deg, rgba(252, 255, 117, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)",
                    filter: 'drop-shadow(0px 4.28214px 52.4562px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(24.6223px)',
                    borderRadius: '21.4107px',
                    transform: ' matrix(0.98, -0.01, -0.18, 1, 0, 0)',
                    border: '1.6px solid rgba(255, 255, 255, 0.2)',
                }
            ]}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={2}

            >

                <Stack
                    // alignItems="center"
                    ///  justifyContent="center"
                    sx={{
                        transform: 'matrix(0.98, -0.01, -0.18, 1, 0, 0)'
                    }}
                >
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="25px"
                        fontWeight="600"
                        color={"#fff"}
                    >5.758 ETH
                    </CTypography>
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="14px"
                        fontWeight="500"
                        color={"#000"}

                    >
                        Latest Bid
                    </CTypography>

                </Stack>
                <Stack
                    // alignItems="center"
                    ///  justifyContent="center"
                    sx={{
                        transform: 'matrix(0.98, -0.01, -0.18, 1, 0, 0)'
                    }}
                >
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="21px"
                        fontWeight="600"
                        color={"#fff"}
                    >$5758.31
                    </CTypography>
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="14px"
                        fontWeight="500"
                        color={"#24FF00"}

                    >
                        +12.45%
                    </CTypography>

                </Stack>
            </Stack>

        </Box >
    )
}
// Auction section
const Card4 = () => {
    return (
        <Box
            sx={[
                {
                    position: 'absolute',
                    bottom: '-5%',
                    left: '-20%',
                    // top: { xs: "5%", sm: '20%', lg: '5%' },
                    // right: { xs: "5%", sm: '50%', lg: '5%' },
                    width: 'fit-content',
                    p: 2,
                    px: 6,
                    background: 'linear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                    filter: 'drop-shadow(0px 4.28214px 52.4562px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(13.3817px)',
                    borderRadius: '20px',
                    transform: ' matrix(0.98, 0, -0.18, 1, 0, 0)',
                    border: '1.6px solid rgba(255, 255, 255, 0.2)',
                }
            ]}
        >
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    transform: 'matrix(0.98, 0, -0.18, 1, 0, 0)'
                }}

            >
                <CTypography
                    fontFamily="ClashDisplay"
                    fontSize="21px"
                    fontWeight="600"
                    color={"#fff"}
                >
                    Auction
                </CTypography>
                <CTypography
                    fontFamily="ClashDisplay"
                    fontSize="15px"
                    fontWeight="300"
                    color={"#fff"}

                >
                    End In
                </CTypography>
            </Stack>

        </Box >
    )
}
// hh mm ss section
const Card5 = () => {
    return (
        <Box
            sx={[
                {
                    position: 'absolute',
                    bottom: {
                        sm: '-10%',
                        xs: '-30%',

                    },
                    right: '5%',
                    // top: { xs: "5%", sm: '20%', lg: '5%' },
                    // right: { xs: "5%", sm: '50%', lg: '5%' },
                    width: 'fit-content',
                    p: 2,
                    px: { xs: 4, lg: 10 },
                    background: 'linear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                    filter: 'drop-shadow(0px 4.28214px 52.4562px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(13.3817px)',
                    borderRadius: '20px',
                    transform: ' matrix(0.98, 0, -0.18, 1, 0, 0)',
                    border: '1.6px solid rgba(255, 255, 255, 0.2)',
                }
            ]}
        >
            <Stack
                justifyContent="space-between"
                direction="row"
                sx={{
                    transform: 'matrix(0.98, 0, -0.18, 1, 0, 0)'
                }}
                spacing={2}

            >
                <Box>
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="34px"
                        fontWeight="600"
                        color={"#fff"}
                    >
                        17
                    </CTypography>
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="15px"
                        fontWeight="300"
                        color={"#fff"}
                    >
                        Hours
                    </CTypography>
                </Box>
                <CTypography
                    fontFamily="ClashDisplay"
                    fontSize="34px"
                    fontWeight="600"
                    color={"#fff"}
                >
                    :
                </CTypography>
                <Box>
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="34px"
                        fontWeight="600"
                        color={"#fff"}
                    >
                        56
                    </CTypography>
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="15px"
                        fontWeight="300"
                        color={"#fff"}
                    >
                        Minutes
                    </CTypography>
                </Box>
                <CTypography
                    fontFamily="ClashDisplay"
                    fontSize="34px"
                    fontWeight="600"
                    color={"#fff"}
                >
                    :
                </CTypography>
                <Box>
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="34px"
                        fontWeight="600"
                        color={"#fff"}
                    >
                        03
                    </CTypography>
                    <CTypography
                        fontFamily="ClashDisplay"
                        fontSize="15px"
                        fontWeight="300"
                        color={"#fff"}
                    >
                        Seconds
                    </CTypography>
                </Box>


                {/* <CTypography
                    fontFamily="ClashDisplay"
                    fontSize="21px"
                    fontWeight="600"
                    color={"#fff"}
                >
                    Auction
                </CTypography>
                <CTypography
                    fontFamily="ClashDisplay"
                    fontSize="16px"
                    fontWeight="500"
                    color={"#000"}

                >
                    End In
                </CTypography> */}
            </Stack>

        </Box >
    )
}
export default function Hero() {
    return (
        <Stack
            sx={{
                px: { xs: 2, lg: 20 }
            }}
            alignItems="center"
        >
            <Grid container spacing={2}
                sx={{
                    // alignItems: 'center',
                    py: 8
                }}
            >
                {/* left section */}
                <Grid item xs={12} md={6}>
                    <Stack
                        spacing={2}
                    >
                        <CTypography
                            fontSize="48px"
                            fontWeight="500"
                            fontFamily="ClashDisplay"
                            text={`Discover`}
                            textTransform="capitalize"
                        >
                            <br />
                            collect, & sell
                            <span>
                                <CTypography
                                    fontSize="48px"
                                    fontWeight="600"
                                    fontFamily="ClashDisplay"
                                    sx={{
                                        background: "linear-gradient(#69EACB , #EACCF8 ,#6654F1)",
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',


                                    }}
                                >
                                    Extraordinary
                                </CTypography>
                            </span>
                            <span>
                                NFTs
                            </span>
                        </CTypography>
                        <CTypography
                            fontSize="18px"
                            fontWeight="300"
                            fontFamily="Poppins"
                            textTransform="capitalize"
                            lineHeight="30px"
                        >
                            the leading NFT Marketplace on Ethereum <br /> Home to the next generation of digital creators.<br />Discover the best NFT collections.
                        </CTypography>
                        <Stack
                            direction="row"
                            spacing={2}

                        >
                            <CButton
                                btnTitle={"Explore"}
                            />
                            <CButton
                                btnTitle={"Create"}
                                backgroundColor='transparent'
                            />
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{
                                transform: 'matrix(0.98, 0, -0.18, 1, 0, 0)'
                            }}
                            spacing={4}
                            py={4}

                        >
                            <Box>
                                <CTypography
                                    fontFamily="ClashDisplay"
                                    fontSize="34px"
                                    fontWeight="600"
                                    color={"#fff"}
                                >
                                    432K+
                                </CTypography>
                                <CTypography
                                    fontFamily="ClashDisplay"
                                    fontSize="15px"
                                    fontWeight="300"
                                    color={"#fff"}
                                >
                                    Collections
                                </CTypography>
                            </Box>

                            <Box>
                                <CTypography
                                    fontFamily="ClashDisplay"
                                    fontSize="34px"
                                    fontWeight="600"
                                    color={"#fff"}
                                >
                                    Artists
                                </CTypography>
                                <CTypography
                                    fontFamily="ClashDisplay"
                                    fontSize="15px"
                                    fontWeight="300"
                                    color={"#fff"}
                                >
                                    Artists
                                </CTypography>
                            </Box>

                            <Box>
                                <CTypography
                                    fontFamily="ClashDisplay"
                                    fontSize="34px"
                                    fontWeight="600"
                                    color={"#fff"}
                                >
                                    10K+
                                </CTypography>
                                <CTypography
                                    fontFamily="ClashDisplay"
                                    fontSize="15px"
                                    fontWeight="300"
                                    color={"#fff"}
                                >
                                    Community
                                </CTypography>
                            </Box>

                        </Stack>
                    </Stack>
                </Grid >
                {/* right section */}

                <Grid Grid item xs={12} md={6} >
                    <Box
                        sx={{
                            // backgroundColor: 'red',
                            position: 'relative',
                            ml: { xs: 4, sm: 0 },

                        }}
                        component="div"
                    >
                        <Box
                            sx={[
                                {
                                    display: 'flex',
                                    width: { xs: 300, sm: 440, md: 350, lg: 440 },
                                    height: { xs: 300 },
                                    background: 'linear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                                    filter: 'drop-shadow(0px 4.28214px 52.4562px rgba(0, 7, 72, 0.12))',
                                    backdropFilter: 'blur(13.3817px)',
                                    borderRadius: '21px',
                                    transform: 'matrix(0.98, 0, -0.19, 1, 0, 0)',
                                    border: '1.6px solid rgba(255, 255, 255, 0.2)',
                                }
                            ]}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: "25%",
                                left: "5%",
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    sx={[
                                        {
                                            // position: 'absolute',
                                            // top: "25%",
                                            // left: "5%",
                                            display: 'flex',
                                            width: { xs: 350, sm: 520, md: 400, lg: 520 },
                                            height: { xs: 520, sm: 600, lg: 600 },
                                            background: 'linear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                                            filter: 'drop-shadow(0px 4.28214px 52.4562px rgba(0, 7, 72, 0.12))',
                                            backdropFilter: 'blur(13.3817px)',
                                            borderRadius: '21px',
                                            transform: 'matrix(0.98, 0, -0.19, 1, 0, 0)',
                                            border: '1.6px solid rgba(255, 255, 255, 0.2)',
                                        }
                                    ]}
                                />
                                <Card4 />
                                <Card5 />
                            </Box>

                        </Box>

                        <Box
                            sx={{
                                position: 'absolute',
                                top: 20,
                                left: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    component={'img'}
                                    src={HeroImg}
                                    alt="heroImg"
                                    sx={{
                                        height: { xs: 420, sm: 520, lg: 520 },
                                        width: { xs: 350, sm: 520, md: 400, lg: 520 },

                                        filter: 'drop-shadow(16.058px 17.1286px 35.3276px rgba(0, 0, 0, 0.09))',
                                        borderRadius: '16px',
                                        transform: 'matrix(0.98, 0, -0.19, 1, 0, 0)',
                                    }}
                                />
                                <Card1 />
                                <Card2 />
                                <Card3 />
                            </Box>
                        </Box>
                        <Box>

                        </Box>

                    </Box>

                </Grid >
            </Grid >
        </Stack >
    )
}
