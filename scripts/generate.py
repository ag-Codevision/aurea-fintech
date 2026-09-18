#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os, re

def ler(path):
    with open(path, 'r', encoding='utf-8') as fl:
        return fl.read()

def gravar(path, txt):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as fl:
        fl.write(txt)
    print('Gravado:', path, len(txt))

def extrair_main(caminho):
    txt = ler(caminho)
    m = re.search(r'<main[^>]*>([\s\S]*?)</main>', txt, re.I)
    return m.group(1) if m else ''
