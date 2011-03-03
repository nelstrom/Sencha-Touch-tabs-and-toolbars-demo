ToolbarDemo.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
    tabBar: {
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
    },
    dock: 'bottom',
    cardSwitchAnimation: 'flip',
    initComponent: function() {
        Ext.apply(this, {
            items: [
                {
                    title: "home",
                    iconCls: "home",
                    badgeText: "3"
                },{
                    title: "search",
                    iconCls: "search"
                },{
                    title: "action",
                    iconCls: "action"
                },{
                    title: "settings",
                    iconCls: "settings"
                },{
                    title: "more",
                    iconCls: "more"
                }
            ]
        });
        ToolbarDemo.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
