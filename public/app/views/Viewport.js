ToolbarDemo.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
    tabBar: {
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
    },
    initComponent: function() {
        Ext.apply(this, {
            defaults: {
                html: 'placeholder text',
                styleHtmlContent: true
            },
            items: [
                ToolbarDemo.views.homecard,
                ToolbarDemo.views.searchcard,
                ToolbarDemo.views.actioncard,
                ToolbarDemo.views.settingscard,
                ToolbarDemo.views.morecard
            ]
        });
        ToolbarDemo.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
