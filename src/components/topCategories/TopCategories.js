import { Box, Stack } from "@mui/system";
import React from "react";
import Carousel from 'react-elastic-carousel';
import CTypography from "../../utility/CTypography";


const topCategoriesData = [
    {
        id: 1,
        type: 'Art',
        images: {
            id: 1,
            image1: require('../../assets/images/art1.png'),
            image2: require('../../assets/images/art2.png'),
            image3: require('../../assets/images/art3.png'),
        }

    },
    {
        id: 2,
        type: 'Collectibles',
        images: {
            id: 2,
            image1: require('../../assets/images/collectibles1.png'),
            image2: require('../../assets/images/collectibles2.png'),
            image3: require('../../assets/images/collectibles3.png'),
        }

    },
    {
        id: 3,
        type: 'Virtual Worlds & Metaverse',
        images: {
            id: 3,
            image1: require('../../assets/images/virtualWorldMetaverse1.png'),
            image2: require('../../assets/images/virtualWorldMetaverse2.png'),
            image3: require('../../assets/images/virtualWorldMetaverse3.png'),
        }

    },
    {
        id: 4,
        type: 'Art',
        images: {
            id: 4,
            image1: require('../../assets/images/art1.png'),
            image2: require('../../assets/images/art2.png'),
            image3: require('../../assets/images/art3.png'),
        }

    },
    {
        id: 5,
        type: 'Collectibles',
        images: {
            id: 5,
            image1: require('../../assets/images/collectibles1.png'),
            image2: require('../../assets/images/collectibles2.png'),
            image3: require('../../assets/images/collectibles3.png'),
        }

    },
    {
        id: 6,
        type: 'Virtual Worlds & Metaverse',
        images: {
            id: 6,
            image1: require('../../assets/images/virtualWorldMetaverse1.png'),
            image2: require('../../assets/images/virtualWorldMetaverse2.png'),
            image3: require('../../assets/images/virtualWorldMetaverse3.png'),
        }

    }

]
export default function TopCategories() {

    const RenderTitle = () => {
        return (
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
                Top Categories
            </CTypography>
        )
    }
    const MainCard = ({ item }) => {
        const { type, images } = item
        return (
            <Stack
                sx={{
                    background: "linear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)",
                    filter: 'drop-shadow(0px 3.99107px 48.8907px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(7.48326px)',
                    borderRadius: '9.9554px',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',

                }}
            >
                <Stack
                    direction={'row'}
                    spacing={1}
                    m={2}
                >
                    <Stack
                        spacing={1}
                    >
                        <Box
                            component={'img'}
                            src={images.image1}
                            alt={item.name}
                            sx={{
                                borderRadius: '9.97769px',
                                height: {
                                    xs: 120,
                                    sm: 150
                                },
                                width: {
                                    xs: 120,
                                    sm: 150
                                },
                            }}

                        />
                        <Box
                            component={'img'}
                            src={images.image2}
                            alt={item.name}
                            sx={{
                                borderRadius: '9.97769px',
                                height: {
                                    xs: 120,
                                    sm: 150
                                },
                                width: {
                                    xs: 120,
                                    sm: 150
                                },
                            }}

                        />

                    </Stack>
                    <Stack>
                        <Box
                            component={'img'}
                            src={images.image3}
                            alt={item.name}
                            sx={{
                                borderRadius: '15px',
                                flexGrow: 1,
                                width: {
                                    xs: 200,
                                    sm: 250
                                },
                            }}

                        />

                    </Stack>
                </Stack>

                <CTypography
                    fontSize="20px"
                    fontWeight="600"
                    fontFamily="Poppins"
                    align={'center'}
                    pb={2}
                >
                    {type}
                </CTypography>

            </Stack>
        )
    }
    const breakPoints = [
        {
            width: 600,
            itemsToShow: 1,

        },
        {
            width: 900,
            itemsToShow: 2,
        },
        {
            width: 1200,
            itemsToShow: 3,
        }]
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
            <RenderTitle />

            {/* <Stack
                //  direction={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                gap={2}
            > */}
            <Stack
            >
                <Carousel
                    itemsToShow={3}
                    pagination={false}
                    breakPoints={breakPoints}

                >
                    {
                        topCategoriesData.map((item) => (
                            <div
                                key={Math.random()}
                            >
                                <MainCard
                                    item={item}
                                />
                            </div>
                        ))
                    }
                </Carousel>
            </Stack>

        </Stack >
    );
}
