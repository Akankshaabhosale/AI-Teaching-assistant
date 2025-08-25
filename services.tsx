import React from "react";
import Layout from "../components/Layout";
import DrawerAppBar from "@/components/Navbar";

const Services = (props: { window?: () => Window }) => {
  return (
    <Layout window={props.window}>
      <DrawerAppBar window={props.window} />
      <h1>Our Services</h1>
      <p>This is the Services page.</p>
    </Layout>
  );
};

export default Services;
