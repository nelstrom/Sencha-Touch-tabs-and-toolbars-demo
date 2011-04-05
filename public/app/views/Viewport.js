ToolbarDemo.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
    tabBar: {
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
    },
    defaults: {
        html: 'placeholder text',
        styleHtmlContent: true
    },
    items: [
        { xtype: 'homecard' },
        { xtype: 'searchcard' },
        { xtype: 'actioncard' },
        { xtype: 'settingscard' },
        { xtype: 'morecard' }
    ]
});
