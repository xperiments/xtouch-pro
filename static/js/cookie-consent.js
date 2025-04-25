document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    // Enable dark mode

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
      },
      language: {
        default: "en",
        autoDetect: "browser",
        translations: {
          en: {
            consentModal: {
              // title: "Hello traveller, it's cookie time!",
              description:
                "By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
              footer:
                '<a href="/docs/privacy">Privacy Policy</a>\n<a href="/docs/terms">Terms and conditions</a>',
            },
            preferencesModal: {
              title: "Consent Preferences Center",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close modal",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  title: "Cookie Usage",
                  description:
                    "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Cookies allow us to remember your preferences, keep you signed in, and deliver targeted offers when applicable. By continuing to use our website, you consent to our use of cookies. You can manage or disable cookies through your browser settings, though this may impact your overall experience.",
                },
                {
                  title:
                    'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                  description:
                    "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Functionality Cookies",
                  description:
                    "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.",
                  linkedCategory: "functionality",
                },
              ],
            },
          },
        },
      },
      disablePageInteraction: true,
    });
    CookieConsent.show();
  }, 2000);
});
