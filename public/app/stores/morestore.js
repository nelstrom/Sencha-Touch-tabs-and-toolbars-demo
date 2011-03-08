// Note: This file must be loaded after the files: 
// bookmarkcard.js and aboutcard.js
ToolbarDemo.morestore = new Ext.data.TreeStore({
    model: 'ListItem',
    root: {
        items: [{
            text: 'About',
            card: ToolbarDemo.views.Aboutcard,
            leaf: true
        },
        {
            text: 'Bookmarks',
            card: ToolbarDemo.views.Bookmarkcard,
            leaf: true
        }],
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});
