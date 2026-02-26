import sys
from PIL import Image

def analyze_image(img_path):
    img = Image.open(img_path)
    img = img.convert("RGB")
    pixels = img.load()
    width, height = img.size
    
    start_x = int(width * 0.7)
    end_x = width
    start_y = 0
    end_y = int(height * 0.3)
    
    reddest = []
    
    for y in range(start_y, end_y):
        for x in range(start_x, end_x):
            r, g, b = pixels[x, y]
            score = r - max(g, b)
            if score > 50:
                reddest.append((score, r, g, b, x, y))
                
    reddest.sort(reverse=True)
    for p in reddest[:10]:
        print(p)

if __name__ == "__main__":
    analyze_image(r"e:\DTL\nuxt-app\app\assets\img\barista.png")
