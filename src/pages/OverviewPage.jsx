import { div } from "framer-motion/client";
import React from "react";
import Header from "../components/common/Header";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-y-auto relative z-10">
      <Header title="Overview" />
    </div>
  );
};

export default OverviewPage;
