require 'open-uri'
require 'Nokogiri'

doc = Nokogiri::HTML(open("https://en.wikipedia.org/wiki/List_of_original_programs_distributed_by_Netflix"))

# puts tableData = doc.css("table")

# puts tableDataText = doc.css("table").text

# puts allTitles = doc.css("a").text
#
# allTitles = doc.css('a').each do |item|
#   title = item.text
#   puts "Title is: #{title}"
# end


doc = Nokogiri::HTML(File.open("netflix_data.html"))
