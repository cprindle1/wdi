arr1 = [ [10, 20, 30],
        [40, 50, 60],
        [70, -80, 90] ]

# need to get the sum of each row
# determining the largest sum of the rows

# select the largest sum 

# need to get the sum of each col

# need to get the sum of each diag


# Rows        
def greatest_sum (arr)
  greatest_row_num = []
  arr.each do |row_num|
    # p row_num
  row_sum = row_num.reduce (:+)
  greatest_row_num.push( row_sum )
  end
  winner = greatest_row_num.max
  p winner
end

# We did it! We got the answer to rows!

# Col
def greatest_col ( arr )
  greatest_col_num =[]
  for i in 0...arr.length
    for j in 0...arr[i].length
      p arr[j][i]
    end
  end
end


# greatest_sum(arr1)
greatest_col ( arr1 )
