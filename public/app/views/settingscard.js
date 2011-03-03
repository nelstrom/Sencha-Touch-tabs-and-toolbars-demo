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
            label: 'Name'
        },
        {
            xtype: 'numberfield',
            name : 'age',
            label: 'Age'
        },
        {
            xtype: 'urlfield',
            name : 'url',
            label: 'Website'
        },
        {
            xtype: 'button',
            text: 'save'
        }
    ]
});
