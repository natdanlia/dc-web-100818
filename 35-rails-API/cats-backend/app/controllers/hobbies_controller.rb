class HobbiesController < ApplicationController
  #get all
  def index
    render json: Hobby.all
  end

  #get one
  def show
    render json: Hobby.find(params[:id])
  end
end
