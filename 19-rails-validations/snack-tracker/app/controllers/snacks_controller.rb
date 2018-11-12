class SnacksController < ApplicationController

  before_action :get_snack, only: [:show, :edit, :destroy, :update]
  
  def home
    redirect_to snacks_path
  end

  def index
    @snacks = Snack.all
  end

  def show
  end

  def new
    @snack = Snack.new
  end

  def create
    @snack = Snack.new(snack_strong_params)
    if @snack.save
      redirect_to snack_path(@snack)
    else
      render :new
    end
  end

  def edit
  end

  def update
    
    @snack.update(snack_strong_params)
    redirect_to @snack
  end

  def destroy
    @snack.destroy
    redirect_to snacks_path
  end

  private

  def snack_strong_params
    return params.require(:snack).permit(:name, :deliciousness, :calories, :retailer_id)
  end

  def get_snack
    @snack = Snack.find(params[:id])
  end

end
