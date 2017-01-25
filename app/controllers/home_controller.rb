class HomeController < ApplicationController
	layout false
	layout 'la', :except => :index

  def index
  end
  def about
  end
  def maintenance
  end
  
end
