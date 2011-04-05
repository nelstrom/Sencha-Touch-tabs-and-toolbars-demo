ToolbarDemo = new Ext.Application({
    name: "ToolbarDemo",

    launch: function() {
        this.views.viewport = new this.views.Viewport();
        this.views.homecard = this.views.viewport.getComponent('home');
    }
});
