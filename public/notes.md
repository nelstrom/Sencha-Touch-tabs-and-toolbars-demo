There are hundereds of icons bundled with Sencha Touch (check `resources/themes/images/default/pictos`), but only the following are encoded into the stylesheet:

* action
* add
* arrow_down
* arrow_left
* arrow_right
* arrow_up
* compose
* delete
* organize
* refresh
* reply
* search
* settings
* star
* trash
* maps
* locate
* home
* bookmarks
* download
* favorites
* info
* more
* time
* user
* team

Each of these can be used with the `iconCls` setting, for example:

    items: [{
        title: 'Favorites',
        html: '<h1>Favorites Card</h1>',
        iconCls: 'favorites'
    }]

Setting badge text programmatically
===================================

This works:

    ToolbarDemo.views.viewport.getTabBar().items.items[1].setBadge("1")

But it's a bit of a train crash. There must be a better way.
