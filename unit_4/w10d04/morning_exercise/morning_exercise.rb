def arith_geo (array)
  arith = true
  geo = true
  for x in (0...array.length-2)
    if array[x+2]-array[x+1] != array[x+1] - array[x]
      arith = false
    end
  end
  for x in (0...array.length-2)
    if array[x+2]/array[x+1] != array[x+1] / array[x]
      geo = false
    end
  end
  if arith == true
    "Arithmetic"
  elsif geo == true
    "Geometric"
  else
    -1
  end
end

def arith_geo2(array)
  difarray = []
  array.reverse.inject{|memo, obj| difarray.push(memo-obj); obj}
  if difarray.uniq.length == 1
    return "Arithmetic"
  end
  difarray = []
  array.reverse.inject{|memo, obj| difarray.push(memo/obj); obj}
  if difarray.uniq.length == 1
    return "Geometric"
  end
  return -1
end

p  arith_geo([2, 4, 6, 8])

p arith_geo([2, 6, 18, 54])

p arith_geo([2, 6, 18, 54, 12])

p  arith_geo2([2, 4, 6, 8])

p arith_geo2([2, 6, 18, 54])

p arith_geo2([2, 6, 18, 54, 12])
