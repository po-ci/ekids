var sm = require('sitemap')
fs = require('fs');

var options = {
    hostname: 'https://inglesparachicos.com',
    cacheTime: 600000,
    urls: [
        { url: '/' },
        { url: '/abc' },
        { url: '/numbers' },
        { url: '/colors' },
        { url: '/shapes' },
        { url: '/professions' },
        { url: '/clothes' },
        { url: '/house' },
        { url: '/fruits' },
        { url: '/family' },
        { url: '/weather' },
        { url: '/animals' }
    ]
}

// Creates a sitemap object given the input configuration with URLs
var sitemap = sm.createSitemap(options);

// Generates XML with a callback function
sitemap.toXML(function (err, xml) {
    if (!err) {
        console.log(xml)
    }
});


// Gives you a string containing the XML data
var xml = sitemap.toString();

fs.writeFileSync("dist/sitemap.xml", xml);