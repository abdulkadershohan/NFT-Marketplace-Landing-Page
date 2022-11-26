import { Box, Stack } from "@mui/system";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import avater1 from "../../assets/images/avater1.png";
import avater2 from "../../assets/images/avater2.png";
import avater3 from "../../assets/images/avater3.png";
import avater4 from "../../assets/images/avater4.png";
import ethLogo from "../../assets/images/Logo_Crypto_ETH.png";
import Nft1 from "../../assets/images/nft1.png";
import Nft2 from "../../assets/images/nft2.png";
import Nft3 from "../../assets/images/nft3.png";
import Nft4 from "../../assets/images/nft4.png";
import CButton from "../../utility/CButton";
import CTypography from "../../utility/CTypography";
const TendingNFTData = [
    {
        id: 1,
        coverImage: Nft1,
        collectionName: 'HAPE #8064',
        userName: 'HAPE PRIME',
        lastBid: '15.8',
        bidFrom: '9.45',
        value: '180,345',
        percent: '+12.45',
        avatar: avater1,
    },
    {
        id: 1,
        coverImage: Nft2,
        collectionName: 'HAPE #8064',
        userName: 'HAPE PRIME',
        lastBid: '15.8',
        bidFrom: '9.45',
        value: '180,345',
        percent: '+12.45',
        avatar: avater2,
    },
    {
        id: 1,
        coverImage: Nft3,
        collectionName: 'HAPE #8064',
        userName: 'HAPE PRIME',
        lastBid: '15.8',
        bidFrom: '9.45',
        value: '180,345',
        percent: '+12.45',
        avatar: avater3,
    },
    {
        id: 1,
        coverImage: Nft4,
        collectionName: 'HAPE #8064',
        userName: 'HAPE PRIME',
        lastBid: '15.8',
        bidFrom: '9.45',
        value: '180,345',
        percent: '+12.45',
        avatar: avater4,
    },
    {
        id: 1,
        coverImage: Nft4,
        collectionName: 'HAPE #8064',
        userName: 'HAPE PRIME',
        lastBid: '15.8',
        bidFrom: '9.45',
        value: '180,345',
        percent: '+12.45',
        avatar: avater4,
    }

]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 964, min: 0 },
        items: 1
    }
};
export default function TendingNFT() {


    const Card = ({ item, index }) => {
        return (
            <Stack
                mx={2}
                sx={{
                    background: 'inear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                    filter: 'drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(12.5px)',
                    border: "1.5px solid #69EACB ",
                    borderRadius: '20px',
                }}
            >
                <Stack
                    p={2}
                    spacing={2}
                >
                    <Box
                        component={'img'}
                        src={item.coverImage}
                        alt={item.userName}
                        sx={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '15px',
                            flexGrow: 1,
                            height: {
                                xs: '140px',
                                sm: '200px',
                                lg: '300px',
                            },
                        }}

                    />
                    <Stack direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Stack
                            direction={'row'}
                            spacing={2}
                        >
                            <Box
                                component={'img'}
                                src={item.avatar}
                                alt={item.userName}
                                sx={{
                                    background: '#D2E7FF',
                                    borderRadius: '10px',
                                    width: {
                                        xs: 40,
                                        sm: 52,
                                    },
                                    height: {
                                        sm: 52,
                                        xs: 40
                                    },
                                }}
                            />

                            <Stack>
                                <CTypography
                                    fontWeight={500}
                                    fontFamily={'Poppins'}
                                    sx={{
                                        fontSize: {
                                            xs: 14,
                                            sm: 16,
                                            lg: 22,
                                        },

                                    }}
                                >
                                    {item.collectionName}
                                </CTypography>
                                <CTypography
                                    fontSize={12}
                                    fontWeight={400}
                                    fontFamily={'Poppins'}
                                    sx={{
                                        fontSize: {
                                            xs: 10,
                                            sm: 12,
                                        },

                                    }}
                                >
                                    {item.userName}
                                </CTypography>
                            </Stack>
                        </Stack>
                        <Box
                            component={'img'}
                            src={ethLogo}
                            alt={'eth Logo'}
                            sx={{
                                background: 'rgba(255, 255, 255, 0.33)',
                                borderRadius: '49px',
                                height: {
                                    xs: 20,
                                    sm: 40,
                                },
                                width: {
                                    xs: 20,
                                    sm: 40,
                                },
                            }}
                        />
                    </Stack>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Stack>
                            <CTypography
                                fontSize={20}
                                fontWeight={500}
                                fontFamily={'Poppins'}
                                sx={{
                                    fontSize: {
                                        xs: 12,
                                        sm: 16,
                                        lg: 20,
                                    },
                                }}
                            >
                                {item.lastBid} ETH
                            </CTypography>
                            <CTypography
                                fontSize={12}
                                fontWeight={400}
                                fontFamily={'Poppins'}
                                sx={{
                                    fontSize: {
                                        xs: 10,
                                        sm: 12,
                                    },
                                }}
                            >
                                latest bid
                            </CTypography>
                        </Stack>
                        <Stack >
                            <CTypography
                                fontSize={20}
                                fontWeight={600}
                                fontFamily={'Poppins'}
                                sx={{
                                    fontSize: {
                                        xs: 12,
                                        sm: 16,
                                        lg: 20,
                                    },
                                }}
                            >
                                {item.bidFrom} ETH
                            </CTypography>
                            <CTypography
                                fontSize={12}
                                fontWeight={400}
                                fontFamily={'Poppins'}
                                sx={{
                                    fontSize: {
                                        xs: 10,
                                        sm: 12,
                                    },
                                }}
                            >
                                from
                            </CTypography>
                        </Stack>
                        <Stack>
                            <CTypography
                                fontSize={20}
                                fontWeight={500}
                                fontFamily={'Poppins'}
                                sx={{
                                    fontSize: {
                                        xs: 12,
                                        sm: 16,
                                        lg: 20,
                                    },
                                }}
                            >
                                ${item.value}
                            </CTypography>
                            <CTypography
                                fontSize={12}
                                fontWeight={400}
                                fontFamily={'Poppins'}
                                align={'right'}
                                sx={{
                                    fontSize: {
                                        xs: 10,
                                        sm: 12,
                                    },
                                }}
                                color={item.percent.includes('+') ? '#24FF00' : '#FF0000'}
                            >
                                {item.percent}%
                            </CTypography>
                        </Stack>
                    </Stack>
                    <CButton
                        align={'center'}
                        sx={{
                            background: '#2F80ED',
                            borderRadius: '60px',
                            padding: {
                                lg: '15px 30px',
                                xs: '5px 15px',
                                color: '#fff',
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                cursor: 'pointer',
                                '&:hover': {
                                    background: '#2F80ED',
                                    opacity: 0.8,
                                }
                            },
                        }}
                    >
                        Collect Now
                    </CButton>
                </Stack>

            </Stack>

        )
    }

    return (
        <Stack
            sx={{
                py: {
                    lg: 20,
                    md: 10,
                    xs: 5,
                }
            }}
        >
            <CTypography
                fontSize="48px"
                fontWeight="600"
                fontFamily="ClashDisplay"
                sx={{
                    background: "linear-gradient(#69EACB , #EACCF8 ,#6654F1)",
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    pb: 4,

                }}
                align={'center'}
            >
                Trending NFTs
            </CTypography>

            <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={true}
                draggable={false}
                centerMode={true}
                keyBoardControl={false}

            >

                {
                    TendingNFTData.map((item, index) => (
                        <div key={index}
                        >
                            <Card item={item} index={index} />
                        </div>
                    ))
                }

            </Carousel>;
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 2,
                }}
            >
                <CButton
                    align={'center'}
                    backgroundColor={'transparent'}
                >
                    See More
                </CButton>
            </Box>
        </Stack >
    )
}
