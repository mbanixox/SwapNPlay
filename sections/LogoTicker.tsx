"use client";

import ps4Logo from "@/assets/ps4-logo.png";
import ps5Logo from "@/assets/ps5-logo.png";
import xboxOneLogo from "@/assets/xbox-one-logo.png";
import xboxSeriesLogo from "@/assets/xbox-series-logo.png";
import nintendoSwitchLogo from "@/assets/nintendo-switch-logo.png";
import Image from "next/image";
import { motion } from "motion/react";

const LogoTicker = () => {
  return (
    <section className="section_container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-36 flex-none pr-36"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <Image
            src={xboxOneLogo}
            alt="XBOX ONE Logo"
            className="logo-ticker-image"
          />
          <Image src={ps4Logo} alt="PS4 Logo" className="logo-ticker-image" />
          <Image src={ps5Logo} alt="PS5 Logo" className="logo-ticker-image" />
          <Image
            src={xboxSeriesLogo}
            alt="XBOX Series Logo"
            className="logo-ticker-image"
          />
          <Image
            src={nintendoSwitchLogo}
            alt="Nintendo Switch Logo"
            className="logo-ticker-image"
          />

          {/* Duplicate the images to create a continuous effect */}
          <Image
            src={xboxOneLogo}
            alt="XBOX ONE Logo"
            className="logo-ticker-image"
          />
          <Image src={ps4Logo} alt="PS4 Logo" className="logo-ticker-image" />
          <Image src={ps5Logo} alt="PS5 Logo" className="logo-ticker-image" />
          <Image
            src={xboxSeriesLogo}
            alt="XBOX Series Logo"
            className="logo-ticker-image"
          />
          <Image
            src={nintendoSwitchLogo}
            alt="Nintendo Switch Logo"
            className="logo-ticker-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LogoTicker;
