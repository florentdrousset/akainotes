#!/bin/bash

for file in *.md; do
  echo "Cleaning $file"
  sed -i 's/ *{#.*}//g' "$file"
done

echo "Cleaning done."

