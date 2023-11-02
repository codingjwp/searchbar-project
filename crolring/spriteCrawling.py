# 이미지 스프라이트를 크롤링 하는 코드
from bs4 import BeautifulSoup
import requests, os, time
from urllib.request import Request, urlopen

try:
    if not (os.path.isdir('poketsprite')):
        os.makedirs(os.path.join('poketsprite'))
except OSError as e:
    if e.errno != errno.EEXIST:
        exit()

URL = "https://pokemondb.net/pokedex/national"
html = requests.get(URL)
soup = BeautifulSoup(html.text, 'html.parser')
html.close()

datal_list = soup.findAll('span',{'class':'infocard-lg-img'})

param_list = []
for data in datal_list:
    picture = data.findAll('picture');
    param_list.extend(picture if picture != [] else data.findAll('a'))

headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

for item in param_list:
   sourceData = item.find('source');
   altData = item.find('img');
   if sourceData and 'srcset' in sourceData.attrs:
       path = sourceData['srcset']
   else:
       path = altData['src']
   types = path.split('.')
   types = types[len(types) - 1]
   name = altData['alt'].replace(' ', '-')
   req = Request(url=path, headers=headers)
   response = urlopen(req)
   data = response.read()
   with open(f'./poketsprite/{name}.{types}','wb') as file:
       file.write(data)
   time.sleep(5)
