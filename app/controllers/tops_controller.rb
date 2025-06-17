class TopsController < ApplicationController
  def index
    @count = Clickcount.find_by(id: 1)
  end
end