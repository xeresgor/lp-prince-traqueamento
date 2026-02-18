import os
import re

dist_dir = '/home/ubuntu/lp_analysis/dist/public'
index_html_path = os.path.join(dist_dir, 'index.html')

with open(index_html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Find CSS and JS files
css_files = [f for f in os.listdir(os.path.join(dist_dir, 'assets')) if f.endswith('.css')]
js_files = [f for f in os.listdir(os.path.join(dist_dir, 'assets')) if f.endswith('.js')]

# Inline CSS
for css_file in css_files:
    css_path = os.path.join(dist_dir, 'assets', css_file)
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()
    
    # Use a simple string replacement for the tag instead of regex sub to avoid escape issues
    tag_pattern = re.compile(f'<link [^>]*href="/assets/{css_file}"[^>]*>')
    match = tag_pattern.search(html_content)
    if match:
        html_content = html_content[:match.start()] + f'<style>{css_content}</style>' + html_content[match.end():]

# Inline JS
for js_file in js_files:
    js_path = os.path.join(dist_dir, 'assets', js_file)
    with open(js_path, 'r', encoding='utf-8') as f:
        js_content = f.read()
    
    tag_pattern = re.compile(f'<script [^>]*src="/assets/{js_file}"[^>]*></script>')
    match = tag_pattern.search(html_content)
    if match:
        # Use string concatenation to avoid regex escape errors with the content
        html_content = html_content[:match.start()] + f'<script type="module">{js_content}</script>' + html_content[match.end():]

# Clean up some common Vite placeholders if they remain
html_content = html_content.replace('%VITE_FACEBOOK_PIXEL_ID%', '')
html_content = html_content.replace('%VITE_GA4_ID%', '')

output_path = '/home/ubuntu/Downloads/index.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"Consolidated HTML created at {output_path}")
