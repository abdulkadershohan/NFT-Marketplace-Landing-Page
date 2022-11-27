import { Box, Stack } from "@mui/material";
import React from "react";
import CButton from "../../utility/CButton";
import CTypography from "../../utility/CTypography";
const topCollectionsData = [
    {
        id: 1,
        profileImage: require('../../assets/images/profileImage1.png'),
        name: 'COOLGUYZZ ',
        username: 'Coolguyzz.io',
        floorPrice: '1.5 ',
        totalSales: '2045.12',
        percentage: '-12.45',
        type: 'collectibles',
    },
    {
        id: 2,
        profileImage: require('../../assets/images/profileImage2.png'),
        name: 'gangstaboi v.1 ',
        username: 'GB_Gangs',
        floorPrice: '2.53 ',
        totalSales: '4487',
        percentage: '+34.5',
        type: 'collectibles',
    },
    {
        id: 3,
        profileImage: require('../../assets/images/profileImage3.png'),
        name: 'HyperApe ',
        username: 'HyperApe.co',
        floorPrice: '1.31 ',
        totalSales: '1743.4',
        percentage: '-5.6',
        type: 'metaverse',
    },
    {
        id: 4,
        profileImage: require('../../assets/images/profileImage4.png'),
        name: 'Lyodd$1 ',
        username: 'Naomi Po',
        floorPrice: '1.156 ',
        totalSales: '1670',
        percentage: '+12.45',
        type: 'virtual worlds',
    },
    {
        id: 5,
        profileImage: require('../../assets/images/profileImage5.png'),
        name: 'Azuki 3D  ',
        username: 'AZUKI.JP',
        floorPrice: '1.5 ',
        totalSales: '1907',
        percentage: '+1.6',
        type: 'sports',
    },
    {
        id: 6,
        profileImage: require('../../assets/images/profileImage6.png'),
        name: 'CuteApe White  ',
        username: 'CuteApe_99',
        floorPrice: '0.045 ',
        totalSales: '245.6',
        percentage: '-14.5',
        type: 'music',
    },
    {
        id: 7,
        profileImage: require('../../assets/images/profileImage7.png'),
        name: 'SneakerHead Vol.1 ',
        username: 'SneakerHead.Corp',
        floorPrice: '1.4 ',
        totalSales: '1790',
        percentage: '+67.9',
        type: 'virtual worlds',
    },
    {
        id: 8,
        profileImage: require('../../assets/images/profileImage8.png'),
        name: 'cvltB3AR ',
        username: 'CVLTBEAR ',
        floorPrice: '0.88 ',
        totalSales: '545',
        percentage: '+12.45',
        type: 'collectibles',
    },
    {
        id: 9,
        profileImage: require('../../assets/images/profileImage1.png'),
        name: 'COOLGUYZZ ',
        username: 'Coolguyzz.io',
        floorPrice: '1.5 ',
        totalSales: '2045.12',
        percentage: '-12.45',
        type: 'collectibles',
    },
    {
        id: 10,
        profileImage: require('../../assets/images/profileImage2.png'),
        name: 'gangstaboi v.1 ',
        username: 'GB_Gangs',
        floorPrice: '2.53 ',
        totalSales: '4487',
        percentage: '+34.5',
        type: 'sports',

    },
    {
        id: 11,
        profileImage: require('../../assets/images/profileImage3.png'),
        name: 'HyperApe ',
        username: 'HyperApe.co',
        floorPrice: '1.31 ',
        totalSales: '1743.4',
        percentage: '-5.6',
        type: 'virtual worlds',
    },
    {
        id: 12,
        profileImage: require('../../assets/images/profileImage4.png'),
        name: 'Lyodd$1 ',
        username: 'Naomi Po',
        floorPrice: '1.156 ',
        totalSales: '1670',
        percentage: '+12.45',
        type: 'metaverse',

    },
    {
        id: 13,
        profileImage: require('../../assets/images/profileImage5.png'),
        name: 'Azuki 3D  ',
        username: 'AZUKI.JP',
        floorPrice: '1.5 ',
        totalSales: '1907',
        percentage: '+1.6',
        type: 'music',
    },
    {
        id: 14,
        profileImage: require('../../assets/images/profileImage6.png'),
        name: 'CuteApe White  ',
        username: 'CuteApe_99',
        floorPrice: '0.045 ',
        totalSales: '245.6',
        percentage: '-14.5',
        type: 'sports',
    },
    {
        id: 15,
        profileImage: require('../../assets/images/profileImage7.png'),
        name: 'SneakerHead Vol.1 ',
        username: 'SneakerHead.Corp',
        floorPrice: '1.4 ',
        totalSales: '1790',
        percentage: '+67.9',
        type: 'collectibles',
    },
    {
        id: 16,
        profileImage: require('../../assets/images/profileImage8.png'),
        name: 'cvltB3AR ',
        username: 'CVLTBEAR ',
        floorPrice: '0.88 ',
        totalSales: '545',
        percentage: '+12.45',
        type: 'art',

    },
    {
        id: 17,
        profileImage: require('../../assets/images/profileImage1.png'),
        name: 'COOLGUYZZ ',
        username: 'Coolguyzz.io',
        floorPrice: '1.5 ',
        totalSales: '2045.12',
        percentage: '-12.45',
        type: 'art',

    },
    {
        id: 18,
        profileImage: require('../../assets/images/profileImage2.png'),
        name: 'gangstaboi v.1 ',
        username: 'GB_Gangs',
        floorPrice: '2.53 ',
        totalSales: '4487',
        percentage: '+34.5',
        type: 'art',

    },
    {
        id: 19,
        profileImage: require('../../assets/images/profileImage3.png'),
        name: 'HyperApe ',
        username: 'HyperApe.co',
        floorPrice: '1.31 ',
        totalSales: '1743.4',
        percentage: '-5.6',
        type: 'art',

    },
    {
        id: 20,
        profileImage: require('../../assets/images/profileImage4.png'),
        name: 'Lyodd$1 ',
        username: 'Naomi Po',
        floorPrice: '1.156 ',
        totalSales: '1670',
        percentage: '+12.45',
        type: 'art',

    },
    {
        id: 21,
        profileImage: require('../../assets/images/profileImage5.png'),
        name: 'Azuki 3D  ',
        username: 'AZUKI.JP',
        floorPrice: '1.5 ',
        totalSales: '1907',
        percentage: '+1.6',
        type: 'art',

    },
    {
        id: 22,
        profileImage: require('../../assets/images/profileImage6.png'),
        name: 'CuteApe White  ',
        username: 'CuteApe_99',
        floorPrice: '0.045 ',
        totalSales: '245.6',
        percentage: '-14.5',
        type: 'art',

    },
    {
        id: 23,
        profileImage: require('../../assets/images/profileImage7.png'),
        name: 'SneakerHead Vol.1 ',
        username: 'SneakerHead.Corp',
        floorPrice: '1.4 ',
        totalSales: '1790',
        percentage: '+67.9',
        type: 'art',
    },
    {
        id: 24,
        profileImage: require('../../assets/images/profileImage6.png'),
        name: 'CuteApe White  ',
        username: 'CuteApe_99',
        floorPrice: '0.045 ',
        totalSales: '245.6',
        percentage: '-14.5',
        type: 'art',

    },
    {
        id: 25,
        profileImage: require('../../assets/images/profileImage7.png'),
        name: 'SneakerHead Vol.1 ',
        username: 'SneakerHead.Corp',
        floorPrice: '1.4 ',
        totalSales: '1790',
        percentage: '+67.9',
        type: 'art',
    },
]
export default function TopCollections() {
    const [active, setActive] = React.useState(1);
    const artData = topCollectionsData.filter(item => item.type === 'art')
    const [renderData, setRenderData] = React.useState(artData?.slice(0, 8));
    const allButton = [
        {
            id: 1,
            title: "Art",
            value: "art",
        },
        {
            id: 2,
            title: "Collectibles",
            value: "collectibles",
        },
        {
            id: 3,
            title: 'Metaverse',
            value: "metaverse",
        },
        {
            id: 4,
            title: 'Virtual Worlds',
            value: "virtual worlds",
        },
        {
            id: 5,
            title: 'Sports',
            value: "sports",
        },
        {
            id: 6,
            title: 'Music',
            value: "music",
        }
    ]


    const handleButton = (id) => {
        setActive(id)
        if (id === 1) {
            // get all data if type === art
            const art = topCollectionsData.filter(item => item.type === 'art')
            setRenderData(art.slice(0, 8))
        }
        if (id === 2) {
            // get all data if type === collectibles
            const collectibles = topCollectionsData.filter(item => item.type === 'collectibles')
            setRenderData(collectibles.slice(0, 8))
        }
        if (id === 3) {
            // get all data if type === metaverse
            const metaverse = topCollectionsData.filter(item => item.type === 'metaverse')
            setRenderData(metaverse.slice(0, 8))
        }
        if (id === 4) {
            // get all data if type === virtual worlds
            const virtualWorlds = topCollectionsData.filter(item => item.type === 'virtual worlds')
            setRenderData(virtualWorlds.slice(0, 8))
        }
        if (id === 5) {
            // get all data if type === sports
            const sports = topCollectionsData.filter(item => item.type === 'sports')
            setRenderData(sports.slice(0, 8))
        }
        if (id === 6) {
            // get all data if type === music
            const music = topCollectionsData.filter(item => item.type === 'music')
            setRenderData(music.slice(0, 8))
        }
    }
    const Card = ({ item }) => {
        return (
            <Stack

                //mx={4}
                sx={{
                    background: 'linear-gradient(155.14deg, rgba(0, 0, 0, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                    filter: 'drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12))',
                    backdropFilter: 'blur(7.5px)',
                    //border: "1.5px solid #0007481F ",
                    border: "1.5px solid #69EACB ",
                    borderRadius: '20px',
                    // maxWidth: 400,
                }}
            >
                <Stack
                    p={2}
                    spacing={2}
                >
                    <Box
                        component={'img'}
                        src={item.profileImage}
                        alt={item.name}
                        sx={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '15px',
                            height: 'auto',
                            width: '270px',
                        }}

                    />
                    <Stack
                        spacing={1}
                    >
                        <CTypography
                            fontSize={20}
                            fontWeight={400}
                            fontFamily={'Poppins'}
                        >
                            {item.name}
                        </CTypography>
                        <CTypography
                            fontSize={12}
                            fontWeight={200}
                            fontFamily={'Poppins'}
                        >
                            {item.username}
                        </CTypography>
                    </Stack>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                    >
                        <Stack
                            spacing={1}
                        >
                            <CTypography
                                fontSize={18}
                                fontWeight={500}
                                fontFamily={'Poppins'}
                            >
                                {item.floorPrice} ETH
                            </CTypography>
                            <CTypography
                                fontSize={12}
                                fontWeight={400}
                                fontFamily={'Poppins'}
                            >
                                Floor Price
                            </CTypography>
                        </Stack>
                        <Stack
                            spacing={1}
                        >
                            <CTypography
                                fontSize={18}
                                fontWeight={500}
                                fontFamily={'Poppins'}
                            >
                                $ {item.totalSales}
                            </CTypography>
                            <CTypography
                                fontSize={12}
                                fontWeight={400}
                                fontFamily={'Poppins'}
                                align={'right'}
                                color={item.percentage.includes('+') ? '#24FF00' : '#FF0000'}

                            >
                                {item.percentage}%
                            </CTypography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        )
    }
    const RenderCards = () => {
        return (
            <Stack
                justifyContent={'center'}
                alignItems={'center'}
                py={6}
            >
                <Stack
                    justifyContent={'center'}
                    direction={'row'}
                    flexWrap={'wrap'}
                    gap={2}

                >
                    {
                        renderData.map((item) => (
                            <Card
                                key={item.id}
                                item={item}
                            />
                        ))
                    }
                </Stack>

            </Stack>
        )
    }
    const ButtonGroup = () => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 2,
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                {
                    allButton.map((item) => (
                        <CButton
                            align={'center'}
                            {
                            ...item.id !== active && {
                                backgroundColor: 'transparent',
                            }
                            }
                            //  backgroundColor={'transparent'}
                            // onClick={() => setActive(item.id)}
                            onClick={() => handleButton(item.id)}
                        >
                            {item.title}
                        </CButton>
                    ))
                }

            </Box>
        )
    }
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
                Top Collections
            </CTypography>
        )
    }
    return (
        <Stack>
            <RenderTitle />
            <ButtonGroup />
            <RenderCards />
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
                    onClick={() => console.log('clicked')}
                >
                    See More
                </CButton>
            </Box>
        </Stack >
    );
}
