ToolbarDemo.views.Settingscard = Ext.extend(Ext.form.FormPanel, {
    title: "settings",
    iconCls: "settings",
    scroll: "vertical",
    initComponent: function() {
        Ext.apply(this, {
            dockedItems: [{
                xtype: "toolbar",
                title: "Settings"
            }],
            items: [
                {
                xtype: 'fieldset',
                title: 'Details',
                items: [{
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Username'
                },{
                    xtype: 'passwordfield',
                    name : 'password',
                    label: 'Password'
                }],
            },{
                xtype:  'button',
                text:   'save',
                ui:     'confirm'
            }]
        });
        ToolbarDemo.views.Settingscard.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('settingscard', ToolbarDemo.views.Settingscard);
