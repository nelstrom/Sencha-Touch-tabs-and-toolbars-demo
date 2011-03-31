ToolbarDemo.views.topbar = new Ext.Toolbar({
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
                    badgenumber = parseInt(hometab.badgeText),
                    nextnumber = isNaN(badgenumber) ? 1 : badgenumber+1;
                hometab.setBadge(nextnumber);
            }
        }
    ]
});

ToolbarDemo.views.textButtonShapes = new Ext.Toolbar({
    dock: 'bottom',
    items: [
        { text: 'back',     ui: 'back' },
        { text: 'normal',   ui: 'normal' },
        { text: 'small',    ui: 'small' },
        { text: 'round',    ui: 'round' },
        { text: 'forward',  ui: 'forward' },
    ]
});

ToolbarDemo.views.textButtonColors = new Ext.Toolbar({
    dock: 'bottom',
    items: [
        { text: 'normal' },
        { text: 'action',   ui: 'action' },
        { text: 'confirm',  ui: 'confirm' },
        { text: 'decline',  ui: 'decline' },
    ]
});

ToolbarDemo.views.mixedTextButtons = new Ext.Toolbar({
    dock: 'bottom',
    items: [
        { text: 'action',   ui: 'action-round' },
        { text: 'action',   ui: 'action-small' },
        { text: 'confirm',  ui: 'confirm-round' },
        { text: 'confirm',  ui: 'confirm-small' },
        { text: 'decline',  ui: 'decline-round' },
        { text: 'decline',  ui: 'decline-small' },
    ]
});

ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
    title: "action",
    iconCls: "action",
    styleHtmlContent: true,
    html: "placeholder text",
    dockedItems: [
        ToolbarDemo.views.topbar,
        ToolbarDemo.views.textButtonShapes,
        ToolbarDemo.views.textButtonColors,
        ToolbarDemo.views.mixedTextButtons,
    ]
});

Ext.reg('actioncard', ToolbarDemo.views.Actioncard);
