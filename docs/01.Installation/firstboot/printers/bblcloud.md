---
sidebar_position: 1
---

# BambuLab Cloud Printers

For BambuLab Cloud printers, you can configure them in one of two ways:

1. **Using the Chrome Extension**: The Chrome Extension helps you log in to your BambuLab account and obtain the required verification code quickly. This method simplifies the process and is recommended for users who want an automated approach.

   :::info[Chrome Extension docs]
   [Chrome Extension docs](/docs/Installation/required/chrome-extension)
   :::

2. **Manual Configuration on the Xtouch Screen**: Alternatively, you can manually enter the following information directly on the Xtouch screen:

- Your email address
- Your UID
- The verification code that will be sent by BambuLab when you begin this process

  :::tip[Obtaining the UID]
  Navigate to the following URL, replacing `XXXXX` with your username:

  `https://makerworld.com/api/v1/search-service/suggest2?keyword=XXXXX`

  ```
  {
    "popular": [],
    "user": [
      {
        ...
        "uid": 1311658195, <--- Bambulab UID
        "name": "xperiments",
        ...
      }
    ]
  }
  ```

  :::

<div class="alert alert--success">
<h4>Helper</h4>
<form method="GET" action="https://makerworld.com/api/v1/search-service/suggest2" target="_blank">
  <label for="keyword">https://makerworld.com/api/v1/search-service/suggest?keyword=</label>
  <input type="text" id="keyword" name="keyword" placeholder="Enter username" required/>
  <button type="submit">GO</button>
</form>
</div>

## Final Steps After Configuration

Regardless of the method you choose, after entering the required details and completing the configuration, you will be redirected to a page. On this page, you can:

- Select the BambuLab Cloud printer you want to pair with your Xtouch screen.
- Finalize the pairing process to complete the setup.

Once paired, your BambuLab Cloud printer will be ready to manage and control via the Xtouch interface!
