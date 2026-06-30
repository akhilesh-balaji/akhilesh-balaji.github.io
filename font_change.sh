#!/usr/bin/env bash
set -euo pipefail

# 1. Create destination directories under static/
mkdir -p static/fonts/CMUnicode
mkdir -p static/fonts/IosevkaAile/TTF static/fonts/IosevkaAile/WOFF2
mkdir -p static/fonts/Iosevka/TTF static/fonts/Iosevka/WOFF2

# 2. Move font binaries (CSS files stay where they are)
mv assets/fonts/CMUnicode/*.otf static/fonts/CMUnicode/
mv assets/fonts/IosevkaAile/TTF/*.ttf static/fonts/IosevkaAile/TTF/
mv assets/fonts/IosevkaAile/WOFF2/*.woff2 static/fonts/IosevkaAile/WOFF2/
mv assets/fonts/Iosevka/TTF/*.ttf static/fonts/Iosevka/TTF/
mv assets/fonts/Iosevka/WOFF2/*.woff2 static/fonts/Iosevka/WOFF2/

# 3. Rewrite url() paths in the three @font-face CSS files, in place
sed -i "s|url('cmun|url('/fonts/CMUnicode/cmun|g" \
  assets/fonts/CMUnicode/CMUnicode.css

sed -i "s|url('WOFF2/|url('/fonts/IosevkaAile/WOFF2/|g; s|url('TTF/|url('/fonts/IosevkaAile/TTF/|g" \
  assets/fonts/IosevkaAile/IosevkaAile.css

sed -i "s|url('WOFF2/|url('/fonts/Iosevka/WOFF2/|g; s|url('TTF/|url('/fonts/Iosevka/TTF/|g" \
  assets/fonts/Iosevka/Iosevka.css

echo "Done. Empty leftover folders under assets/fonts/*/TTF and WOFF2 can be removed manually if you want."
