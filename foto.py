import os

# Path to the "foto" folder
hq_folder = 'foto'
lq_folder= "Apbalvosana_2024"

# HTML template for the page (escaped curly braces in JavaScript)
html_template = '''{images}'''

# Function to generate the HTML content for images in the "foto" folder
def generate_foto_html(hq_folder, lq_folder):
    # Get a list of all image files in the "lq_folder"
    image_files = [f for f in os.listdir(lq_folder) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]

    # Generate the HTML for each image
    images_html = ""
    for image in image_files:
        images_html += f'<img class="slides fade" src="{lq_folder}/{image}" alt="{image}">\n'

    # Insert the images into the template
    html_content = html_template.format(images=images_html)

    return html_content

# Generate the HTML content
html_content = generate_foto_html(hq_folder, lq_folder)


# Write the content to the foto.html file
with open('foto copy.html', 'w', encoding='utf-8') as file:
    file.write(html_content)

print("foto.html has been generated with all images.")
