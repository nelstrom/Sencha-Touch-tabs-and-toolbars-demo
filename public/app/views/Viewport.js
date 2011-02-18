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
					title: "action",
					iconCls: "action"
				},{
					title: "add",
					iconCls: "add"
				},{
					title: "arrow_down",
					iconCls: "arrow_down"
				},{
					title: "arrow_left",
					iconCls: "arrow_left"
				},{
					title: "arrow_right",
					iconCls: "arrow_right"
				},{
					title: "arrow_up",
					iconCls: "arrow_up"
				},{
					title: "compose",
					iconCls: "compose"
				},{
					title: "delete",
					iconCls: "delete"
				},{
					title: "organize",
					iconCls: "organize"
				},{
					title: "refresh",
					iconCls: "refresh"
				},{
					title: "reply",
					iconCls: "reply"
				},{
					title: "search",
					iconCls: "search"
				},{
					title: "settings",
					iconCls: "settings"
				},{
					title: "star",
					iconCls: "star"
				},{
					title: "trash",
					iconCls: "trash"
				},{
					title: "maps",
					iconCls: "maps"
				},{
					title: "locate",
					iconCls: "locate"
				},{
					title: "home",
					iconCls: "home"
				},{
					title: "bookmarks",
					iconCls: "bookmarks"
				},{
					title: "download",
					iconCls: "download"
				},{
					title: "favorites",
					iconCls: "favorites"
				},{
					title: "info",
					iconCls: "info"
				},{
					title: "more",
					iconCls: "more"
				},{
					title: "time",
					iconCls: "time"
				},{
					title: "user",
					iconCls: "user"
				},{
					title: "team",
					iconCls: "team"
				}
            ]
        });
        ToolbarDemo.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
