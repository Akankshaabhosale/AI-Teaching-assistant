import React from "react";
import { Box } from "@mui/material";
import Layout from "../components/Layout";
import DrawerAppBar from "@/components/Navbar";
import BigTextComponent from "@/components/BigTextComponent";
import VideoComponent from "@/components/VideoComponent";

const Home = (props: { window?: () => Window }) => {
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
