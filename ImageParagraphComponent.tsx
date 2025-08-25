import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Image from "next/image";
import DSA from "../images/big-data-analytics-flowchart_1284-32903.jpg";
import ChatBotBtn from "./ChatBotBtn";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // You can adjust weights as needed
  variable: '--font-poppins',
})
interface ImageParagraphProps {
  window?: () => Window;
}

const ImageParagraphComponent = (props: ImageParagraphProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        textAlign: "left",
        padding: "20px 0px",
        gap: "20px",
      }}
    >
      <Image
        height={500}
        width={500}
        src={DSA}
        alt="Descriptive Alt Text"
        style={{ borderRadius: "8px" }}
      />
      <Box>
        <Typography   sx={{ fontFamily:"Segoe UI Semibold",fontSize:"30px" }}
            variant="h5"
            gutterBottom>
          DSA Assistant
        </Typography>
        <Typography sx={{
              color: "dark grey",
              marginBottom: "30px",
              fontFamily: "Microsoft New Tai Lue",
            }}>
        The DSA Assistant is your AI-powered coding mentor, built to simplify complex Data Structures and Algorithms. From concept explanations to quiz generation and code insights, it provides support to help you learn effectively, code smarter, and prepare confidently for exams or interviews.
        </Typography>
        <Typography variant="h6" gutterBottom>
        ✅  Why Use the DSA Assistant?
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Understand, Don’t Memorize : 
 Gone are the days of blindly memorizing code.DSA Assistant  breaks down DSA concepts into simple, digestible explanations that focus on why things work, not just how." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Interactive Problem Solving :
Ask a question. Share a problem. The assistant responds with step-by-step guidance, helping you build logical thinking and solve problems like a pro." />
          </ListItem>
          <ListItem>
            <ListItemText primary=" Intelligent Quiz Generation :
Automatically generates customized quizzes based on your learning progress, helping you reinforce key DSA concepts and identify areas that need improvement." />
          </ListItem>
       {/* <ListItem>
            <ListItemText primary="Performance Analysis – Analyzes time and space complexity to improve code efficiency." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mock Interviews & Challenges – Offers coding contests and timed challenges to prepare for real-world scenarios." />
          </ListItem> */}
        </List>
        <Typography variant="body1" sx={{ color: "dark grey", marginTop: "20px", fontFamily: "Microsoft New Tai Lue" }}>
        No more waiting or endless searching—get immediate, clear explanations for complex DSA topics, so you can keep learning without interruptions.
        </Typography> 
        <Box sx={{ 
    display: "flex",
    justifyContent: "center", 
  marginTop: "10px", 
  marginRight: "260px" }}>
        <ChatBotBtn chatbotUrl="http://localhost:8501" />
         { /*<ChatBotBtn window={props.window} />*/}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageParagraphComponent;
