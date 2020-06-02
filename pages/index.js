import React, { useEffect } from "react";
import Router from "next/router";
import LayoutUser from "../components/LayoutUser";

const Index = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/Intro");
    }
  }, []);

  return (
    <LayoutUser>
      <div>Index Page</div>
    </LayoutUser>
  );
};

export default Index;
