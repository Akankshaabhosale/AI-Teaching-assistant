import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Quilty from '../images/Logos/customer-service.png';
import Expert from '../images/Logos/high-quality.png';
import Support from '../images/Logos/medal-.png';
const WhyChooseUs: React.FC = () => {
    const data = [
        {
            image: Quilty,
            heading: 'Quality Service',
            paragraph: 'We provide top-notch services to our clients.',
        },
        {
            image: Expert,
            heading: 'Expert Team',
            paragraph: 'Our team consists of experienced professionals.',
        },
        {
            image: Support,
            heading: 'Customer Support',
            paragraph: 'We offer 24/7 customer support to assist you.',
        },
    ];
	return (
		<Box sx={{ textAlign: 'center', padding: '40px 20px', fontFamily: 'Roboto, sans-serif' }}>
			<Typography padding={"0px 0px 30px 0px"} fontWeight={"bold"} variant="h4" gutterBottom>
				Why Choose Our Platform
			</Typography>
			<Grid container spacing={4} justifyContent="center">
				{data.map((item, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								padding: '50px 10px',
								border: '1px solid #ddd',
								borderRadius: '8px',
								backgroundColor: '#000',
								color: '#fff',
								transition: 'transform 0.3s ease',
								'&:hover': {
									transform: 'translateY(-5px)',
                                    cursor:"pointer "
								},
							}}
						>
							<Box sx={{backgroundColor:"rgb(255 255 255 / 64%);",backdropFilter:"blur(10px)",borderRadius:"100%",height:"90px",width:"90px",display:"flex",justifyContent:"center",alignItems:"center" }} >
                            <Image src={item.image} alt={item.heading} width={60} height={60}  />
                            </Box>
							<Box
								sx={{
									width: '100%',
									padding: '10px',
									backgroundColor: 'rgba(0, 0, 0, 0.29)',
									backdropFilter: 'blur(10px)',
									borderRadius: '8px',
									color: '#fff',
								}}
							>
								<Typography variant="h6" gutterBottom>
									{item.heading}
								</Typography>
								<Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>{item.paragraph}</Typography>
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default WhyChooseUs;
