arr = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];
bigArray =[ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
              [ -269, 964, 209, 840, -456, 156, 365, -568 ],
              [ 289, -41, 488, 198, 240, 124, -427, 214 ],
              [ 452, 894, 968, -149, 683, 977, 741, -805 ],
              [ 181, -714, -950, 107, 800, 751, -143, 380 ],
              [ 152, 493, 707, 914, 37, 356, -625, 608 ],
              [ -345, 906, 83, 676, 723, 381, 557, -183 ],
              [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];

def make_matrix(int)
  rand_array=[]
  int.times{
    sub_array = []
    int.times{sub_array.push(
      if rand(9) < 3
       -rand(1000)
      else
        rand(1000)
      end
       )}
    rand_array.push(sub_array)
  }
  p rand_array
end

def find_max(arr)
  sums = []
  arr.each{|a| sums.push(a.inject(:+))} #horizontal
  for j in 0...arr.length do
    sums.push(((0...arr.length).collect { |i| arr[i][j] }).inject(:+)) #vertical
  end
  sums.push(((0...arr.length).collect { |i| arr[i][i]}).inject(:+)) #diagonal
  sums.push(((0...arr.length).collect { |i| arr[i][-i-1] }).inject(:+)) #diagonal
  p sums.max
end

find_max(make_matrix(3))
