import ps4Logo from "@/assets/ps4-logo.png";
import ps5Logo from "@/assets/ps5-logo.png";
import xboxOneLogo from "@/assets/xbox-one-logo.png";
import xboxSeriesLogo from "@/assets/xbox-series-logo.png";
import nintendoSwitchLogo from "@/assets/nintendo-switch-logo.png";
import Image from "next/image";

const LogoTicker = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image src={ps4Logo} alt="PS4 Logo" className="logo-ticker-image" />
            <Image src={ps5Logo} alt="PS5 Logo" className="logo-ticker-image" />
            <Image
              src={xboxOneLogo}
              alt="XBOX ONE Logo"
              className="logo-ticker-image"
            />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
