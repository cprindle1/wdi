class Stack
  def initialize
    @stack = []
  end

  def push item
    @stack.push(item)
    item
  end

  def pop
    @stack.pop
  end

  def peek
    @stack.last
  end
end
