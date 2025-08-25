import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Layout from "../components/Layout";
import DrawerAppBar from "@/components/Navbar";
import BigTextComponent from "@/components/BigTextComponent";
import VideoComponent from "@/components/VideoComponent";

const Home = (props: { window?: () => Window }) => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <Layout window={props.window}>
      <DrawerAppBar window={props.window} />
      <BigTextComponent />
      <Box overflow={"hidden"}>
        <VideoComponent />
      </Box>
     
    </Layout>
  );
};

export default Home;
