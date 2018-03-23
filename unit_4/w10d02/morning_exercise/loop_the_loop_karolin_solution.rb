arr1 = [10,20,30,40,50,60,70,-80,90]

arr2 = [[10,20,30],
        [40,50,60],
        [70,-80,90]];
        
arr3 = [ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
  [ -269, 964, 209, 840, -456, 156, 365, -568 ],
  [ 289, -41, 488, 198, 240, 124, -427, 214 ],
  [ 452, 894, 968, -149, 683, 977, 741, -805 ],
  [ 181, -714, -950, 107, 800, 751, -143, 380 ],
  [ 152, 493, 707, 914, 37, 356, -625, 608 ],
  [ -345, 906, 83, 676, 723, 381, 557, -183 ],
  [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];        

## Simple one level array
sum = 0

arr1.each do |x|
  sum += x
end


def greatest_sum ( arr )
  ## multilevel array
  ## push each row sum into an array
  rows_sums = []
  ## push each column sum into an array
  cols_sums = []
  ## push the two diagnol sums into an array
  diag_sums = []
  
  ## Set variables for diagnol sums
  diag_sum_1 = 0
  diag_sum_2 = 0
  
  ## Loop the rows
  for row in 0...arr.length

    ## set the variables for row and col sums
    row_sum = 0
    col_sum = 0

   ##Sum the columns and rows
   for col in 0...arr.length
    row_sum += arr[row][col]
    col_sum += arr[col][row]
   end
 
   ## push the sums of each row and colum
   rows_sums.push(row_sum)
   cols_sums.push(col_sum)
 
   #diagnol 1
   diag_sum_1 += arr[row][row]

   #diagnol 2
   diag_sum_2 += arr[row][arr[row].length - row - 1]
 
  end # ends for loop  - row
  
  #push the sums of the diagnols into an array to compare
  diag_sums.push(diag_sum_1,diag_sum_2 )

 
  ## now that all sums have been gathred it is time to compare them and choose the biggest
 

 biggest_row  = rows_sums.max
 biggest_col  = cols_sums.max
 biggest_diag = diag_sums.max

 
 ##put the biggest numbers in an array
 biggest_biggest = [biggest_row, biggest_col, biggest_diag]
 
 ## show the biggest number
# puts biggest_biggest.max
 
 ## Hungry for more: was it a row, column or diagonal that had the biggest sum?
 biggest_biggest.each_index do |where_is_it|
   
   if biggest_biggest[where_is_it] == biggest_biggest.max
     if (where_is_it == 0)
       p "A row had the biggest sum"
      elsif (where_is_it ==1 )
       p "A column had the biggest sum"
      else
       p "A diagonal had the biggest sum"
     end
      p "The sum is " + biggest_biggest.max.to_s
   end
 end
 
 
end

greatest_sum(arr2)
greatest_sum(arr3)
