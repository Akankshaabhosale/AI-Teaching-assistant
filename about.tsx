import React from "react";
import Layout from "../components/Layout";
import DrawerAppBar from "@/components/Navbar";

const About = (props: { window?: () => Window }) => {
  return (
    <Layout window={props.window}>
    <DrawerAppBar window={props.window} />
      <h1>About Us</h1>
   
    </Layout>
  );
};

export default About;
