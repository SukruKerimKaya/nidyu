#!/usr/bin/env python3
"""
Nidyu Auto-Checker (Koruyucu Melek)
Ajanin arka planda kendi kendini kontrol etmesi için 3 saniyelik jet hizinda test.
"""

import subprocess
import time
import sys

def main():
    print("🚀 Nidyu Checker çalisiyor (Type & Import & Syntax)...")
    start_time = time.time()
    
    try:
        # tsc --noEmit ile tüm proje geneli hizli tip, syntax ve import yol kontrolü yapiyoruz.
        tsc_process = subprocess.run(
            ["npx", "tsc", "--noEmit"],
            capture_output=True,
            text=True
        )
        
        duration = time.time() - start_time
        
        if tsc_process.returncode == 0:
            print(f"\n✅ KUSURSUZ! Tip, Sentaks ve kütüphane baglari 100% doğru. ({duration:.2f} saniye)")
            sys.exit(0)
        else:
            print(f"\n❌ DİKKAT: HATA BULUNDU ({duration:.2f} saniye)")
            print("="*50)
            
            # Hatayi filtrele ve sadece en kritik uyarilari göster (max ilk 10 satir veya özet)
            output_lines = tsc_process.stdout.strip().split('\n')
            short_error_lines = [line for i, line in enumerate(output_lines) if i < 20]
            short_error = '\n'.join(short_error_lines)
            
            print(short_error)
            if len(output_lines) > 20:
                print(f"... [ve {len(output_lines) - 20} satir daha hata var]")
            
            print("="*50)
            print("⚠️ Ajan: Bu hatayi hemen düzeltebilir veya kullaniciya bilgi verebilirsin.")
            sys.exit(1)
            
    except Exception as e:
        print(f"⚠️ Checker hatasi: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
