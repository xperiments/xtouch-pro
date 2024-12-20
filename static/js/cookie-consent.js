document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    // Enable dark mode
    document.documentElement.classList.add("cc--darkmode");

    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "cloud",
          position: "bottom left",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          readOnly: true,
        },
        functionality: {},
      },
      language: {
        default: "en",
        autoDetect: "browser",
        translations: {
          en: {
            consentModal: {
              title: "We value your privacy",
              description:
                "We use cookies to improve your experience, analyze traffic, and personalize content. Please accept all cookies to continue using the site.",
              acceptAllBtn: "Accept All Cookies",
              footer: "",
            },
            preferencesModal: {
              title: "Cookie Preferences",
              sections: [
                {
                  title: "Why we use cookies",
                  description:
                    "Cookies help us provide the best experience and ensure essential functions of the site work correctly.",
                },
                {
                  title:
                    'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                  description:
                    "These cookies are required for the website to function and cannot be disabled.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Functionality Cookies",
                  description:
                    "These cookies enable enhanced functionality and personalization.",
                  linkedCategory: "functionality",
                },
                {
                  title: "More Information",
                  description:
                    'If you have any questions, please <a class="cc__link" href="#contact-us">contact us</a>.',
                },
              ],
            },
          },
        },
      },
      disablePageInteraction: true,
    });
    CookieConsent.show(true);
  }, 2000);
});
