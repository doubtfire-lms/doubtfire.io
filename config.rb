###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Helpers
###

activate :relative_assets
set :relative_links, true

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Activate 'blogging' to generate guides
activate :blog do |guide|
  guide.prefix = 'articles/guides'
  guide.default_extension = '.md'
  guide.permalink = 'tags/{tags}/{title}.html'
  guide.layout = :'articles/guides'
  guide.tag_template = "#{guide.prefix}/tag_template.html"
end

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
helpers do
  # Require all functions in the helpers directory
  require_all 'lib/helpers'
end

# All overrides for core extensions
require_all 'lib/core_ext'

# Activate sprokets + compass
activate :sprockets

# Import CSS/SCSS
set :css_dir, 'stylesheets'
activate :autoprefixer

# Import JavaScript
set :js_dir, 'javascripts'

# Set the image directory to be ./images
set :images_dir, 'images'

# Partials must be from partials directory
set :partials_dir, 'partials'

# Activate markdown using Redcarpet parsing engine and syntax highlighting
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true
activate :syntax

# Pretty index directory structure
activate :directory_indexes

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash
end

###
# Page options, layouts, aliases and proxies
###

# Specify the root layout to index
page 'index.html', layout: :index

# Specify layouts for subdirectories of articles _in order_ of application
page 'articles/installation/**/step*', layout: :'articles/installation'
page 'articles/installation/*', layout: :'articles/index'
page 'articles/guides/index.html', layout: :'articles/index'
page 'articles/guides/tags/*', layout: :'articles/guides'
page 'articles/guides/tags/**/*', layout: :'articles/guides'
page 'articles/contributing/*', layout: :'articles/index'
page 'articles/index.html', layout: :'articles/index'
