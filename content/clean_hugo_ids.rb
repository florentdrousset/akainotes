#!/usr/bin/env ruby

puts "🧼 Cleaning all .md files in the current directory..."

Dir.glob("*.md").each do |file|
  puts "🔧 Processing #{file}"
  content = File.read(file)

  # 1. Supprime les {#...}
  content.gsub!(/\s*\{#.*?\}/, "")

  # 2. Corrige les guillemets typographiques “ et ”
  content.gsub!(/[“”]/, '"')

  # 3. Corrige les relref mal formés s'il en reste
  content.gsub!(/\{\{\s*<\s*relref\s*“(.*?)”\s*>\s*\}\}/, '{{< relref "\1" >}}')

  File.write(file, content)
end

puts "✅ All .md files cleaned and fixed."

