class ClickcountsController < ApplicationController
  def index
    @count = Clickcount.find_by(id: 1)
  end

  def create
    @count = Clickcount.find_or_create_by(id: 1)
    @count.increment!(:count)
    @count.broadcast_update_to("counts", target: "all_click_count", locals: { count: @count })
  end

  def destroy
    @count = Clickcount.find_or_create_by(id: 1)
    @count.update!(count: 0)
  end
end
