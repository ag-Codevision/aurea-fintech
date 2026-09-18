# -*- coding: utf-8 -*-
import os, re, json

BASE_DIR = os.path.abspath('.')

def ler_arquivo(rel_path):
    p = os.path.join(BASE_DIR, rel_path)
    with open(p, 'r', encoding='utf-8') as f:
        return f.read()

def gravar_arquivo(rel_path, conteudo):
    p = os.path.join(BASE_DIR, rel_path)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(conteudo)
    print(f'Gravado: {rel_path} ({len(conteudo)} bytes)')

print('Auxiliares carregados com sucesso.')
