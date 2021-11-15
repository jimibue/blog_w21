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

  def new
    render component: "PageNew"
  end

  def create
    Page.create(title: params[:page][:title], author: params[:page][:author])

    # want to go back to pages index '/pages'
    # this really does a get request to '/pages'
    redirect_to pages_path
  end
end
