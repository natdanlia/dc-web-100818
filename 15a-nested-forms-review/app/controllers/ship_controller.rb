require "pry"

class ShipsController < ApplicationController

  #Read: all
  get "/ships" do
    @ships = Pirate.all
    erb :"ships/index"
  end

  #Read: one
  get "/ships/:id" do
    @ship = Ship.find(params[:id])
    erb :"ships/show"
  end

  #Create: form
  get "/ships/new" do
    erb :"ships/new"
  end


  #Create: action


  #Update: form


  #Update: action


  #Delete: action
end
