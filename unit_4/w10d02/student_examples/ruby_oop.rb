class Country
  def message
    "Greetings Aliens, I am a country of Earth"
  end
end

class USA < Country
end

us = USA.new

p us.message

class Pet
  attr_accessor :resuced, :gender, :disposition

  def initialize(rescued, gender, disposition)
    @rescued = rescued
    @gender = gender
    @disposition = disposition
  end

  def sleep
    p "I'm sleeping on the couch"
  end
  def beg
    p "I'm begging for food"
  end
end

class Cat < Pet
  attr_accessor :breed, :snark
  def initialize(breed, snark)
    @breed = breed
    @snark = snark
  end

  def meow
    p "meoww"
  end
end

class Dog < Pet
  attr_accessor :breed, :happy
  def initialize(breed, happy)
    @breed = breed
    @snark = happy
  end

  def bark
    p "woof woof"
  end
end
