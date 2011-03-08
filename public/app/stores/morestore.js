ToolbarDemo.views.Bookmarkcard = Ext.extend(Ext.Panel, {
    id: 'bookmarkcard',
    html: 'Your bookmarks here'
});

ToolbarDemo.views.Aboutcard = Ext.extend(Ext.Panel, {
    id: 'aboutcard',
    html: 'Made from coffee'
});

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
