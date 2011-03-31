ToolbarDemo.morestore = new Ext.data.TreeStore({
    model: 'ListItem',
    root: {
        items: [{
            text: 'About',
            card: {xtype: 'aboutcard'},
            leaf: true
        },
        {
            text: 'Bookmarks',
            card: {xtype: 'bookmarkcard'},
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
