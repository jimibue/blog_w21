class PagesController < ApplicationController
  def index
    puts "index method in pages controller called"
    # rails magic by default rails will look for views/pages/index.html.erb
    # and render that

    # use my model here
    pages = Page.all

    # use react here, pass pages from my controller to my react component
    # via 'props'
    render component: "Pages", props: { pages: pages }
  end
end
