import sys
from PIL import Image

def fix_image(img_path):
    img = Image.open(img_path)
    img = img.convert("RGB")
    pixels = img.load()
    width, height = img.size
    
    # Target right 40% and top 30%
    start_x = int(width * 0.6)
    end_x = width
    start_y = 0
    end_y = int(height * 0.3)
    
    # We'll just define a bounding box for reddish pixels
    min_x, max_x = width, 0
    min_y, max_y = height, 0
    
    found = False
    
    for y in range(start_y, end_y):
        for x in range(start_x, end_x):
            r, g, b = pixels[x, y]
            # Detect the red color of the button
            if r > 150 and max(g, b) < min(100, r - 50):
                min_x = min(min_x, x)
                max_x = max(max_x, x)
                min_y = min(min_y, y)
                max_y = max(max_y, y)
                found = True
                
    if not found:
        max_r = 0
        for y in range(start_y, end_y):
            for x in range(start_x, end_x):
                r, g, b = pixels[x, y]
                if r > max_r: max_r = r
        print(f"Red button not found. Max r in region: {max_r}")
        sys.exit(0)
        
    print(f"Found red button at {min_x},{min_y} - {max_x},{max_y}")
    
    # Now we expand the box a bit to cover the whole rounded button
    padding = 10
    min_x = max(0, min_x - padding)
    max_x = min(width - 1, max_x + padding)
    min_y = max(0, min_y - padding)
    max_y = min(height - 1, max_y + padding)
    
    # Sample background color right next to it
    bg_x = min_x - 10
    bg_y = min_y - 10
    if bg_x < 0: bg_x = 0
    if bg_y < 0: bg_y = 0
    
    bg_color = pixels[bg_x, bg_y]
    
    # Or just average a few pixels above and to the left
    sample_pixels = []
    for dy in range(10, 20):
        if min_y - dy >= 0:
            sample_pixels.append(pixels[min_x, min_y - dy])
    
    if len(sample_pixels) > 0:
        avg_r = sum(p[0] for p in sample_pixels) // len(sample_pixels)
        avg_g = sum(p[1] for p in sample_pixels) // len(sample_pixels)
        avg_b = sum(p[2] for p in sample_pixels) // len(sample_pixels)
        bg_color = (avg_r, avg_g, avg_b)
    
    for y in range(min_y, max_y):
        for x in range(min_x, max_x):
            pixels[x, y] = bg_color
            
    img.save(img_path)
    print("Fixed and saved.")

if __name__ == "__main__":
    fix_image(r"e:\DTL\nuxt-app\app\assets\img\barista.png")
