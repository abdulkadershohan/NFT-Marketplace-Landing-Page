import { Stack, TextField } from "@mui/material";
import React from "react";
import { CTypography } from "../../utility";

export default function InputForm() {
    const [email, setEmail] = React.useState("");
    // input button 
    const InputButton = () => {
        return (
            <Stack
                py={1}
                component="button"
                sx={{
                    border: 'none',
                    backgroundColor: 'transparent',
                }}
            >
                <Stack
                    sx={{
                        width: 150,
                        height: 50,
                        backgroundColor: '#2F80ED',
                        borderRadius: '101.511px',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        '&:hover': {
                            opacity: 0.8,
                        }
                    }}

                >
                    <CTypography
                        fontSize="18px"
                        fontWeight="600"
                        fontFamily="Poppins"
                        align={'center'}
                        color={'#fff'}
                    >
                        I’m In
                    </CTypography>
                </Stack>
            </Stack>
        )
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <Stack py={2}
            component="form"
            onSubmit={submitHandler}
        >
            <TextField
                placeholder='Your Email...'
                size="small"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                    width: {
                        xs: '100%',
                        md: 700
                    },
                    '& .MuiInputBase-input': {
                        fontSize: '18px',
                        fontWeight: '300',
                        fontFamily: 'Poppins',
                        color: '#828282',
                        pl: 6,
                    },
                    '& .MuiInputBase-root': {
                        backgroundColor: '#D9D9D9',
                        filter: 'backdrop-filter: blur(5.83659px);',
                        borderRadius: '116.732px',
                    },

                }}
                InputProps={{ endAdornment: <InputButton /> }}
            />
        </Stack >
    );
}
