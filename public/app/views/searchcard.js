ToolbarDemo.views.Searchcard = Ext.extend(Ext.form.FormPanel, {
    title: "search",
    iconCls: "search",
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Search'
    }],
    items: [{
        xtype: 'searchfield',
        name : 'query',
        label: 'Find'
    }]
});
