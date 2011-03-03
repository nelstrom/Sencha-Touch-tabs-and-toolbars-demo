ToolbarDemo.views.Homecard = Ext.extend(Ext.TabPanel, {
    title: "home",
    iconCls: "home",
    tabBar: {
        dock: 'top'
    },
    styleHtmlContent: true,
    items: [
        {title: 'one', html: 'one'},
        {title: 'two', html: 'two'}
    ]
});
