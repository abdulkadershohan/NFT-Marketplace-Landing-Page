import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Binance_Logo from "../../assets/images/Binance_Logo.png";
import exodos from "../../assets/images/exodos.png";
import MetaMask from "../../assets/images/MetaMask.png";
import TrustWallet from "../../assets/images/trustWallet.png";
import WalletConnect from "../../assets/images/WalletConnect.png";
import CTypography from "../../utility/CTypography";

export default function WalletSupport() {
    const logoData = [
        {
            id: 1,
            logo: MetaMask,
            name: "MetaMask"
        },
        {
            id: 2,
            logo: TrustWallet,
            name: "Trust Wallet"

        },
        {
            id: 3,
            logo: WalletConnect,
            name: "Wallet Connect"
        },
        {
            id: 4,
            logo: exodos,
            name: "Exodos"
        },
        {
            id: 5,
            logo: Binance_Logo,
            name: "Binance"
        }


    ]


    return (
        <Stack
            spacing={4}
            py={2}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                flexWrap="wrap"
            >
                {
                    logoData.map((item) => (
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            key={item.id}
                            spacing={2}
                            width={1 / 4}
                            sx={{
                                width: {
                                    lg: 1 / 4,
                                    md: 1 / 3,
                                    sm: 1 / 3,
                                    xs: 1
                                }
                            }}
                            py={2}

                        >
                            <Box
                                component="img"
                                src={item.logo}
                                alt={item.name}
                                sx={{
                                    height: "60px",
                                    width: "60px",
                                }}
                            />
                            <CTypography
                                fontFamily="ClashDisplay"
                                fontSize="30px"
                                fontWeight="500"
                                color={"#fff"}
                            >
                                {item.name}
                            </CTypography>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
}
