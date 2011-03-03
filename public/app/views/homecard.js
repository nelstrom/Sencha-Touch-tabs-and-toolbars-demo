ToolbarDemo.views.Homecard = Ext.extend(Ext.TabPanel, {
    title: "home",
    iconCls: "home",
    tabBar: {
        dock: 'top'
    },
    styleHtmlContent: true,
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Tabs and toolbars'
    }],
    items: [{
        title: 'one',
        html: 'one'
    },{
        title: 'two',
        html: 'two'
    }]
});
