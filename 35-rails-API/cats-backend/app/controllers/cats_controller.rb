class CatsController < ApplicationController
  #get all
  def index
    render json: Cat.all
  end

  #get one
  def show
    render json: Cat.find(params[:id])
  end

  #post
  def create
    #create a new resources
    render json: Cat.create(cat_params)
  end

  #patch
  def update
    Cat.find(params[:id]).update(cat_params)
    render json: Cat.find(params[:id])
  end

  #delete
  def destroy
    render json: Cat.find(params[:id]).destroy
  end

  def cat_params
    params.require(:cat).permit(:name, :breed, :age, :quote, :image)
  end

end
