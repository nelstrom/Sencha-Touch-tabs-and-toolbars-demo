Ext.regModel('Item', { fields: ['name'] });

ToolbarDemo.morestore = new Ext.data.Store({
    model: 'Item',
    data: [
        { name: "Bookmarks" },
        { name: "About" }
    ]
});

ToolbarDemo.views.Morecard = Ext.extend(Ext.Panel, {
    title: "more",
    iconCls: "more",
    layout: 'fit',
    dockedItems: [{
        xtype: 'toolbar',
        title: "More"
    }],
    items: [
        {
            xtype: 'list',
            id: 'morelist',
            store: ToolbarDemo.morestore,
            itemTpl: '<div class="wrapper">{name}</div>',
            itemSelector: 'div.wrapper'
        }
    ]
});
