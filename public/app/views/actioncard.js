topbar = new Ext.Toolbar({
    title: 'Top toolbar',
    dock: 'top',
    items: [
        {
            text: 'back',
            ui: 'back'
        },
        { xtype: 'spacer' },
        {
            text: 'edit',
            ui: 'action'
        }
    ]
});

options = new Ext.Toolbar({
    dock: 'top',
    items: [
        {
            xtype: 'segmentedbutton',
            items: [
                { text: 'one' },
                { text: 'one' },
                { text: 'one' },
            ]
        }
    ]
});


ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
    title: "action",
    iconCls: "action",
    dockedItems: [
        topbar,
        options,
        {
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'light',
        items: [
            {
                text: 'one',
                ui: 'back'
            },
            {xtype: 'spacer'},
            {
                iconMask: true,
                iconCls: 'home',
                ui: 'plain'
            },
            {
                iconMask: true,
                iconCls: 'search',
                ui: 'plain'
            },
            {
                iconMask: true,
                iconCls: 'settings',
                ui: 'plain'
            },
            {xtype: 'spacer'},
            {
                text: 'three',
                ui: 'action'
            },
        ]
    }],
});
