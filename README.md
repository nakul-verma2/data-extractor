# Data Extractor

## Overview

The Data Extractor project is a web application designed to collect and display various pieces of information about a user's device, network, and browser, and then send this information to a specified Telegram bot. The data includes device memory, IP address, network details, browser information, screen resolution, battery status, and location.

**Please note:** This project is intended for educational purposes only. It is designed to demonstrate web data collection techniques and integration with external APIs. Please ensure you have the necessary permissions and follow relevant privacy laws and guidelines when using or modifying this code.

## Features

- **Device Memory Info**: Displays the amount of device memory available.
- **IP Address**: Retrieves the user's public IP address.
- **Geolocation Details**: Provides location details based on IP address, including latitude, longitude, and maps link.
- **Network Information**: Shows details about the user's network connection.
- **Browser Info**: Collects browser-specific details.
- **Screen Info**: Displays screen resolution and color depth.
- **Battery Status**: Shows battery level and charging status.
- **Location Info**: Retrieves current geolocation if available.
- **Telegram Notification**: Sends collected information to a Telegram bot.

## Technologies Used

- **HTML/CSS**: For webpage structure and styling.
- **JavaScript**: For data collection and interaction with APIs.
- **APIs**: 
  - [ipify](https://www.ipify.org) for retrieving IP addresses.
  - [ipapi](https://ipapi.co) for detailed IP address information.
  - [Telegram Bot API](https://core.telegram.org/bots/api) for sending data to Telegram.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/data-extractor.git
   cd data-extractor
Set Up Your Telegram Bot:

Create a new bot using the BotFather on Telegram.
Obtain the API token for your bot.
Update JavaScript:

Replace the placeholder API key and chat ID in script.js with your actual Telegram bot API key and chat ID.
Usage
Open index.html in your web browser.
The page will automatically start collecting and displaying information.
The collected data will be sent to the specified Telegram chat via the bot.
Publishing
To publish your project, you can use GitHub Pages or deploy it to a web hosting service.

Using GitHub Pages
Push Your Code to GitHub:

bash
Copy code
git add .
git commit -m "Initial commit"
git push origin main
Enable GitHub Pages:

Go to your repository on GitHub.
Navigate to the Settings tab.
Scroll down to the GitHub Pages section.
Under Source, select the branch you want to publish (e.g., main).
Click Save.
Access Your Site:

Your site will be available at https://your-username.github.io/data-extractor/.
Using Other Hosting Services
Choose a Hosting Provider: Examples include Netlify, Vercel, or traditional web hosting services.
Deploy Your Site: Follow the specific instructions provided by the hosting service.
Contributing
Feel free to submit issues or pull requests if you have suggestions or improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or feedback, please reach out to your-email@example.com.
