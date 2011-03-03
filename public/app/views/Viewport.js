ToolbarDemo.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
    tabBar: {
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
    },
    dock: 'bottom',
    cardSwitchAnimation: {
        type: 'fade',
        duration: 0
    },
    initComponent: function() {
        Ext.apply(this, {
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
