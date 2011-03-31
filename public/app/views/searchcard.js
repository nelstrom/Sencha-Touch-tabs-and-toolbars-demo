ToolbarDemo.views.Searchcard = Ext.extend(Ext.Panel, {
    title: "search",
    iconCls: "search",
    styleHtmlContent: true,
    html: "placeholder text"
});

Ext.reg('searchcard', ToolbarDemo.views.Searchcard);
