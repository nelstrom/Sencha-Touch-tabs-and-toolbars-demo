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
    initComponent: function() {
        Ext.apply(this, {
            items: [
                { xtype: 'homecard' },
                { xtype: 'searchcard' },
                { xtype: 'actioncard' },
                { xtype: 'settingscard' },
                { xtype: 'morecard' }
            ]
        });
        ToolbarDemo.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
