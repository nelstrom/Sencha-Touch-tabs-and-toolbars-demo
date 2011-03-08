ToolbarDemo.views.bookmarkcard = new Ext.Panel({
    id: 'bookmarkcard',
    html: 'Your bookmarks here'
});

ToolbarDemo.views.aboutcard = new Ext.Panel({
    id: 'aboutcard',
    html: 'Made from coffee'
});

Ext.regModel('Item', {
    fields: [
        {name: 'text', type: 'string'},
        {name: 'card'}
    ]
});

ToolbarDemo.morestore = new Ext.data.TreeStore({
    model: 'Item',
    root: {
        items: [{
            text: 'About',
            card: ToolbarDemo.views.aboutcard,
            leaf: true
        },
        {
            text: 'Bookmarks',
            card: ToolbarDemo.views.bookmarkcard,
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

ToolbarDemo.views.Morecard = Ext.extend(Ext.NestedList, {
    title: "more",
    iconCls: "more",
    store: ToolbarDemo.morestore,
    cardSwitchAnimation: 'slide',
    getDetailCard: function(item, parent) {
        var itemData = item.attributes.record.data;
        return itemData.card;
    }
});
