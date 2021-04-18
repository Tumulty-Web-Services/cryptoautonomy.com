// index.js
const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

scrape({
    // Provide the URL(s) of the website(s) that you want to clone
    // In this example, you can clone the Our Code World website
    urls: [
        'https://cryptoautonomy.com/',	// Will be saved with default filename 'index.html'
        {url: 'https://cryptoautonomy.com/about-us', filename: 'about-us.html'},
        {url: 'https://cryptoautonomy.com/pricing', filename: 'pricing.html'},
        {url: 'https://cryptoautonomy.com/contact-us', filename: 'contact-us.html'},
      ],
    // Specify the path where the content should be saved
    // In this case, in the current directory inside the ourcodeworld dir
    directory: path.resolve(__dirname, 'src'),
    // Load the Puppeteer plugin
    plugins: [ 
        new PuppeteerPlugin({
            launchOptions: { 
                // If you set  this to true, the headless browser will show up on screen
                headless: true
            }, /* optional */
            scrollToBottom: {
                timeout: 10000, 
                viewportN: 10 
            } /* optional */
        })
    ]
});