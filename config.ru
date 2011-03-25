require 'rubygems'
require 'rack/rewrite'

use Rack::Rewrite do
  rewrite '/', '/index.html'
end
use Rack::Static, :urls => ['/'], :root => "public"

run Rack::Directory.new('public')
