import { Box, Stack } from "@mui/system";
import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import avater1 from "../../assets/images/avater1.png";
import ethLogo from "../../assets/images/Logo_Crypto_ETH.png";
import Nft1 from "../../assets/images/nft1.png";
import CTypography from "../../utility/CTypography";

const TendingNFTData = [
    {
        id: 1,
        coverImage: Nft1,
        collectionName: 'HAPE #8064',
        userName: 'HAPE PRIME',
        lastBid: '15.8',
        bidFrom: '9.45',
        value: '$180,345',
        percent: '+12.45',
        avatar: avater1,
    }
]
export default function TendingNFT() {
    const Card = ({ item }) => {
        return (
            <Stack
                sx={{
                    background: 'inear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                    filter: 'drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(12.5px)',
                    borderRadius: '20px',
                    border: '1.5px solid rgba(255, 255, 255, 0.3)',

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
                                    width: 52,
                                    height: 52,
                                }}
                            />

                            <Stack>
                                <CTypography
                                    fontSize={22}
                                    fontWeight={600}
                                    fontFamily={'Poppins'}
                                >
                                    {item.collectionName}
                                </CTypography>
                                <CTypography
                                    fontSize={12}
                                    fontWeight={400}
                                    fontFamily={'Poppins'}
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
                                height: 40,
                                width: 40,
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
                                fontWeight={600}
                                fontFamily={'Poppins'}
                            >
                                {item.lastBid}
                            </CTypography>
                            <CTypography
                                fontSize={12}
                                fontWeight={400}
                                fontFamily={'Poppins'}
                            >
                                latest bid
                            </CTypography>
                        </Stack>
                        <Stack >
                            <CTypography
                                fontSize={20}
                                fontWeight={600}
                                fontFamily={'Poppins'}
                            >
                                {item.bidFrom}
                            </CTypography>
                            <CTypography
                                fontSize={12}
                                fontWeight={400}
                                fontFamily={'Poppins'}
                            >
                                from
                            </CTypography>
                        </Stack>
                        <Stack>
                            <CTypography
                                fontSize={20}
                                fontWeight={600}
                                fontFamily={'Poppins'}
                            >
                                {item.value}
                            </CTypography>
                            <CTypography
                                fontSize={12}
                                fontWeight={400}
                                fontFamily={'Poppins'}
                                align={'right'}
                                color={item.percent.includes('+') ? '#24FF00' : '#FF0000'}
                            >
                                {item.percent}%
                            </CTypography>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>

        )
    }
    return <Stack
        alignItems="center"
    >
        <Card
            item={TendingNFTData[0]}
        />

    </Stack>;
}
