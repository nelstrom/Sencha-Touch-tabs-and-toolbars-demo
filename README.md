

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

After checking out this repository, run the following commands to get the snapshots:

    git co -b 01_create_bottom_tabs origin/01_create_bottom_tabs
    git co -b 02_make_each_card_a_view origin/02_make_each_card_a_view
    git co -b 03_make_each_card_specialize origin/03_make_each_card_specialize
    git co -b 04_add_a_toolbar_to_each_card origin/04_add_a_toolbar_to_each_card
    git co -b 05_add_buttons_to_top_toolbar origin/05_add_buttons_to_top_toolbar
    git co -b 06_create_text_buttons origin/06_create_text_buttons
    git co -b 07_create_icon_buttons origin/07_create_icon_buttons

## Deployment

This code is deployed to Heroku as a static site, served by Rack. All files under the 'public' directory are served as static files (using [Rack::Static][] middleware). The [Rack::Rewrite][] middleware ensures that the index.html file is served for the root path: '/'. This is configured in the [config.ru][] file.

[Rack::Static]: http://rack.rubyforge.org/doc/classes/Rack/Static.html
[Rack::Directory]: http://rack.rubyforge.org/doc/classes/Rack/Directory.html
[Rack::Rewrite]: http://johntrupiano.rubyforge.org/rack-rewrite/
[config.ru]: https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/blob/master/config.ru
