ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
    title: "action",
    iconCls: "action",
    styleHtmlContent: true,
    html: "placeholder text",
    dockedItems: [{
        xtype: "toolbar",
        title: "Buttons",
        items: [
            {
                text: 'clear',
                handler: function() {
                    ToolbarDemo.views.homecard.tab.setBadge("");
                }
            },
            { xtype: 'spacer' },
            {
                text: 'ping',
                handler: function() {
                    var hometab = ToolbarDemo.views.homecard.tab,
                        badgenumber = parseInt(hometab.badgeText);

                    if (isNaN(badgenumber)) {
                        ToolbarDemo.views.homecard.tab.setBadge(1);
                    } else {
                        ToolbarDemo.views.homecard.tab.setBadge(badgenumber+1);
                    };
                }
            }
        ]
    }]
});
