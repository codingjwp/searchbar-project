# png 이미지를 webp로 변경하는 코드
from PIL import Image
import os

URL = '../server/assets/form'
NEXTURL = '../server/assets/test'

def convert_png_to_webp(png_path, webp_path):
    img = Image.open(f'{URL}/{png_path}')
    img.save(f'{NEXTURL}/{webp_path}', 'WebP', quality=80)

file_name = []
for names in os.listdir(URL):
  if names.endswith('.png'):
    file_name.append(names)

for paths in file_name:
  name = paths.split('.')[0]
  convert_png_to_webp(f'{name}.png', f'{name}.webp')