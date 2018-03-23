# FLATTEN
# Returns a new array that is a one-dimensional flattening of this hash. That is, for every key or value that is an array, extract its elements into the new array. Unlike Array#flatten, this method does not flatten recursively by default. The optional level argument determines the level of recursion to flatten.

cohort = {name: "Hopper", instructors: 4, "never_gonna_give_you_up" => "favorite song", most_played_song: "Freebird", instructors: ["Matt", "Thom", "Karolin", "Kristyn"], 100 => 200, four_d_array: [
  [[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]]],
  [[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]]],
  [[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]]]
  ]}

# p cohort
# p cohort.flatten
# p cohort.flatten(5)
p cohort
flat = cohort.flatten(-1)
p flat

four_d_array = [
  [[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]]],
  [[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]]],
  [[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]],[[1,2,3],[1,2,3]]]
  ];

# p four_d_array.flatten
# p four_d_array
