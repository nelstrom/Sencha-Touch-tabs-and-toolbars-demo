ToolbarDemo = new Ext.Application({
    name: "ToolbarDemo",

    launch: function() {
        this.views.homecard = new this.views.Homecard();
        this.views.searchcard = new this.views.Searchcard();
        this.views.actioncard = new this.views.Actioncard();
        this.views.settingscard = new this.views.Settingscard();
        this.views.morecard = new this.views.Morecard();
        this.views.viewport = new this.views.Viewport();
    }
});
