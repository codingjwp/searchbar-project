import csv, json
# CSV OF JSON
input_file = './pokemon.csv'
out_file = './new_pokemon.json'

with open(input_file, 'r', encoding='utf-8') as csv_file:
  csv_reader = csv.reader(csv_file)

  header = next(csv_reader)

  lines = []
  for row in csv_reader:
    print(row)
    row_data = {header[i]: row[i] for i in range(len(header))}
    lines.append(row_data)

with open(out_file, 'w', encoding='utf-8') as json_file:
  json.dump(lines, json_file, ensure_ascii=False, indent=2)


# JSON OF CSV
# input_file = './pokemon.json'
# out_file = './new_pokemon.csv'

# with open(input_file, 'r', encoding='utf-8') as json_file:
#     data = json.load(json_file)

# header = data[0].keys()

# with open(out_file, 'w', encoding='utf-8') as csv_file:
#   csv_writer = csv.writer(csv_file)

#   csv_writer.writerow(header)

#   for row in data:
#     updated_row = list(row.values())
#     updated_row[2] = updated_row[2].replace('-', ' ')
#     updated_row[3] = updated_row[3].replace('-', ' ')
#     csv_writer.writerow(updated_row)