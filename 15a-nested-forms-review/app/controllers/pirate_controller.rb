require "pry"

class PiratesController < ApplicationController
  set :views, 'app/views/pirates'
  #Read: all
  get "/pirates" do
    @pirates = Pirate.all
    erb :index
  end

  #Create: form
  get "/pirates/new" do
    erb :new
  end

  #Read: one
  get "/pirates/:id" do
    @pirate = Pirate.find(params[:id])
    erb :show
  end

  #Create: action
  post "/pirates" do
    @pirate = Pirate.create(name: params["pirate"]["name"], height: params["pirate"]["height"], weight: params["pirate"]["weight"])
    params["pirate"]["ships"].each do |ship|
      Ship.create(name: ship["name"] , ship_type: ship["ship_type"], booty: ship["booty"], pirate_id: @pirate.id)
    end
    redirect "/pirates/#{@pirate.id}"
  end


  #Update: form


  #Update: action


  #Delete: action

end
