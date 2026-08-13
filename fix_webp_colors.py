import os
import sys
from PIL import Image, ImageCms
import io

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
WEBP_QUALITY = 88  # Higher quality to preserve vibrant colors & gradients

def convert_with_icc(src_full_path, dest_full_path):
    with Image.open(src_full_path) as img:
        icc_profile = img.info.get('icc_profile')
        
        # Convert palette/LA modes
        if img.mode in ("P", "LA"):
            img = img.convert("RGBA")
        elif img.mode not in ("RGB", "RGBA"):
            img = img.convert("RGB")

        # Resize if width > MAX_WIDTH
        width, height = img.size
        if width > MAX_WIDTH:
            new_height = int(height * (MAX_WIDTH / width))
            img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)

        # Save with ICC profile preserved
        save_args = {"quality": WEBP_QUALITY, "optimize": True}
        if icc_profile:
            save_args["icc_profile"] = icc_profile

        img.save(dest_full_path, "WEBP", **save_args)

def main():
    print("🚀 Re-converting images with preserved ICC Color Profile & Higher Quality (88)...")
    count = 0
    for rel_path in USED_IMAGES:
        src_full_path = os.path.join(PROJECT_ROOT, rel_path.replace("/", os.sep))
        if not os.path.exists(src_full_path):
            continue

        sub_path = rel_path.replace("public/", "", 1)
        base_name, _ = os.path.splitext(sub_path)
        dest_rel_path = f"public/webp/{base_name}.webp"
        dest_full_path = os.path.join(PROJECT_ROOT, dest_rel_path.replace("/", os.sep))

        os.makedirs(os.path.dirname(dest_full_path), exist_ok=True)

        try:
            convert_with_icc(src_full_path, dest_full_path)
            count += 1
            has_icc = " (ICC preserved)" if "icc_profile" in Image.open(src_full_path).info else ""
            print(f"[OK] {rel_path} -> {dest_rel_path}{has_icc}")
        except Exception as e:
            print(f"[ERROR] {rel_path}: {e}")

    print(f"\nSuccessfully re-converted {count} images with full color accuracy!")

if __name__ == "__main__":
    main()
