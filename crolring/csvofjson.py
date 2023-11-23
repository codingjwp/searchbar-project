import csv, json, re
# CSV OF JSON
input_file = './smart.csv'
out_file = './smartphones.json'

# with open(input_file, 'r', encoding='utf-8') as csv_file:
#   csv_reader = csv.reader(csv_file)
#   header = next(csv_reader)
#   lines = []
#   for row in csv_reader:
#     row_data = {header[i]: row[i] for i in range(len(header))}
#     lines.append(row_data)

# with open(out_file, 'w', encoding='utf-8') as json_file:
#   json.dump(lines, json_file, ensure_ascii=False, indent=2)

# with open(input_file, 'r', encoding='utf-8') as csv_file:
#   csv_reader = csv.reader(csv_file)
#   header = next(csv_reader)
#   lines = []
#   id = 1
#   for row in csv_reader:
#     row_data = {header[i]: row[i] for i in range(len(header))}
#     row_data['id'] = id
#     id += 1
#     lines.append(row_data)

# with open(out_file, 'w', encoding='utf-8') as json_file:
#   json.dump(lines, json_file, ensure_ascii=False, indent=2)

# JSON OF CSV
input_file = './smartphones.json'
out_file = './phones.json'
result = {}

def chunk(lst, n):
  return [lst[i:i + n] for i in range(0, len(lst), n)]

with open(input_file, 'r', encoding='utf-8') as json_file:
  data = json.load(json_file)

# header = data[0].keys()
  for i, chunk in enumerate(chunk(data, 100)):
    # i는 0부터 시작하므로, 1을 더해줍니다.
    key = str(i + 1)
    result[key] = chunk

with open(out_file, 'w', encoding='utf-8') as json_file:
  json.dump(result, json_file, ensure_ascii=False, indent=2)



# with open(out_file, 'w', encoding='utf-8') as csv_file:
#   csv_writer = csv.writer(csv_file)

#   csv_writer.writerow(header)

#   for row in data:
#     updated_row = list(row.values())
#     updated_row[2] = updated_row[2].replace('-', ' ')
#     updated_row[3] = updated_row[3].replace('-', ' ')
#     csv_writer.writerow(updated_row)

# CSV of CSV
# input_file = './newsmartphones.csv'
# out_file = './phone.csv'
# list = []
# with open(input_file, 'r', encoding='utf-8') as csv_file:
#   csv_reader = csv.reader(csv_file)
#   selected_index = []
#   for i, header in enumerate(next(csv_reader)):
#     list.append(header)
#     selected_index.append(i)      
#   lint = []
#   for row in csv_reader:
#     data = [row[j] for j in selected_index]
#     lint.append(data)

# with open(out_file, 'w', encoding='utf-8') as new_file:
#   csv_writer = csv.writer(new_file);
#   csv_writer.writerow(list)
#   for row in lint:
#     csv_writer.writerow(row)