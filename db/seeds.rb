Clickcount.find_or_create_by(id: 1) do |count|
  count.count = 0
end