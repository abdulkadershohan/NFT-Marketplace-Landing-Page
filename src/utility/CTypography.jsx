import { Stack, Typography } from "@mui/material";
import * as React from "react";
export default function CTypography({
    children,
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    text,
    color,
    ...rest
}) {
    return (
        <Stack spacing={1}>
            <Typography
                align={align}
                gutterBottom={gutterBottom}
                noWrap={noWrap}
                paragraph={paragraph}
                fontWeight={400}
                text={text}
                color={color ? color : "#fff"}
                {...rest}
            >
                {text}{children}
            </Typography>
        </Stack>
    );
}
