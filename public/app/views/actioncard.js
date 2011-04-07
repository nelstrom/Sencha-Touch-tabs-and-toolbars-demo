(function() {
    var topbar = {
        xtype: "toolbar",
        title: "Buttons",
        items: [
            {
                iconCls: 'delete',  iconMask: true, ui: "plain",
                handler: function() {
                    ToolbarDemo.views.homecard.tab.setBadge("");
                }
            },
            { xtype: 'spacer' },
            {
                iconCls: 'star',  iconMask: true, ui: "plain",
                handler: function() {
                    var hometab = ToolbarDemo.views.homecard.tab,
                        badgenumber = parseInt(hometab.badgeText),
                        nextnumber = isNaN(badgenumber) ? 1 : badgenumber+1;
                    hometab.setBadge(nextnumber);
                }
            }
        ]
    };

    var textButtonShapes = {
        xtype: "toolbar",
        dock: 'bottom',
        items: [
            { text: 'back',     ui: 'back' },
            { text: 'normal',   ui: 'normal' },
            { text: 'small',    ui: 'small' },
            { text: 'round',    ui: 'round' },
            { text: 'forward',  ui: 'forward' },
        ]
    };

    var textButtonColors = {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            { text: 'normal' },
            { text: 'action',   ui: 'action' },
            { text: 'confirm',  ui: 'confirm' },
            { text: 'decline',  ui: 'decline' },
        ]
    };

    var mixedTextButtons = {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            { text: 'action',   ui: 'action-round' },
            { text: 'action',   ui: 'action-small' },
            { text: 'confirm',  ui: 'confirm-round' },
            { text: 'confirm',  ui: 'confirm-small' },
            { text: 'decline',  ui: 'decline-round' },
            { text: 'decline',  ui: 'decline-small' },
        ]
    };

    var imageButtons = {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            { iconCls: 'star',  iconMask: true,  text: 'favorite' },
            { iconCls: 'star',  iconMask: true,  ui: 'action' },
            { iconCls: 'star',  iconMask: true,  ui: 'confirm' },
            { iconCls: 'star',  iconMask: true,  ui: 'decline' },
            { iconCls: 'star',  iconMask: true,  ui: 'plain' },
        ]
    };

    ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
        title: "action",
        iconCls: "action",
        styleHtmlContent: true,
        html: "placeholder text",

        initComponent: function() {
            Ext.apply(this, {
                dockedItems: [
                    topbar,
                    //textButtonShapes,
                    //textButtonColors,
                    //mixedTextButtons,
                    //imageButtons
                ]
            });

            ToolbarDemo.views.Actioncard.superclass.initComponent.apply(this, arguments);
        }
    });

    Ext.reg('actioncard', ToolbarDemo.views.Actioncard);
})();
