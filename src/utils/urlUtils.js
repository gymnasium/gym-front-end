const slugify = require('slugify');

const getUrlFromTitle = title => {
  return slugify(title, {
    lower: true, // convert everything to lowercase
    remove: /[…?/*+~.,()'"!:@]/g, // regex containing a list of characters to remove
    replacement: '', // replace invalid characters with nothing
  });
};

module.exports = {
  getUrlFromTitle,
};
