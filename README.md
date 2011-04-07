This Git repository includes all of the source code used in creating a tutorial about tabs and toolbars in Sencha Touch.

The tutorial includes several checkpoints:

* [Blank slate](https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/tree/00_blank_slate)
* [Create user interface using bottom-docked tab bar](https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/tree/01_create_bottom_tabs)
* [Break each card out into it's own file](https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/tree/02_make_each_card_a_view)
* [Specialize the behavior for individual cards](https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/tree/03_make_each_card_specialize)
* [Add a toolbar with title to each card](https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/tree/04_add_a_toolbar_to_each_card)
* [Add 'ping' and 'clear' buttons, which update badge text on home tab button](https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/tree/05_add_buttons_to_top_toolbar)
* [Demonstrate different styles of text buttons](https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/tree/06_create_text_buttons)
* [Demonstrate how to use an icon in a button](https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/tree/07_create_icon_buttons)
* [Tidy up](https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/tree/08_refactor_complex_types)

# Using this repository to follow the screencast

First, you'll have to clone this repository:

    git clone git://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo.git

Change into the directory:

    cd Sencha-Touch-tabs-and-toolbars-demo

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git co -b 00_blank_slate origin/00_blank_slate
    git co -b 01_create_bottom_tabs origin/01_create_bottom_tabs
    git co -b 02_make_each_card_a_view origin/02_make_each_card_a_view
    git co -b 03_make_each_card_specialize origin/03_make_each_card_specialize
    git co -b 04_add_a_toolbar_to_each_card origin/04_add_a_toolbar_to_each_card
    git co -b 05_add_buttons_to_top_toolbar origin/05_add_buttons_to_top_toolbar
    git co -b 06_create_text_buttons origin/06_create_text_buttons
    git co -b 07_create_icon_buttons origin/07_create_icon_buttons
    git co -b 08_refactor_complex_types origin/08_refactor_complex_types

## Live demo

You can try out the demo here:

* [http://sencha-tabs.heroku.com/][t]

## Deployment

This code is deployed to Heroku as a static site, served by Rack. All files under the 'public' directory are served as static files (using [Rack::Static][] middleware). The [Rack::Rewrite][] middleware ensures that the index.html file is served for the root path: '/'. This is configured in the [config.ru][] file.

[Rack::Static]: http://rack.rubyforge.org/doc/classes/Rack/Static.html
[Rack::Directory]: http://rack.rubyforge.org/doc/classes/Rack/Directory.html
[Rack::Rewrite]: http://johntrupiano.rubyforge.org/rack-rewrite/
[config.ru]: https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/blob/master/config.ru
[t]: http://sencha-tabs.heroku.com/
