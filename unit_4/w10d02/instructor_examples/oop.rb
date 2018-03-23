class Pet
  attr_accessor :rescued, :gender, :disposition

  def initialize(resuced, gender, disposition)
    @rescued = rescued
    @gender = gender
    @disposition = disposition
  end

  def sleep
    p "I am sleepin' on the couch"
  end

  def beg
    p "I'm begging for food"
  end
end

class Cat < Pet
  attr_accessor :snark, :breed

  def initialize(snark, breed)
    @snark = snark
    @breed = breed
  end

  def meow
    p "meooooow"
  end
end

willow = Cat.new(true, "tabby")

# p willow.breed
# willow.sleep

p Cat.ancestors
