ToolbarDemo.views.Settingscard = Ext.extend(Ext.form.FormPanel, {
    title: "settings",
    iconCls: "settings",
    scroll: "vertical",
    dockedItems: [
        {}
    ],
    items: [
        {
            xtype: 'textfield',
            name : 'name',
            label: 'Username'
        },
        {
            xtype: 'passwordfield',
            name : 'password',
            label: 'Password'
        },
        {
            xtype: 'button',
            text: 'save'
        }
    ]
});
