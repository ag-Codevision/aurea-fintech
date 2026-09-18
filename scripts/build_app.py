# -*- coding: utf-8 -*-
import os, re

def carregar(nome_pasta):
    caminho = os.path.join(nome_pasta, 'code.html')
    with open(caminho, 'r', encoding='utf-8') as f:
        return f.read()

print('build_app.py iniciado')
