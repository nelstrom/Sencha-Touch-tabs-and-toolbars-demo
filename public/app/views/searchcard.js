ToolbarDemo.views.Searchcard = Ext.extend(Ext.Panel, {
    title: "search",
    iconCls: "search",
    styleHtmlContent: true,
    html: "placeholder text",
    dockedItems: [{
        xtype: "toolbar",
        title: "Search"
    }]
});

Ext.reg('searchcard', ToolbarDemo.views.Searchcard);
