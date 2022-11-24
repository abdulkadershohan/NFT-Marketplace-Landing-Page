import { Stack } from "@mui/system";
import React from "react";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

export default function Header() {
    return (
        <Stack>
            <Navbar />
            <Hero />
        </Stack>
    );
}
