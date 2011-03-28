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
        {
            title: "Home",
            iconCls: "home",
            badgeText: "1"
        },
        {
            title: "Search",
            iconCls: "search"
        },
        {
            title: "Action",
            iconCls: "action"
        },
        {
            title: "Settings",
            iconCls: "settings"
        },
        {
            title: "More",
            iconCls: "more"
        },
    ],
    initComponent: function() {
        ToolbarDemo.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
