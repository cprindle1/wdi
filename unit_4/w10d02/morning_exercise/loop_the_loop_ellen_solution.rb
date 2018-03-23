arr = [ [10, 20, 30],
        [40, 50, 60],
        [70, -80, 90] ]

def loop_the_loop(array)
  # ========= iterate over the rows ============
  row_sums = []
  row_sum = 0
  array.each {|item| (item.length).times { |i|
    row_sum += item[i] }
    row_sums.push(row_sum)
    row_sum = 0 }
  biggest_row_sum = row_sums.max
  # ========= iterate over the columns ============
  j = 0
  column_sums = []
  column_sum = 0
  array.each {|item|
    (item.length).times {|i| column_sum += array[i][j] }
    column_sums.push(column_sum)
    j += 1
  }
  biggest_column_sum = column_sums.max
  # ========= iterate over the diags ============
  # ========= this section  is incomplete =============
  diag_sum = 0
  array.each {|item| (item.length).times {|i|
    p array[i][i]
    }
  }
  return [biggest_row_sum, biggest_column_sum].max
end

loop_the_loop(arr)
