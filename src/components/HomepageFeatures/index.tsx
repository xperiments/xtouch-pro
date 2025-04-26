import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  Img?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Multi-Printer Support",
    Img: require("@site/static/img/xtouch-manage-1.png").default as string,
    description: (
      <>
        Control up to <strong>10 BambuLab Local</strong>, and{" "}
        <strong>10 Klipper printers</strong> at once, currently adding{" "}
        <strong>PRUSA</strong> support.
      </>
    ),
  },
  {
    title: "Printer Management",
    Img: require("@site/static/img/xtouch-manage-0.png").default as string,
    description: (
      <>Effortlessly manage your local 3D printers with ease and precision.</>
    ),
  },
  {
    title: "Advanced Material Management",
    Img: require("@site/static/img/xtouch-ams.png").default as string,
    description: (
      <>
        Supports BambuLab <strong>AMS</strong> for seamless material management.
        <strong>Creality CFS MMU</strong> support is in development.
      </>
    ),
  },
  {
    title: "Custom Material Support",
    Img: require("@site/static/img/xtouch-custom-material.png")
      .default as string,
    description: (
      <>
        Configure and <strong>manage custom materials</strong> for BBL printers
        using tools like <strong>BambuStudio</strong> and{" "}
        <strong>OrcaSlicer</strong>, empowering you with complete material
        flexibility.
      </>
    ),
  },
  {
    title: "Temp / Fan Profiles",
    Img: require("@site/static/img/xtouch-keypad.png").default as string,
    description: (
      <>
        <strong>Define and store</strong> custom temperature and fan{" "}
        <strong>profiles</strong> directly on the screen for quick access and
        consistent results across print jobs.
      </>
    ),
  },
  {
    title: "Skip Objects with Precision",
    Img: require("@site/static/img/xtouch-skip.png").default as string,
    description: (
      <>
        The <strong>Skip Objects</strong> feature lets you stop printing failed
        objects while completing the rest, saving time and filament. Supported
        on <strong>BambuLab and Klipper printers</strong>.
      </>
    ),
  },
];

function Feature({ title, Svg, Img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Img && <img src={Img} alt={title} className="feature-img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
