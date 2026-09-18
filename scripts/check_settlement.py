p = 'aurea_codex_transa_es_rituais_liquida_es_notariais/code.html'
txt = open(p, encoding='utf-8').read()
start = txt.find('settlement-row')
print(txt[start:start+1200])
