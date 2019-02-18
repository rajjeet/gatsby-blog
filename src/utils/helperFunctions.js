const _ = require(`lodash`);

module.exports = {
    getTagSlug: function (tag) {
        return `/tags/${_.kebabCase(tag)}/`
    },
    getCategorySlug: function(category){
        return `/${_.kebabCase(category)}/`
    }
};

