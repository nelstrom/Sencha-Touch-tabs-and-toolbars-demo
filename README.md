

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

## Deployment

This code is deployed to Heroku as a static site, served by Rack. All files under the 'public' directory are served as static files (using [Rack::Static][] middleware). The [Rack::Rewrite][] middleware ensures that the index.html file is served for the root path: '/'. This is configured in the [config.ru][] file.

[Rack::Static]: http://rack.rubyforge.org/doc/classes/Rack/Static.html
[Rack::Directory]: http://rack.rubyforge.org/doc/classes/Rack/Directory.html
[Rack::Rewrite]: http://johntrupiano.rubyforge.org/rack-rewrite/
[config.ru]: https://github.com/nelstrom/Sencha-Touch-tabs-and-toolbars-demo/blob/master/config.ru
