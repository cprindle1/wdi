class Stack
  def initialize
    @stack = []
  end

  def push element
    @stack.push(element)
    element
  end

  def pop
    @stack.pop
  end

  def peek
    @stack.last
  end
end
