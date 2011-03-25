require 'rubygems'
require 'rack/rewrite'

use Rack::Rewrite { rewrite '/', '/index.html' }
use Rack::Static, :urls => ['/'], :root => "public"

run Rack::Directory.new('public')
