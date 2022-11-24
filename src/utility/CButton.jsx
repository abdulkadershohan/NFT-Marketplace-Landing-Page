/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import * as React from "react";
export default function CButton({
	children,
	backgroundColor,
	btnTitle,
	...rest
}) {
	return (
		<Box
			sx={{
				// color: "#fff",
				// padding: '10px 55px',
				// border: "1px solid #fff",
				// fontFamily: "Poppins",
				// "&:hover": {
				// 	backgroundColor: "#C770DB1A",
				// 	opactiy: 0.8,
				// 	borderColor: "#C778DD",
				// 	cursor: "pointer",
				// },
				// fontWeight: "600",
				alignItems: 'center',
				color: '#fff',
				backgroundColor: backgroundColor || '#2F80ED',
				padding: '10px 55px',
				borderRadius: '60px',
				fontSize: '20px',
				fontFamily: 'Poppins',
				fontWeight: 400,
				cursor: 'pointer',
				...backgroundColor === 'transparent' && {
					border: '1.5px solid #fff',
				},
				"&:hover": {
					backgroundColor: backgroundColor || '#2F80f1',
				},
			}
			}
			{...rest}
		>
			{btnTitle} {children}
		</Box>
	);
}
