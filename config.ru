require "rubygems"
require 'rack/contrib'
require 'rack-rewrite'

use Rack::Static, :urls => ['/images'], :root => "public"
use Rack::Rewrite do
  rewrite '/', '/index.html'
end
run Rack::Directory.new('public')
