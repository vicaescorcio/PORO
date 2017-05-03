class HomeController < ApplicationController
	layout false
	layout 'la', except: [:index,:gallerie]
  

  def index
  end
  def about
  end
  def maintenance
  end
  def gallerie
  end
  def project
  end
  def contact
  end
  
end
