require 'open-uri'
require 'Nokogiri'

#This is the syntax for scraping from the web
# doc = Nokogiri::HTML(open("https://en.wikipedia.org/wiki/List_of_original_programs_distributed_by_Netflix"))

# This is the sytax for scraping from a file
doc = Nokogiri::HTML(File.open("netflix_data.html"))

# puts doc

# puts tableData = doc.css("table")

# puts tableDataText = doc.css("table").text

allTitles = doc.css("a")

allTitles.each do |item|
  title = item.text
  if title.size > 0
    puts "Title is #{title}"
  end
end
