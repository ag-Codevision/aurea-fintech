import os
p = 'aurea_codex_transa_es_rituais_liquida_es_notariais/code.html'
txt = open(p, encoding='utf-8').read()
print('Tem table?', '<table' in txt)
print('Tem tbody?', '<tbody' in txt)
for line in txt.split('\n'):
    if any(k in line for k in ['ARC-', 'Protocolo', 'table', 'tbody', 'Livro Sacro']):
        print('MATCH:', line.strip()[:100])
