ToolbarDemo.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
    tabBar: {
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
    },
    items: [
        { xtype: 'homecard' },
        { xtype: 'searchcard' },
        { xtype: 'actioncard' },
        { xtype: 'settingscard' },
        { xtype: 'morecard' }
    ]
});
