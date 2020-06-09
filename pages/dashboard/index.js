import React, { useEffect } from "react";
import Loading from "../../components/Loading";
import Router from "next/router";

const index = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Router.push("/dashboard/applications");
    } else {
      Router.push("/");
    }
  });

  return <Loading />;
};

export default index;
