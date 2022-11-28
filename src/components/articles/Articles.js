import { Box, Stack } from "@mui/material";
import React from "react";
import { CButton, CTypography } from "../../utility";
const articlesData = [
    {
        id: 1,
        title: `We've lowered marketplace fees on all your favorite NFTs`,
        date: 'January 23, 2022',
        coverImage: require('../../assets/images/article1.png')
    },
    {
        id: 2,
        title: `Your Ultimate Guide to Getting Started With NFTs on Rarible`,
        date: 'April 03, 2022',
        coverImage: require('../../assets/images/article2.png')

    },

    {
        id: 3,
        title: `Why Community Marketplaces are the future of NFT trading`,
        date: 'July 7, 2022',
        coverImage: require('../../assets/images/article3.png')

    },
    {
        id: 4,
        title: `We've lowered marketplace fees on all your favorite NFTs`,
        date: 'January 23, 2022',
        coverImage: require('../../assets/images/article1.png')
    },
    {
        id: 5,
        title: `Why Community Marketplaces are the future of NFT trading`,
        date: 'July 7, 2022',
        coverImage: require('../../assets/images/article3.png')

    }

]
export default function Articles() {
    const [articles, setArticles] = React.useState(articlesData.slice(0, 3))
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
                Articles
            </CTypography>
        )
    }
    const RenderCard = () => {
        return (
            <Stack
                direction={'row'}
                gap={2}
                flexWrap={'wrap'}
            >
                {
                    articles.map((item) => {
                        const { title, date, coverImage } = item
                        return (
                            <Stack
                                sx={{
                                    background: 'linear-gradient(155.14deg, rgba(255, 255, 255, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%)',
                                    borderRadius: '20px',
                                    filter: 'drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12))',
                                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                                    pb: 4,
                                    width: {
                                        xs: '100%',
                                        md: '32%'
                                    },

                                }}
                                spacing={2}

                            >
                                <Box
                                    component={'img'}
                                    src={coverImage}
                                    alt={title}
                                    sx={{
                                        borderRadius: ' 20px 20px 0px 0px',
                                    }}
                                />
                                <Stack
                                    px={3}
                                    spacing={1}
                                >
                                    <CTypography
                                        fontSize="22px"
                                        fontWeight="500"
                                        fontFamily="Poppins"
                                    >
                                        {title}
                                    </CTypography>
                                    <CTypography
                                        fontSize="12px"
                                        fontWeight="400"
                                        fontFamily="Poppins"
                                    >
                                        {date}
                                    </CTypography>
                                </Stack>

                            </Stack>
                        )
                    })
                }

            </Stack>
        )
    }
    const handleButtonClick = () => {
        setArticles(articlesData)
    }
    return (
        <Stack
            sx={{
                px: {
                    xs: 2,
                    sm: 10
                },
                py: {
                    lg: 20,
                    md: 10,
                    xs: 5,
                }
            }}
            spacing={5}
        >
            <RenderTitle />
            <RenderCard />
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
                    onClick={handleButtonClick}
                >
                    See More
                </CButton>
            </Box>
            {/* <Stack
                sx={{
                    background: 'linear-gradient(105.42deg, rgba(255, 255, 255, 0.11) -3.07%, rgba(255, 255, 255, 0.11) 49.04%, rgba(255, 255, 255, 0) 97.84%);',
                    borderRadius: '40px',
                    filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25))',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    py: 4,
                    pb: 8,

                }}

            >
            

            </Stack> */}
        </Stack >
    );
}
