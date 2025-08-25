import React from "react";
import { Box } from "@mui/material";
import Layout from "../components/Layout";
import ImageParagraphComponent from "@/components/ImageParagraphComponent";
import ChatBotBtn from "../components/ChatBotBtn";

import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
});

const DsaAssistant = () => {
  return (
    <Layout>
      <Box className={`${inter.variable} ${poppins.variable}`} sx={{ padding: "20px" }}>
        <ImageParagraphComponent />

        <Box mt={4} 
        sx={{
          display: "flex",
          justifyContent: "center", // 👈 this centers the button
        }}>
          {/*&<ChatBotBtn chatbotUrl="http://localhost:8503" />*/}
        </Box>
      </Box>
    </Layout>
  );
};

export default DsaAssistant;
