import { Box, Stack } from "@mui/system";
import React from "react";
import CTypography from "../../utility/CTypography";
// import Swiper JS
// import Swiper styles
import 'swiper/css';
// eslint-disable-next-line
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide ,useSwiper } from 'swiper/react';


// import required modules
import { Navigation, Pagination } from "swiper";

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

]
export default function TopCategories() {
    const swiper = useSwiper();

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
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <Stack
            sx={{
                py: {
                    lg: 20,
                    md: 10,
                    xs: 5,
                }
            }}
            spacing={5}
        >
            <RenderTitle />
            <Stack
                sx={{
                    //  px: 10
                }}
            >
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={{
                            nextEl: '.review-swiper-button-next',
                            prevEl: '.review-swiper-button-prev',
                        }}
                        // navigation={{
                        //     // Both prevEl & nextEl are null at render so this does not work
                        //     prevEl: navigationPrevRef.current,
                        //     nextEl: navigationNextRef.current,
                        // }}
                        // onSwiper={(swiper) => {
                        //     // Delay execution for the refs to be defined
                        //     setTimeout(() => {
                        //         // Override prevEl & nextEl now that refs are defined
                        //         swiper.params.navigation.prevEl = navigationPrevRef.current
                        //         swiper.params.navigation.nextEl = navigationNextRef.current

                        //         // Re-init navigation
                        //         swiper.navigation.destroy()
                        //         swiper.navigation.init()
                        //         swiper.navigation.update()
                        //     })
                        // }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            topCategoriesData.map((item) => (
                                <SwiperSlide
                                    key={Math.random()}
                                >
                                    <MainCard
                                        item={item}
                                    />
                                </SwiperSlide>
                            ))
                        }
                        <div ref={navigationPrevRef} />
                        <div ref={navigationNextRef} />
                    </Swiper>
                </div>

            </Stack>

        </Stack >
    );
}
