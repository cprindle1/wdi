def get_name
  puts "What is your name?"
  name = gets
  return name.chomp
end

# p get_name

def reverse_it
  string = "a man, a plan, a canal, frenemies!";
  return string.reverse
end

# p reverse_it

def swap_em
  a = 10
  b = 30
  a,b = b,a
  p "a is now: #{a}.  b is now: #{b}"
end

# swap_em

def multiply_array(arr)
  arr.reduce(:*)
end

# p multiply_array [1,2,3,4,5]

def fizz_buzzer(x)
  if x%(3*5) == 0
    return 'fizzbuzz'
  elsif x%3 == 0
    return 'fizz'
  elsif x%5 == 0
    return 'buzz'
  else
    return 'archer'
  end
end
#
# p fizz_buzzer(15)
# p fizz_buzzer(9)
# p fizz_buzzer(10)
# p fizz_buzzer(7)

def nth_fibonacci_number
  puts "what fibonnaci number do you want?"
  fib = gets.to_i
  a,b = 0,1
  fib.times do
    a,b = b, a+b
  end
  return a
end

# p nth_fibonacci_number


def search_array(array, value)
  return array.any?{|i| i==value}
end
# p search_array([1,2,3,4,5], 5)

def is_palindrome(str)
  return str==str.reverse
end

# p is_palindrome("racecar")

def has_dupes(arr)
  return !(arr.uniq.length == arr.length)
end

# p has_dupes [1,2,3,4,5]
