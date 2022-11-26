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
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
export default function TendingNFT() {

    const [activeStep, setActiveStep] = React.useState(1);


    const Card = ({ item, index }) => {
        return (
            <Stack
                mx={2}
                sx={{
                    background: activeStep ? '' : 'inear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                    filter: 'drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(12.5px)',
                    // border: activeStep === index ? "5px solid linear-gradient(#69EACB , #EACCF8 ,#6654F1) " : '1.5px solid rgba(255, 255, 255, 0.3)',
                    maxWidth: 400,
                    borderWidth: activeStep === index ? '5px' : '1.5px',
                    borderStyle: 'solid',
                    borderImageSlice: 1,
                    borderImageSource: 'linear-gradient(#69EACB , #EACCF8 ,#6654F1)',
                    borderRadius: '20px',
                    // border: '1.5px solid transparent',
                    // border: activeStep === index ? '5px solid linear-gradient(#69EACB , #EACCF8 ,#6654F1)' : 'rgba(255, 255, 255, 0.3)',
                    //  borderColor: activeStep === index ? "rgba(105, 234, 203, 1),rgba(234, 204, 248, 1),rgba(102, 84, 241, 1)" : 'rgba(255, 255, 255, 0.3)',
                    //rgba(105, 234, 203, 1),rgba(234, 204, 248, 1),rgba(102, 84, 241, 1)
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
                            height: '300px',
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
                                    fontWeight={500}
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
                                fontWeight={500}
                                fontFamily={'Poppins'}
                            >
                                {item.lastBid} ETH
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
                                {item.bidFrom} ETH
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
                                fontWeight={500}
                                fontFamily={'Poppins'}
                            >
                                ${item.value}
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

    return (
        <Stack>

            <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={true}
                centerMode={true}
                keyBoardControl={true}
                slidesToSlide={0.5}
            //  partialVisible={true}
            >

                {
                    TendingNFTData.map((item, index) => (
                        <Card item={item} index={index} />
                    ))
                }
            </Carousel>;
        </Stack>
    )
}
