ToolbarDemo.views.Searchcard = Ext.extend(Ext.form.FormPanel, {
    title: "search",
    iconCls: "search",
    items: [
        {
            xtype: 'searchfield',
            name : 'query',
            label: 'Find'
        }
    ]
});
