import json

with open('src/theme/figma-tokens.json') as f:
    data = json.load(f)

for collection in data.get('collections', []):
    name = collection.get('name', '')
    if name in ['Spacing', 'Radius', 'Effect']:
        print(f"Collection: {name}")
        for mode in collection.get('modes', []):
            print(f"  Mode: {mode.get('name')}")
            for var in mode.get('variables', []):
                print(f"    {var.get('name')}: {var.get('value')}")
