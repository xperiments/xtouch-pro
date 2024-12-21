---
sidebar_position: 1000
---

# Troubleshooting

## SD Card Issues

1. **SD Card Formatting**

:::danger[MUST DO]
Ensure that the SD card is properly formatted before use. Use the FAT32 file system for compatibility.
:::

2. **SD Card Size Limitations**
   - The Xtouch supports SD cards with a maximum capacity of 32GB. Cards larger than this may not function correctly.

## Wi-Fi Connection Issues

1. **Supported Wi-Fi Standards**

   :::warning[]
   Ensure you have connected the antenna you received with the board.
   :::

   - The Xtouch only supports 2.4 GHz Wi-Fi networks. Ensure your router is broadcasting a 2.4 GHz signal.

2. **SSID Configuration**
   - Do not use hidden SSIDs, as they are not supported.
   - Avoid special characters in the SSID or password. The internal keyboard does not support special characters, which may prevent you from entering the Wi-Fi credentials correctly.

## Driver issues

1. **Driver Installation**

   - Download and install the necessary drivers for Xtouch from the official website or provided resources.
   - Ensure the drivers are compatible with your operating system (Windows, macOS, Linux).
   - Restart your computer after installation if prompted.

2. **Install Drivers**
   If your computer does not recognize the Xtouch screen, you may need to install the required CH340 drivers:

   - [Download CH340 Drivers](https://www.wch.cn/download/CH341SER_ZIP.html)
   - [CH340 Drivers Installation Tutorial](https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all)
   - Download and install the necessary drivers for Xtouch from the official website or provided resources.
   - Ensure the drivers are compatible with your operating system (Windows, macOS, Linux).
   - Restart your computer after installation if prompted.

## Chrome connection issues

**USB Connection Issues**

- Use the correct USB cable for your board:
  - USB-C to USB-A is preferred for most boards.
  - USB-C to USB-C may work on some versions.
- Check that your USB cable is data-capable, as some cables only support charging.

## Power Supply Requirements

:::warning[]
The Xtouch screen requires a minimum of 1.5A current to function correctly. If the screen does not power on or behaves erratically, verify that the power source meets this requirement.
:::
