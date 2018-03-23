class Muppet
  attr_accessor :name, :color
  COLORS = ["Red", "Blue", "Green", "Yellow"]
  def initialize(name)
    @name = name
    @color = COLORS.sample
    p "This muppet is called #{name}.  This muppet is #{color}"
  end

  def honk
    p "#{name} is making a honking sound!"
  end

  def flail
    p "#{name} is flailing its arms!"
  end

end

elmo = Muppet.new("Elmo")
elmo.honk
elmo.flail

class Bird
  attr_accessor :adjective, :name, :species
  SPECIES =   ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross', 'Ruddy Turnstone', 'Piping Plover', 'Killdeer', 'Laughing Gull', 'Marbled Godwit', 'Least Tern', 'New World Warbler']

  def initialize(adjective, name)
    @adjective = adjective
    @name = name
    @species = SPECIES.sample
    p "#{name} is a(n) #{adjective} bird! #{species}"
  end

  def hungry
    p "#{name} wants some regurgitated worms!"
  end

  def fly
    p "Flap! #{name} is taking flight!"
  end

end

this = Bird.new("ugly", "polly")
this.hungry
this.fly



p "======================================================"

class Dessert
  attr_accessor :name, :sugar_content
  def initialize(name, sugar_content)
    @name = name
    @sugar_content = sugar_content
  end
  def eat
    p "Yum! This #{name} is sooooo delicious!"
  end
end

class Pie < Dessert

end

class DeepFriedDessert < Dessert
  def initialize(name, sugar_content)
    super
  end
  def eat
    p "Yum! This #{name} is sooo...ack! ugh! *heart-attack*"
  end
end

class IceCream < Dessert
  attr_accessor :toppings
  def initialize(name, sugar_content)
    super
  end
  def eat
    p "Yum! This #{name} is sooo good"
  end
end

des1 = IceCream.new("vanilla", "100%")
des1.eat

des2 = DeepFriedDessert.new("Fried Stuff", "100%")
des2.eat

p "======================================================"

class Universe
  attr_accessor :items, :expanding, :conservation, :crunched

  def initialize(item1, item2, item3)
    @items = [item1, item2, item3]
    @expanding = true
    @conservation = true
    @crunched = false
  end
  def see_all_things
    p items
  end
  def create(new)
    if @conservation
      @items[rand(@items.length-1)]=new
    else
      @items.push(new)
    end
  end
  def check_density
    if @items.length > 10
      @expanding = false
    end
  end
  def energy_conservation
    if @items.length == @items.uniq.length
      @conservation = false
    end
  end
  def crunch?
    if @expanding == false
      @items.each{|i| p "#{i} has been crunched due to gravity"}
      @items.map!{|i| nil}
      @items = nil
      @crunched = true
      p "The Universe has ended"
    end
  end
end

# uni = Universe.new("Sun", "Moon", "Star")
# uni.see_all_things
#
# uni.create("Planet")
# uni.see_all_things
#
# uni.conservation = false
# uni.create("asteroid")
# uni.see_all_things

# parallel = Universe.new("People", "Animals", "Rocks")
# parallel.expanding = false
# parallel.crunch?
# parallel.see_all_things

def universe_sim
  uni = Universe.new("Sun", "Moon", "Star")
  new_things = ["people", "animals", "bugs", "rocks", "ateroid", "comet", "space ships"]
  while uni.crunched == false do
    uni.see_all_things
    uni.create(new_things.sample)
    uni.energy_conservation
    uni.check_density
    uni.crunch?
  end
end

universe_sim
