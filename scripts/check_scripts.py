import os, re
pages = [
    'aurea_codex_vis_o_geral_movimentos_celestes/code.html',
    'aurea_codex_cust_dia_ativa_bunkers_herm_ticos/code.html',
    'aurea_codex_arquivo_de_ativos_metais_austeros/code.html',
    'aurea_codex_transa_es_rituais_liquida_es_notariais/code.html',
    'aurea_codex_ordens_celestes_governan_a_sucess_ria/code.html'
]
for p in pages:
    txt = open(p, encoding='utf-8').read()
    scripts = re.findall(r'<script(?![^>]*tailwind)[^>]*>([\s\S]*?)</script>', txt)
    print(p, '-> scripts:', len(scripts))
    for s in scripts:
        lines = [l.strip() for l in s.split('\n') if l.strip().startswith('function')]
        print('  Funções:', lines)
