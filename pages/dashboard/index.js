import React, { useEffect } from "react";
import Loading from "../../components/Loading";
import Router from "next/router";
import axios from "axios";
import { ISCOMPANY } from "../../config";

const index = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      (async () => {
        const res = await axios.post(ISCOMPANY, { token });
        if (res.data.MESSAGE) {
          Router.push("/dashboard/applications");
        } else {
          Router.push("/CompanyIntro");
        }
      })();
    } else {
      Router.push("/CompanyIntro");
    }
  });

  return <Loading />;
};

export default index;
