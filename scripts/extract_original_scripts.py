import re
for p in ['aurea_codex_cust_dia_ativa_bunkers_herm_ticos/code.html', 'aurea_codex_transa_es_rituais_liquida_es_notariais/code.html']:
    txt = open(p, encoding='utf-8').read()
    scripts = re.findall(r'<script(?![^>]*tailwind)[^>]*>([\s\S]*?)</script>', txt)
    print('===', p, '===')
    for s in scripts:
        print(s)
