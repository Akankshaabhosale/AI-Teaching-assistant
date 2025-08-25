import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
	const [bgColor, setBgColor] = useState('white');

	useEffect(() => {
		if (darkMode) {
			setBgColor('#292929');
		} else {
			setBgColor('#000');
		}
	}, [darkMode]);

	return (
		<Box  sx={{ backgroundColor: bgColor, padding: '22px 11px' /* Further reduced padding */ }}>
			<Grid container spacing={2.4 /* Further reduced spacing */}>
				<Grid item xs={12} md={4}>
					{/* <Typography color={darkMode ? "rgb(176, 176, 176)" : "white"} variant="subtitle2"  gutterBottom>
						Company Address
					</Typography>
					<Typography color={darkMode ? "rgb(176, 176, 176)" : "white"} variant="body2" >
						1234 Street Name<br />
						City, State, 12345<br />
						Country
					</Typography> */}
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography color={darkMode ? "rgb(176, 176, 176)" : "white"} variant="subtitle2" /* Further reduced font size */ gutterBottom>
						Follow Us
					</Typography>
					<Box sx={{ display: 'flex', gap: '6px' /* Further reduced gap */ }}>
						<Facebook fontSize="small" /* Same icon size */ />
						<Twitter fontSize="small" />
						<Instagram fontSize="small" />
						<LinkedIn fontSize="small" />
					</Box>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography variant="subtitle2" color={darkMode ? "rgb(176, 176, 176)" : "white"} gutterBottom>
						Contact Us
					</Typography>
					<Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '6px' /* Further reduced gap */ }}>
						<TextField 
							label="Email" 
							variant="outlined" 
							fullWidth 
							sx={{ 
								'& .MuiInputLabel-root': {
									fontSize: '0.6rem' ,
									color: 'white',
								},
								'& .MuiOutlinedInput-root': {
									fontSize: '0.6rem',
									'& fieldset': {
										borderColor: 'white',
									},
									'&:hover fieldset': {
										borderColor: 'white',
									},
									'&.Mui-focused fieldset': {
										borderColor: 'white',
									},
								},
							}} 
						/>
						<TextField 
							label="Message" 
							variant="outlined" 
							fullWidth 
							multiline 
							rows={2 /* Further reduced rows */} 
							sx={{ 
								'& .MuiInputLabel-root': {
									fontSize: '0.6rem' /* Further reduced font size */,
									color: 'white',
								},
								'& .MuiOutlinedInput-root': {
									fontSize: '0.6rem' /* Further reduced font size */,
									'& fieldset': {
										borderColor: 'white',
									},
									'&:hover fieldset': {
										borderColor: 'white',
									},
									'&.Mui-focused fieldset': {
										borderColor: 'white',
									},
								},
								color: 'grey'
							}} 
						/>
						<Button 
							variant="contained" 
							sx={{ 
								backgroundColor: darkMode ? "rgb(176, 176, 176)" : "white", 
								color: 'black', 
								fontSize: '0.56rem' /* Further reduced font size */, 
								padding: '3px 8px' /* Further reduced padding */,
								'&:hover': {
									backgroundColor: 'rgba(255, 255, 255, 0.8)',
								},
							}}
						>
							Send
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
