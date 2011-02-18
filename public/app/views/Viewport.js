NestedListDemo.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'flip',
    initComponent: function() {
        //put instances of cards into NestedListDemo.views namespace
        Ext.apply(NestedListDemo.views, {
            artistsList: new NestedListDemo.views.Artists(),
            albumsList: new NestedListDemo.views.Albums(),
            tracksList: new NestedListDemo.views.Tracks(),
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                NestedListDemo.views.tracksList,
                NestedListDemo.views.albumsList,
                NestedListDemo.views.artistsList
            ]
        });
        NestedListDemo.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
