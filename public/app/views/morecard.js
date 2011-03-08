Ext.regModel('Item', { fields: ['name'] });

ToolbarDemo.morestore = new Ext.data.Store({
    model: 'Item',
    data: [
        { name: "Bookmarks" },
        { name: "About" }
    ]
});

ToolbarDemo.views.morelist = new Ext.List({
    id: 'morelist',
    store: ToolbarDemo.morestore,
    itemTpl: '{name}',
    listeners: {
        itemtap: function(view, number, el, obj) {
            console.log('tapped');
        },
        scope: this
    }
});

ToolbarDemo.views.bookmarkcard = new Ext.Panel({
    id: 'bookmarkcard',
    html: 'Your bookmarks here'
});

ToolbarDemo.views.aboutcard = new Ext.Panel({
    id: 'aboutcard',
    html: 'Made from coffee'
});

ToolbarDemo.views.Morecard = Ext.extend(Ext.Panel, {
    title: "more",
    iconCls: "more",
    layout: 'card',
    dockedItems: [{
        xtype: 'toolbar',
        title: "More"
    }],
    items: [
        ToolbarDemo.views.morelist,
        ToolbarDemo.views.bookmarkcard,
        ToolbarDemo.views.aboutcard,
    ],
});
