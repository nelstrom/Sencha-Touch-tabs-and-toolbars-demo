ToolbarDemo.views.Searchcard = Ext.extend(Ext.Panel, {
    title: "search",
    iconCls: "search",
    styleHtmlContent: true,
    html: "placeholder text",
    initComponent: function() {
        Ext.apply(this, {
            dockedItems: [{
                xtype: "toolbar",
                title: "Search"
            }]
        });
        ToolbarDemo.views.Searchcard.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('searchcard', ToolbarDemo.views.Searchcard);
