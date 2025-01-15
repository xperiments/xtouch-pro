import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <iframe
      className="iframe"
      src="/xtouch-pro/intro/index.html"
      width="100%"
      height="100%"
    ></iframe>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`XTouch Pro`}
      description="Discover XTouch Pro - an advanced 3D printer management interface for BambuLab and Klipper printers. Supports AMS, skip objects, and temperature profiles."
    >
      {/* Page Content */}
      <HomepageHeader />
      <a href="#features" id="features"></a>
      <main>
        <HomepageFeatures />
        <div>
          <div className="grid">
            <div className="mycard basic">
              <div className="title">
                <h2>FREE</h2>
                <h5>Forever</h5>
              </div>
              <div className="price">
                <h4>
                  <sup>$</sup>0
                </h4>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i> Control:{" "}
                    <strong title="">1 printer</strong>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i> Supported
                    Printers: BBL (Cloud/Local), Klipper
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i> AMS for
                    BBL: Standard Presets
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i> Preview
                    Images
                  </li>
                  <li>
                    <strong title="">---</strong>
                  </li>
                  <li>
                    <strong title="">---</strong>
                  </li>
                  <li>
                    <strong title="">---</strong>
                  </li>
                  <li>
                    <strong title="">---</strong>
                  </li>
                  <li>
                    <strong title="">---</strong>
                  </li>
                  <li>
                    <strong title="">---</strong>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i> Support:
                    Community
                  </li>
                </ul>
              </div>
            </div>
            <div className="mycard standard">
              <div className="title">
                <h2>PRO / BETA</h2>
                <h5>* Beta ends 28/01/2025</h5>
              </div>
              <div className="price">
                <h4>
                  <sup>$</sup>TBA
                </h4>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>Control:{" "}
                    <strong>Up to 30 printers</strong>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>Supported
                    Printers: BBL (Cloud/Local), Klipper
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>AMS for
                    BBL: <strong>Custom Material Presets</strong>
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>Preview
                    Images
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>File
                    Browser
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>Custom
                    Presets (Temp/Fan)
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>Object
                    Skipping
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>OTA
                    Updates
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>Chamber
                    Temperature (additional hardware)
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>RFID/NFC:{" "}
                    (additional hardware)
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true"></i>Support:{" "}
                    <strong>Priority Support</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
