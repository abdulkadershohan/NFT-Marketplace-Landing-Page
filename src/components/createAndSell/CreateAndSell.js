import { Stack } from "@mui/material";
import React from "react";
import BookmarkIcon from "../../assets/svg/Bookmark";
import PaperUploadIcon from "../../assets/svg/PaperUploadIcon";
import WalletIcon from "../../assets/svg/WalletIcon";
import { CTypography } from "../../utility";
const createAndSellData = [
    {
        id: 1,
        icon: <WalletIcon />,
        title: 'Set up your wallet',
        description: `Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.`
    },
    {
        id: 2,
        icon: <PaperUploadIcon />,
        title: 'Upload & Create Collection',
        description: `Upload your work then Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.`
    },
    {
        id: 3,
        icon: <BookmarkIcon />,
        title: 'List them for sale',
        description: `Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them.`
    },
]

export default function CreateAndSell() {
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
                Create and sell your NFTs
            </CTypography>
        )
    }
    const Card = () => {
        return (
            <Stack
                direction={'row'}
            >
                {
                    createAndSellData.map((item) => (
                        <Stack
                            key={item.id}
                            alignItems={'center'}
                            px={4}
                            spacing={3}
                        >
                            {item.icon}

                            <CTypography
                                fontSize="20px"
                                fontWeight="600"
                                fontFamily='Poppins'
                            >
                                {item.title}

                            </CTypography>
                            <CTypography
                                fontSize="17px"
                                fontWeight="200"
                                fontFamily="Poppins"
                                textAlign={'center'}
                                px={3}
                            >
                                {item.description}
                            </CTypography>

                        </Stack>
                    ))
                }

            </Stack>
        )
    }
    return (
        <Stack
            sx={{
                px: {
                    xs: 2,
                    sm: 10
                }
            }}
        >
            <Stack
                sx={{
                    background: 'linear-gradient(105.42deg, rgba(255, 255, 255, 0.11) -3.07%, rgba(255, 255, 255, 0.11) 49.04%, rgba(255, 255, 255, 0) 97.84%);',
                    borderRadius: '40px',
                    filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25))',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    py: 4,
                    pb: 8,

                }}

            >
                <RenderTitle />
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            lg: 'row'
                        },
                        gap: 4,
                    }}
                >
                    {
                        createAndSellData.map((item) => (
                            <Stack
                                key={item.id}
                                alignItems={'center'}
                                px={4}
                                spacing={3}
                            >
                                {item.icon}

                                <CTypography
                                    fontSize="20px"
                                    fontWeight="600"
                                    fontFamily='Poppins'
                                >
                                    {item.title}

                                </CTypography>
                                <CTypography
                                    fontSize="17px"
                                    fontWeight="200"
                                    fontFamily="Poppins"
                                    textAlign={'center'}
                                    px={3}
                                >
                                    {item.description}
                                </CTypography>

                            </Stack>
                        ))
                    }

                </Stack>

            </Stack>
        </Stack >
    );
}
