import os
import sys
from PIL import Image

# Ensure UTF-8 output encoding for Windows console
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')


PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

USED_IMAGES = [
    "public/global_background.png",
    "public/images/KSP02404-HDR-Edit.jpg",
    "public/images/KSP02409-HDR-Edit.jpg",
    "public/images/KSP02428-HDR-Edit.jpg",
    "public/images/KSP02474-HDR-Edit.jpg",
    "public/images/KSP02559-HDR-Edit.jpg",
    "public/images/KSP02574-Edit.jpg",
    "public/images/logo-zalo-vector.png",
    "public/information_video/VIDE0 3/BÌA.png",
    "public/information_video/VIDEO 1/BÌA.png",
    "public/information_video/VIDEO 2/BÌA.png",
    "public/logo.png",
    "public/nhanvat.png",
] + [f"public/landscape/gym_{i:02d}.jpg" for i in range(1, 26)]

MAX_WIDTH = 1920
WEBP_QUALITY = 82

def main():
    print("Beginning image conversion to .webp at public/webp/...")
    
    total_original_bytes = 0
    total_webp_bytes = 0
    converted_count = 0

    for rel_path in USED_IMAGES:
        src_full_path = os.path.join(PROJECT_ROOT, rel_path.replace("/", os.sep))
        if not os.path.exists(src_full_path):
            print(f"[MISSING] File not found: {rel_path}")
            continue

        sub_path = rel_path.replace("public/", "", 1)
        base_name, _ = os.path.splitext(sub_path)
        dest_rel_path = f"public/webp/{base_name}.webp"
        dest_full_path = os.path.join(PROJECT_ROOT, dest_rel_path.replace("/", os.sep))

        os.makedirs(os.path.dirname(dest_full_path), exist_ok=True)

        orig_size = os.path.getsize(src_full_path)
        total_original_bytes += orig_size

        try:
            with Image.open(src_full_path) as img:
                if img.mode in ("P", "LA"):
                    img = img.convert("RGBA")
                elif img.mode not in ("RGB", "RGBA"):
                    img = img.convert("RGB")

                width, height = img.size
                if width > MAX_WIDTH:
                    new_height = int(height * (MAX_WIDTH / width))
                    img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)

                img.save(dest_full_path, "WEBP", quality=WEBP_QUALITY, optimize=True)

            webp_size = os.path.getsize(dest_full_path)
            total_webp_bytes += webp_size
            converted_count += 1

            orig_mb = orig_size / (1024 * 1024)
            webp_mb = webp_size / (1024 * 1024)
            reduction = ((orig_size - webp_size) / orig_size) * 100
            print(f"[OK] {rel_path} ({orig_mb:.2f} MB) -> {dest_rel_path} ({webp_mb:.2f} MB) [Reduced {reduction:.1f}%]")
        except Exception as e:
            print(f"[ERROR] Failed {rel_path}: {e}")

    orig_total_mb = total_original_bytes / (1024 * 1024)
    webp_total_mb = total_webp_bytes / (1024 * 1024)
    total_reduction = ((total_original_bytes - total_webp_bytes) / total_original_bytes) * 100 if total_original_bytes > 0 else 0

    print("\n" + "="*60)
    print(f"Successfully converted {converted_count} images!")
    print(f"Original total size: {orig_total_mb:.2f} MB")
    print(f"New WebP total size: {webp_total_mb:.2f} MB")
    print(f"Total size reduction: {total_reduction:.2f}% (Saved {orig_total_mb - webp_total_mb:.2f} MB)")
    print("="*60)

if __name__ == "__main__":
    main()

