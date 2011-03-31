ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
    title: "action",
    iconCls: "action",
    styleHtmlContent: true,
    html: "placeholder text"
});

Ext.reg('actioncard', ToolbarDemo.views.Actioncard);
