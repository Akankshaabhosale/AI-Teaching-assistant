import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Layout from "../components/Layout";
import SQL from "../images/abstract-technology-sql-illustration_23-2149238125.jpg";
import Image from "next/image";
import ChatBotBtn from "@/components/ChatBotBtn";

const SqlAssistant = (props: { window?: () => Window }) => {
  return (
    <Layout window={props.window}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          textAlign: "left",
          padding: "20px 0px",
          gap: "20px",
          fontFamily: "monospace",
        }}
      >
        <Image
          height={500}
          width={500}
          src={SQL}
          alt="Descriptive Alt Text"
          style={{ borderRadius: "8px" }}
        />
        <Box>
          <Typography
            sx={{ fontFamily:"Segoe UI Semibold",fontSize:"30px" }}
            variant="h5"
            gutterBottom
          >
            SQL Assistant
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "grey",
              marginBottom: "30px",
              fontFamily: "Microsoft New Tai Lue",
            }}
          >
            The SQL Assistant is a smart, interactive tool designed to simplify the learning and application of 
            Structured Query Language (SQL). Whether you're just starting out or brushing up on database skills,
             this assistant helps you write, understand, and execute SQL queries with clarity and confidence.
          </Typography>
          <Typography variant="h6"  fontFamily={"Microsoft New Tai Lue"} gutterBottom>
          🌟 What Makes It Unique?
          </Typography>
          <List sx={{ fontFamily: "Microsoft New Tai Lue" }}>
            <ListItem>
              <ListItemText primary="Connects with Your Data :
Work with your own database or explore a built-in sample database—the assistant generates meaningful queries tailored to your schema, making learning hands-on and relevant." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Query Generation On Demand :
Simply describe what you need, and the assistant provides optimized SQL queries, whether you're filtering rows, joining tables, or creating views." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Instant Explanations :
Every query comes with a clear explanation—so you're not just copying code, you're understanding the logic behind it." />
            </ListItem>
           {/* <ListItem>
              <ListItemText primary="Debugging & Error Handling – Highlights syntax errors and suggests fixes." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Execution Insights – Displays query execution plans and performance metrics." />
            </ListItem> */}
          </List>
          <Typography
            variant="body1"
            sx={{ color: "grey", marginTop: "20px", fontFamily: "Microsoft New Tai Lue" }}
          >
            The SQL Assistant brings theory to life by letting you learn directly through your data. 
            With real-time query generation and detailed explanations, it transforms passive SQL 
            study into active skill-building.
          </Typography>
          <Box sx={{ 
              display: "flex",
              justifyContent: "center", 
            marginTop: "10px", 
            marginRight: "260px" }}>
          <ChatBotBtn chatbotUrl="http://localhost:8502" />
            {/*<ChatBotBtn window={props.window} />*/}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default SqlAssistant;
