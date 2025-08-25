import React from 'react';
import { Box, Typography } from '@mui/material';

const CenteredText: React.FC<{ text: string }> = ({ text }) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				color: 'white',
				textAlign: 'center',
			}}
		>
			<Typography variant="h2" fontWeight="700">
				{text}
			</Typography>
		</Box>
	);
};

export default CenteredText;
