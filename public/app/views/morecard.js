ToolbarDemo.views.Morecard = Ext.extend(Ext.NestedList, {
    title: "More",
    iconCls: "more",
    store: ToolbarDemo.morestore,
    cardSwitchAnimation: 'slide',
    getDetailCard: function(item, parent) {
        var itemData = item.attributes.record.data;
        return new itemData.card;
    }
});
