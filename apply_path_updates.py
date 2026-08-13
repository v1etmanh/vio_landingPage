import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

REPLACEMENTS = [
    # General logo & background
    ("/global_background.png", "/webp/global_background.webp"),
    ("'/global_background.png'", "'/webp/global_background.webp'"),
    ('"/global_background.png"', '"/webp/global_background.webp"'),
    
    ("/logo.png", "/webp/logo.webp"),
    ("'/logo.png'", "'/webp/logo.webp'"),
    ('"/logo.png"', '"/webp/logo.webp"'),

    ("/nhanvat.png", "/webp/nhanvat.webp"),
    ("'/nhanvat.png'", "'/webp/nhanvat.webp'"),
    ('"/nhanvat.png"', '"/webp/nhanvat.webp"'),

    ("/images/logo-zalo-vector.png", "/webp/images/logo-zalo-vector.webp"),

    # KSP images
    ("/images/KSP02404-HDR-Edit.jpg", "/webp/images/KSP02404-HDR-Edit.webp"),
    ("/images/KSP02409-HDR-Edit.jpg", "/webp/images/KSP02409-HDR-Edit.webp"),
    ("/images/KSP02428-HDR-Edit.jpg", "/webp/images/KSP02428-HDR-Edit.webp"),
    ("/images/KSP02474-HDR-Edit.jpg", "/webp/images/KSP02474-HDR-Edit.webp"),
    ("/images/KSP02559-HDR-Edit.jpg", "/webp/images/KSP02559-HDR-Edit.webp"),
    ("/images/KSP02574-Edit.jpg", "/webp/images/KSP02574-Edit.webp"),

    # Videos thumbnails
    ("/information_video/VIDE0 3/BÌA.png", "/webp/information_video/VIDE0 3/BÌA.webp"),
    ("/information_video/VIDEO 1/BÌA.png", "/webp/information_video/VIDEO 1/BÌA.webp"),
    ("/information_video/VIDEO 2/BÌA.png", "/webp/information_video/VIDEO 2/BÌA.webp"),
]

# Add gym_01 to gym_25
for i in range(1, 26):
    num = f"{i:02d}"
    REPLACEMENTS.append((f"/landscape/gym_{num}.jpg", f"/webp/landscape/gym_{num}.webp"))

def main():
    src_dir = os.path.join(PROJECT_ROOT, "src")
    index_html = os.path.join(PROJECT_ROOT, "index.html")

    target_files = [index_html]
    for root, _, files in os.walk(src_dir):
        for f in files:
            if f.endswith(('.tsx', '.ts', '.css', '.html', '.js')):
                target_files.append(os.path.join(root, f))

    modified_count = 0

    for file_path in target_files:
        if not os.path.exists(file_path):
            continue

        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content
        for old_str, new_str in REPLACEMENTS:
            new_content = new_content.replace(old_str, new_str)

        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            modified_count += 1
            rel_file = os.path.relpath(file_path, PROJECT_ROOT)
            print(f"[UPDATED] {rel_file}")

    print(f"\nDone! Modified code in {modified_count} files.")

if __name__ == "__main__":
    main()
