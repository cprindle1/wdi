class Queue
  def initialize
    @queue = []
  end

  def add item
    @queue.push(item)
    item
  end

  def remove
    @queue.shift
  end

  def peek
    @queue.first
  end
end
