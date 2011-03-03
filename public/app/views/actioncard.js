ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
    title: "action",
    iconCls: "action",
    dockedItems: [{
        xtype: 'toolbar',
        title: "Don't press the red button!"
    },{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'light',
        items: [
            {text: 'one'},
            {text: 'two'},
        ]
    }],
});
