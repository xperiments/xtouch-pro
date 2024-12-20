import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

require("dotenv").config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "xtouch",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://xperiments.in/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/xtouch-pro/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "xperiments", // Usually your GitHub org/user name.
  projectName: "xtouch-pro", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  trailingSlash: false, // Optional: Remove trailing slashes
  scripts: [
    {
      src: "js/cookie.js",
      async: false,
    },
    {
      src: "js/cookie-consent.js",
      async: false,
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    // Replace with your project's social card
    image: "img/xtouch-social-card.png",
    navbar: {
      style: "dark",
      title: "",
      logo: {
        alt: "xtouch",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "installSidebar",
          position: "left",
          label: "Installation",
        },
        {
          href: "/xtouch-pro/docs/hardware/required",
          label: "Where to buy",
          position: "left",
        },
        {
          href: "https://github.com/xperiments-in/xtouch",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",

      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/Jdvp5CShnt",
            },
            {
              label: "X",
              href: "https://x.com/xps3riments",
            },
            {
              label: "GitHub",
              href: "https://github.com/xperiments-in/xtouch",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pedro Casaubon.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    customFields: {
      privateKey: process.env.PRIVATE_KEY, // Access the key from the environment
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
