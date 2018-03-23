<<<<<<< HEAD
goblins =  Array.new(100){|i| false}

for i in (1..goblins.length)
  (i..goblins.length).step(i){|j| goblins[j]=!goblins[j]}
end

cured_goblins=[]
goblins.each_with_index{ |a, i| cured_goblins.push(i) if a}

p cured_goblins
=======
# `false` means they don't have the cure (they're sick)
# `true` means that they have the cure

# There are 100 Goblins suffering from acid reflux, and you are a sadistic Goblin doctor with the cure. You want to torture the Goblins with a little game.

#We need to make an array with goblins 100 of them. We know that they're all sick (which is `false` - they don't have the cure).

goblins = []
100.times { goblins << false}

100.times do |i|
  (i...goblins.length).step(i.next) do |gob_value|
    goblins[gob_value] = !goblins[gob_value]
  end
  p goblins
  p ("============================")
end

p goblins

cured_goblins = []
goblins.each_with_index do |value, index|
  if value == true
    cured_goblins.push(index.next)
  end
end

p cured_goblins

# we need to turn the to `true` because we cure them all.

#SECOND TIME
# But then you start from the beginning of the line and go over them a second time, removing the cure for every second Goblin, starting with the second Goblin.
# Goblins at odd index numbers (index 1, 3, 5, 7...) now have the disease (they should be false).
# We are toggling here also. Incrementing by 2 starting at index 1 which is Goblin 2
# Here we start at Index: 1
# Which is Goblin: 2
# Incrementing by: 2

#THIRD TIME
# Then you do it a third time for every third Goblin, starting at the third Goblin: if the Goblin you now administer was previously cured, they are now uncured, and if the Goblin was uncured, they are now cured.

# Starting at index 2 (which is Goblin 3), let's toggle - so if they were cured (true), they are now uncured (false), etc - false becomes true. We do this every 3 goblins.

# Here we start at Index: 2
# Which is Goblin: 3
# Incrementing by: 3

##FOURTH TIME
# You do it a fourth time, and go to every fourth Goblin starting with the fourth.

# Here we start at Index: 3
# Which is Goblin: 4
# Incrementing by: 4

# Find incrementing value using the index: incr = index + 1 OR incr = index.next

# After you have gone down the line of Goblins 100 times, which Goblins are cured at the end?

# Once you have your goblins array populated with the final true and false values after having gone through the entire process of curing and uncuring, translate your final array to another array of numerical values of the cured Goblins only.

# if we know the index of the true, then the index + 1 would be the goblin's place in line. We could just push those numbers to a new array.
>>>>>>> e486f0c24ed7b052279297485be9dee4872653ca
