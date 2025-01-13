document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    // Enable dark mode
    document.documentElement.classList.add("cc--darkmode");

    CookieConsent.run({
      autoShow: true,
      disablePageInteraction: true,
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
          },
        },
      },
    });
    CookieConsent.show(true);
  }, 2000);
});
