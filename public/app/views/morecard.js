ToolbarDemo.views.Bookmarkcard = Ext.extend(Ext.Panel, {
    id: 'bookmarkcard',
    html: 'Your bookmarks here'
});

ToolbarDemo.views.Aboutcard = Ext.extend(Ext.Panel, {
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

ToolbarDemo.views.Morecard = Ext.extend(Ext.NestedList, {
    title: "more",
    iconCls: "more",
    store: ToolbarDemo.morestore,
    cardSwitchAnimation: 'slide',
    getDetailCard: function(item, parent) {
        var itemData = item.attributes.record.data;
        return new itemData.card;
    }
});
