class Queue

  def initialize
    @queue = []
  end

  def add element
    @queue.push(element)
    element
  end

  def remove
    @queue.shift
  end

  def peek
    @queue[0]
  end
end
