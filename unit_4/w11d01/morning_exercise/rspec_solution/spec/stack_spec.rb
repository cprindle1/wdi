require_relative '../stack'

RSpec.describe Stack do
  before :each do
    @stack = Stack.new
  end

  describe '#new' do
    it "should take no arguments and retrun a stack object" do
      expect(@stack).to be_an_instance_of Stack
    end
  end

  describe '#push' do
    it "should add a element to its stack and return the same element" do
      el = @stack.push(3)
      expect(el).to equal(3);
    end
  end

  describe '#pop' do
    it 'should return and remove top element from the stack' do
      @stack.push(3)
      @stack.push(4)
      @stack.push(5)
      @stack.pop
      expect(@stack.pop).to equal(4)
    end
  end

  describe '#peek' do
    it 'should return and not remove top element from the stack' do
      @stack.push(3)
      @stack.push(4)
      @stack.push(5)
      expect(@stack.peek).to equal(5)
      expect(@stack.peek).to equal(5)
    end
  end
end
