import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { CTypography } from "../../utility";
import InputForm from "./InputForm";

export default function Footer() {
    const [email, setEmail] = React.useState('')
    const GetMoreUpdateSection = () => {
        return (
            <Stack
                spacing={3}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <CTypography
                    fontSize="48px"
                    fontWeight="600"
                    fontFamily="ClashDisplay"
                    sx={{
                        color: '#fff',
                    }}
                    align={'center'}
                >
                    Get More Updates
                </CTypography>
                <CTypography
                    fontSize="20px"
                    fontWeight="300"
                    fontFamily="Poppins"
                    sx={{
                        color: '#fff',
                    }}
                    align={'center'}
                >
                    Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
                </CTypography>
                <InputForm
                   
                />
                
            </Stack>
        )
    }
   
    return (
        <Stack >
            <GetMoreUpdateSection />
        </Stack>
    )
}
