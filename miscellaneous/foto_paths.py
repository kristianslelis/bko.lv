import os

# -------- configuration --------
image_folder = "foto/RV3G_2024"        # <— choose your one folder here
html_template = '''{images}'''           # HTML wrapper
# --------------------------------

def generate_foto_html(folder):
    # list image files in that folder
    image_files = [f for f in os.listdir(folder)
                   if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]

    images_html = ""
    for image in image_files:
        full_path = os.path.join(folder, image)
        images_html += f'<img src="{full_path}" alt="{image}">\n'

    return html_template.format(images=images_html)

html_content = generate_foto_html(image_folder)

with open('foto_paths.html', 'w', encoding='utf-8') as file:
    file.write(html_content)

