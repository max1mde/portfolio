/**
 * Portfolio
 * Copyright (C) 2024 Maxim (https://github.com/max1mde/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

import config from "/CONFIG.json";
import Scroller from "@/components/custom/scroller";
import { motion } from "framer-motion";

export default function TechScroller() {
  const homeConfig = config.pages.home;

  return (
    <div className="w-full">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-2xl font-bold text-center mb-8"
      >
        Tools & Languages
      </motion.h2>

      <div className="grid place-content-center h-20">
        <Scroller
          items={homeConfig.languages}
          direction="left"
          speed="fast"
          className="max-w-xs"
          itemClasses="bg-primary"
        />
      </div>

      <div className="grid place-content-center h-20">
        <Scroller
          items={homeConfig.tools}
          direction="right"
          speed="fast"
          className="max-w-lg"
        />
      </div>
    </div>
  );
}
