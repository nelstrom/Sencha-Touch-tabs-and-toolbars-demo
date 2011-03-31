ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
    title: "action",
    iconCls: "action",
    styleHtmlContent: true,
    html: "placeholder text",
    dockedItems: [{
        xtype: "toolbar",
        title: "Buttons"
    }]
});

Ext.reg('actioncard', ToolbarDemo.views.Actioncard);
