# word = "someword"
#
# p word.upcase
#
# p "IM NOT SHOUTING".downcase
#
# p "supercalifragilisticexpialidocious".length
#
# p "wow" + "mom"
#
# p "i really like programming".capitalize

#
# puts "Where would you like to stay?"
# stay = gets
# puts "What sites would you like to visit?"
# sites = gets
# puts "What food would you like to eat?"
# food = gets
# puts "How many nights would you like to stay?"
# nights = gets
#
# tours = ["Statue of Liberty", "Times Square", "Central Park", "Financial District", "Broadway"]
#
# for i in tours do
#   puts i
# end
#
# puts "Which tour would you like to attend?"
# tour = gets
#
# if tour.to_f == 2
#   puts "cost: $40"
# else
#   puts "cost: $25"
# end
#
# p tours[rand(tours.length-1)]

puts "First Number"
num_1 = gets.to_f
puts "Second Number"
num_2 = gets.to_f
puts "Operator"
operator = gets.chomp

if operator == '+'
  p num_1 + num_2
elsif operator == '-'
  p num_1 - num_2
elsif operator == '/'
  p num_1 / num_2
elsif operator == '*'
  p num_1 * num_2
else
  p "INVALID OPERATOR"
end
