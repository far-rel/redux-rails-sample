class TodosController < ApplicationController

  skip_before_action :verify_authenticity_token

  respond_to :json

  def index
    respond_with Todo.all
  end

  def create
    @todo = Todo.create(todo_params)
    @todo.id = params[:todo][:id]
    respond_with @todo, location: ''
  end

  def todo_params
    params.require(:todo).permit(:id, :content)
  end

end