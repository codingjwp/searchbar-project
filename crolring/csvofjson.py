import csv, json

input_file = './pokemon.csv'
out_file = './pokemon.json'

with open(input_file, 'r', encoding='utf-8') as csv_file:
  csv_reader = csv.reader(csv_file)

  header = next(csv_reader)

  lines = []
  for row in csv_reader:
    row_data = {header[i]: row[i] for i in range(len(header))}
    lines.append(row_data)

with open(out_file, 'w', encoding='utf-8') as json_file:
  json.dump(lines, json_file, ensure_ascii=False, indent=2)