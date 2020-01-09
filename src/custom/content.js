var fs = require('fs');

/**
 * This file exports the content of your website, as a bunch of concatenated
 * Markdown files. By doing this explicitly, you can control the order
 * of content without any level of abstraction.
 *
 * Using the brfs module, fs.readFileSync calls in this file are translated
 * into strings of those files' content before the file is delivered to a
 * browser: the content is read ahead-of-time and included in bundle.js.
 */

module.exports =
'# Fangsousou API\n' +
fs.readFileSync('./content/introduction.md', 'utf8') + '\n' +
'# User System API\n' +
fs.readFileSync('./content/user.md', 'utf8') + '\n' +
'# House API\n' +
fs.readFileSync('./content/listing.md','utf8')+'\n'  +
'# Search API\n'+
fs.readFileSync('./content/search.md','utf8')+ '\n'+
'# Contact API\n'+
fs.readFileSync('./content/contact.md','utf8')+'\n' +
'# News API\n'+
fs.readFileSync('./content/news.md','utf8')+'\n' +
'# Ads API\n'+
fs.readFileSync('./content/ads.md','utf8')+'\n' +
'# Report API\n'+
fs.readFileSync('./content/report.md','utf8')+'\n' 
