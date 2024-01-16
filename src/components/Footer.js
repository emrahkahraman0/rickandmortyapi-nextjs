import Image from "next/image";
import FooterLogo from "/public/footerLogo.svg";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer_left">
              <Image className="img_fluid" src={FooterLogo} alt="Team Image" />
            </div>
            {/*footer_left*/}
            <div className="footer_right">
              © 2021 Hero-Tech All rights reserved.
            </div>
            {/*footer_right*/}
          </div>
          {/*footer*/}
        </div>
        {/*container*/}
      </div>
      {/*footer#*/}
    </>
  );
}

export default Footer;
