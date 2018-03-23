def arith_geo(arr)

  return -1 if arr.length < 3

  arith, geo = [], []

  (arr.length - 1).times do |i|
    arith << (arr[i] - arr[i+1])
    geo << (arr[i+1].to_f / arr[i].to_f)
  end

  return "Arithmetic" if arith.uniq.length == 1
  return "Geometric" if geo.uniq.length == 1

  -1
end
