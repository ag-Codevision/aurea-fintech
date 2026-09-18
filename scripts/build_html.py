# -*- coding: utf-8 -*-
import os, re

def carregar(path):
    with open(path, 'r', encoding='utf-8') as fl:
        return fl.read()

def extrair(path, tag):
    txt = carregar(path)
    pattern = f'<{tag}[^>]*>([\\s\\S]*?)</{tag}>'
    m = re.search(pattern, txt, re.I)
    return m.group(1) if m else ''

print('Iniciando montagem do index.html...')

head_raw = extrair('aurea_codex_vis_o_geral_movimentos_celestes/code.html', 'head')
# Limpar qualquer ocultação de barra de rolagem e bloqueios herdados
head_raw = re.sub(r'::-webkit-scrollbar\s*\{[^}]*\}', '', head_raw)
head_raw = re.sub(r'body\s*\{\s*overscroll-behavior:\s*none;\s*\}', 'body { overscroll-behavior: auto; }', head_raw)

# Adicionar meta tags no-cache para evitar que o navegador sirva versão defasada
meta_no_cache = '''
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
'''
head_final = meta_no_cache + '\n' + head_raw + '\n<link rel="stylesheet" href="css/codex.css?v=2.1" />'

header_raw = extrair('aurea_codex_vis_o_geral_movimentos_celestes/code.html', 'header')
footer_raw = extrair('aurea_codex_vis_o_geral_movimentos_celestes/code.html', 'footer')

# Personalizar Header Monumental Fiduciário (Aurea Codex)
header_custom = '''
<header class="fixed top-0 left-0 w-full z-40 bg-surface/95 backdrop-blur-2xl border-b border-primary-container/25 shadow-[0_4px_30px_rgba(0,0,0,0.8)] overflow-x-hidden">
  <div class="codex-navbar-container">
    
    <!-- Selo & Marca Fiduciária -->
    <a href="#/visao-geral" onclick="navegarPara('visao-geral'); return false;" class="flex items-center gap-2 group select-none cursor-pointer flex-shrink-0">
      <div class="w-7 h-7 border border-primary-container flex items-center justify-center relative bg-surface-container-lowest transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(229,193,143,0.25)]">
        <span class="text-primary text-xs font-serif select-none transition-transform duration-300 group-hover:scale-110">☩</span>
        <span class="absolute -top-0.5 -right-0.5 w-1 h-1 bg-primary-container"></span>
        <span class="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-primary-container"></span>
      </div>
      <div class="flex flex-col">
        <span class="font-headline-sm text-[13px] sm:text-[14px] uppercase tracking-[0.15em] text-primary font-semibold leading-tight group-hover:text-primary-fixed transition-colors">Aurea Codex</span>
        <span class="font-label-sm text-[7.5px] uppercase tracking-[0.2em] text-on-surface-variant/70 leading-tight">Custódia Arcana &amp; Patrimônio</span>
      </div>
    </a>

    <!-- Navegação Central com indicador de estado ativo e sem quebra de linha -->
    <nav class="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-6 flex-shrink" data-active-classes="active text-primary">
      <a class="codex-nav-link active" data-nav-path="visao-geral" href="#/visao-geral" onclick="navegarPara('visao-geral'); return false;">
        <span>Visão Geral</span>
      </a>
      <a class="codex-nav-link" data-nav-path="custodia-ativa" href="#/custodia-ativa" onclick="navegarPara('custodia-ativa'); return false;">
        <span>Custódia<span class="hidden 2xl:inline"> Ativa</span></span>
      </a>
      <a class="codex-nav-link" data-nav-path="arquivo-ativos" href="#/arquivo-ativos" onclick="navegarPara('arquivo-ativos'); return false;">
        <span>Arquivo<span class="hidden 2xl:inline"> de Ativos</span></span>
      </a>
      <a class="codex-nav-link" data-nav-path="transacoes-rituais" href="#/transacoes-rituais" onclick="navegarPara('transacoes-rituais'); return false;">
        <span>Transações<span class="hidden 2xl:inline"> Rituais</span></span>
      </a>
      <a class="codex-nav-link" data-nav-path="ordens-celestes" href="#/ordens-celestes" onclick="navegarPara('ordens-celestes'); return false;">
        <span>Ordens<span class="hidden 2xl:inline"> Celestes</span></span>
      </a>
    </nav>

    <!-- Painel de Controles & Identidade Notarial -->
    <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
      <!-- Botão Modo Astral (Movimentos Celestes) -->
      <button id="btn-astral-toggle" onclick="alternarMovimentosCelestes()" class="codex-header-btn inline-flex border border-primary/40 bg-surface-container-lowest/90 hover:border-primary hover:bg-primary/10 text-primary px-2 py-0.5" title="Ativar Projeção de Astrolábio e Efemérides">
        <span class="text-primary text-[10px] animate-nodal-pulse">☿</span>
        <span class="hidden xl:inline">Astral</span>
      </button>

      <!-- Botão Chave Privada -->
      <button onclick="abrirModalChavePrivada()" class="codex-header-btn inline-flex border border-primary-container bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary-container text-on-surface px-2 py-0.5" title="Autenticação Notarial Sigil">
        <span class="text-tertiary-container text-[9px] animate-nodal-pulse">◇</span>
        <span class="hidden xl:inline">Chave</span>
      </button>

      <!-- Brasão de Identidade Notarial -->
      <div onclick="abrirModalChavePrivada()" class="w-7 h-7 rounded-full bg-surface-container-low border border-primary/40 hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer shadow-[0_0_10px_rgba(229,193,143,0.15)] group flex-shrink-0" title="Custodiante Autenticado • Protocolo Zurique">
        <span class="material-symbols-outlined text-primary text-[15px] group-hover:text-primary-fixed">shield_person</span>
      </div>

      <!-- Gatilho do Menu Mobile / Tablet -->
      <button onclick="alternarMenuMobile()" class="lg:hidden p-1 text-primary hover:text-primary-fixed focus:outline-none flex items-center justify-center" aria-label="Abrir Menu Notarial">
        <span class="material-symbols-outlined text-[22px]">menu</span>
      </button>
    </div>

  </div>
</header>
'''

# Gaveta Mobile
menu_mobile_html = '''
<div id="menu-mobile-gaveta" class="fixed inset-0 z-50 bg-surface/95 backdrop-blur-2xl lg:hidden hidden flex flex-col pt-24 px-8 pb-12 border-b border-primary-container/30">
  <div class="flex items-center justify-between pb-6 border-b border-outline-variant/30 mb-4">
    <span class="font-headline-sm text-primary uppercase tracking-widest">Navegação Fiduciária</span>
    <button onclick="fecharMenuMobile()" class="p-2 text-on-surface-variant hover:text-primary">
      <span class="material-symbols-outlined text-[24px]">close</span>
    </button>
  </div>
  <div class="flex flex-col gap-5 font-headline-sm uppercase tracking-widest text-on-surface">
    <a href="#/visao-geral" onclick="navegarPara('visao-geral'); return false;" class="py-2 border-b border-outline-variant/20 hover:text-primary flex items-center justify-between">
      <span>Visão Geral</span> <span class="text-primary text-body-sm">§ I</span>
    </a>
    <a href="#/custodia-ativa" onclick="navegarPara('custodia-ativa'); return false;" class="py-2 border-b border-outline-variant/20 hover:text-primary flex items-center justify-between">
      <span>Custódia Ativa</span> <span class="text-primary text-body-sm">§ II</span>
    </a>
    <a href="#/arquivo-ativos" onclick="navegarPara('arquivo-ativos'); return false;" class="py-2 border-b border-outline-variant/20 hover:text-primary flex items-center justify-between">
      <span>Arquivo de Ativos</span> <span class="text-primary text-body-sm">§ III</span>
    </a>
    <a href="#/transacoes-rituais" onclick="navegarPara('transacoes-rituais'); return false;" class="py-2 border-b border-outline-variant/20 hover:text-primary flex items-center justify-between">
      <span>Transações Rituais</span> <span class="text-primary text-body-sm">§ IV</span>
    </a>
    <a href="#/ordens-celestes" onclick="navegarPara('ordens-celestes'); return false;" class="py-2 border-b border-outline-variant/20 hover:text-primary flex items-center justify-between">
      <span>Ordens Celestes</span> <span class="text-primary text-body-sm">§ V</span>
    </a>
  </div>
  <div class="mt-8 flex flex-col gap-4">
    <button id="btn-astral-toggle-mob" onclick="alternarMovimentosCelestes()" class="ceremonial-btn w-full py-3 border border-primary bg-surface-container text-primary font-label-md uppercase tracking-[0.2em] flex items-center justify-center gap-2">
      <span class="text-primary">☿</span> <span>Ativar Movimentos Celestes</span>
    </button>
    <button onclick="abrirModalChavePrivada()" class="ceremonial-btn w-full py-3 bg-primary text-on-primary font-label-md uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2">
      <span class="text-tertiary-container">◇</span> <span>Inserir Chave Privada</span>
    </button>
  </div>
</div>
'''

# Astral Overlay Animado em SVG (100% Passivo e sem interceptar cliques/scroll)
astral_overlay_html = '''
<div id="astral-overlay" class="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-700 overflow-hidden flex items-center justify-center" style="pointer-events: none !important;">
  <svg class="w-[1200px] h-[1200px] text-primary/30 animate-orbit-cw" fill="none" stroke="currentColor" viewBox="0 0 1000 1000" style="pointer-events: none !important;">
    <circle cx="500" cy="500" r="480" stroke-dasharray="4 12" stroke-width="0.75"></circle>
    <circle cx="500" cy="500" r="390" stroke-width="0.5"></circle>
    <circle cx="500" cy="500" r="290" stroke-dasharray="2 6" stroke-width="0.75"></circle>
    <circle cx="500" cy="180" r="180" stroke-width="1"></circle>
    <line x1="500" y1="0" x2="500" y2="1000" stroke-width="0.5" stroke-dasharray="8 8"></line>
    <line x1="0" y1="500" x2="1000" y2="500" stroke-width="0.5" stroke-dasharray="8 8"></line>
    <line x1="146" y1="146" x2="854" y2="854" stroke-width="0.4"></line>
    <line x1="146" y1="854" x2="854" y2="146" stroke-width="0.4"></line>
    <!-- Constelações & Nodos Celestiais -->
    <circle cx="500" cy="110" r="6" fill="#e5c18f" class="animate-nodal-pulse"></circle>
    <circle cx="890" cy="500" r="5" fill="#f3736f" class="animate-nodal-pulse"></circle>
    <circle cx="500" cy="890" r="6" fill="#e5c18f" class="animate-nodal-pulse"></circle>
    <circle cx="110" cy="500" r="5" fill="#cdc6b9" class="animate-nodal-pulse"></circle>
    <polygon points="500,470 530,500 500,530 470,500" fill="currentColor" fill-opacity="0.15"></polygon>
  </svg>
</div>
'''

# Extrair os 5 Mains
main_visao = extrair('aurea_codex_vis_o_geral_movimentos_celestes/code.html', 'main')
main_custodia = extrair('aurea_codex_cust_dia_ativa_bunkers_herm_ticos/code.html', 'main')
main_arquivo = extrair('aurea_codex_arquivo_de_ativos_metais_austeros/code.html', 'main')
main_transacoes = extrair('aurea_codex_transa_es_rituais_liquida_es_notariais/code.html', 'main')
main_ordens = extrair('aurea_codex_ordens_celestes_governan_a_sucess_ria/code.html', 'main')

# Injetar IDs e Interatividade no Main Visão Geral
# Relógio no top ribbon
main_visao = re.sub(
    r'<span class="text-primary font-bold">MERIDIANO PRIMO 46° 12[\'\\]* 09" N</span>',
    '<span class="text-primary font-bold flex items-center gap-2"><span class="w-2 h-2 bg-primary rounded-full animate-nodal-pulse"></span> MERIDIANO PRIMO 46° 12\' 09" N</span>',
    main_visao
)
main_visao = re.sub(
    r'<span>ÉPOCA FIDUCIÁRIA: CICLO SOLÍSTICO XXIV</span>',
    r'<span id="relogio-liturgico-top" class="text-primary-container font-mono">14:32:00 ZURICH (UTC+1)</span>',
    main_visao
)

# Botões de Ação na Visão Geral
main_visao = re.sub(
    r'(<button[^>]*class="ceremonial-btn[^>]*>[\s\r\n]*<span[^>]*class="w-1\.5 h-1\.5 bg-primary rotate-45[^>]*></span>[\s\r\n]*Transfer[êe]ncia Soberana[\s\r\n]*</button>)',
    r'<button onclick="abrirModalNovaTransacao()" class="ceremonial-btn px-6 py-3.5 bg-surface-container-lowest border border-primary-container hover:bg-primary-container hover:text-on-primary-container text-primary font-label-md text-label-md uppercase tracking-[0.2em] transition-all duration-200 flex items-center gap-3 group"><span class="w-1.5 h-1.5 bg-primary rotate-45 group-hover:bg-on-primary-container transition-colors duration-300"></span> Transferência Soberana</button>',
    main_visao,
    count=1
)
main_visao = re.sub(
    r'(<button[^>]*class="ceremonial-btn[^>]*>[\s\r\n]*<span[^>]*>lock</span>[\s\r\n]*Aloca[çc][ãa]o de Cofre F[íi]sico[\s\r\n]*</button>)',
    r'<button onclick="navegarPara(\'custodia-ativa\')" class="ceremonial-btn px-6 py-3.5 bg-surface-container border border-outline-variant hover:border-primary-container hover:text-primary text-on-surface font-label-md text-label-md uppercase tracking-[0.2em] transition-all duration-200 flex items-center gap-3"><span class="material-symbols-outlined text-primary text-[18px]">lock</span> Alocação de Cofre Físico</button>',
    main_visao,
    count=1
)
main_visao = re.sub(
    r'(<button[^>]*class="ceremonial-btn[^>]*>[\s\r\n]*Auditoria Notarial[\s\r\n]*</button>)',
    r'<button onclick="abrirAuditoriaNotarial()" class="ceremonial-btn px-6 py-3.5 bg-transparent border border-outline-variant/50 hover:border-primary text-secondary-fixed hover:text-primary font-label-md text-label-md uppercase tracking-[0.2em] transition-all duration-200">Auditoria Notarial</button>',
    main_visao,
    count=1
)

# Tabela na Visão Geral: marcar o tbody com id para sincronização em tempo real
main_visao = re.sub(
    r'<tbody\b[^>]*>',
    r'<tbody id="tbody-transacoes-visao-geral" class="divide-y divide-outline-variant/15 font-body-md text-body-md text-secondary">',
    main_visao,
    count=1
)

# Formulário no final da Visão Geral (SIGIL rápido)
main_visao = re.sub(
    r'<input\b([^>]*placeholder="SIGIL-0000-0000-0000"[^>]*)>',
    r'<input id="input-chave-sigil-rapido" \1>',
    main_visao,
    count=1
)
main_visao = re.sub(
    r'(<button[^>]*>[\s\r\n]*<span>Validar</span>[\s\r\n]*<span[^>]*>[^<]*</span>[\s\r\n]*</button>)',
    r'<button onclick="validarSigilRapido()" class="ceremonial-btn px-6 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.2em] font-semibold hover:bg-primary-fixed transition-all duration-300 flex items-center justify-center gap-2 group"><span>Validar</span><span class="text-on-primary transition-transform duration-300 group-hover:translate-x-1">→</span></button>',
    main_visao,
    count=1
)
# Responsividade dos indicadores na Visão Geral (2 colunas em 1024px, 4 em telas largas)
main_visao = main_visao.replace('lg:grid-cols-4', 'xl:grid-cols-4')

# Interatividade em Custódia Ativa
main_custodia = re.sub(
    r'onclick="solicitarInspecao\(\'Bastião Alpina\'\)"',
    r'onclick="abrirInspecaoBunker(\'alpina\')"',
    main_custodia
)
main_custodia = re.sub(
    r'(<button[^>]*>[\s\r\n]*<span>Requisitar Inspeção Auditada</span>[\s\S]*?</button>)',
    r'<button onclick="abrirInspecaoBunker(\'alpina\')" class="px-5 py-2.5 bg-surface-container border border-primary-container text-primary font-label-md text-label-md uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-2"><span>Requisitar Inspeção Auditada</span><span class="material-symbols-outlined text-[16px]">arrow_forward</span></button>',
    main_custodia,
    count=1
)
# Responsividade dos grids de custódia
main_custodia = main_custodia.replace('lg:grid-cols-4', 'xl:grid-cols-4')

# Interatividade em Arquivo de Ativos
main_arquivo = re.sub(
    r'<tbody\b[^>]*>',
    r'<tbody id="tbody-arquivo-ativos" class="divide-y divide-outline-variant/15 font-body-md text-body-md text-secondary">',
    main_arquivo,
    count=1
)
# Adicionar barra de busca em Arquivo de Ativos e envolver a tabela em container com scroll horizontal seguro
busca_ativos_html = '''
<div class="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-primary-container/20">
  <div class="font-label-sm uppercase tracking-widest text-primary">FILTRAGEM DO ACERVO DE LINGOTES</div>
  <div class="w-full sm:w-80">
    <input type="text" oninput="renderizarTabelaAtivos(this.value)" placeholder="Buscar por série, metal ou bunker..." class="w-full px-4 py-2 bg-surface-container-lowest border border-outline-variant/40 focus:border-primary text-on-surface font-body-sm outline-none placeholder:text-on-surface-variant/40" />
  </div>
</div>
'''
main_arquivo = main_arquivo.replace('<table', busca_ativos_html + '<div class="w-full overflow-x-auto border border-primary-container/20"><table', 1)
main_arquivo = main_arquivo.replace('</table>', '</table></div>', 1)
main_arquivo = main_arquivo.replace('lg:grid-cols-4', 'xl:grid-cols-4')

# Interatividade em Transações Rituais
btn_nova_ordem_ritual = '''
<div class="flex items-center gap-2">
  <button onclick="abrirModalNovaTransacao()" class="ceremonial-btn px-5 py-3 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.16em] font-semibold hover:bg-primary-fixed transition-colors flex items-center gap-2 shadow-lg">
    <span class="text-tertiary-container animate-nodal-pulse">✦</span> Lavrar Ordem Ritual
  </button>
</div>
'''
main_transacoes = main_transacoes.replace(
    '<!-- Filtros Rápidos Retangulares -->',
    '<!-- Filtros Rápidos Retangulares -->\n' + btn_nova_ordem_ritual,
    1
)
main_transacoes = re.sub(
    r'<input class="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none"[^>]*>',
    r'<input id="busca-transacoes-input" oninput="filtrarSettlementsPorTexto(this.value)" class="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none" placeholder="Pesquisar por Código Notarial (#ARC-XXXX), Jurisdição ou Natureza Fiduciária..." type="text"/>',
    main_transacoes,
    count=1
)
main_transacoes = main_transacoes.replace('lg:grid-cols-4', 'xl:grid-cols-4')

# Interatividade e Responsividade em Ordens Celestes (Pulso de Vida e Eliminação de Corte Lateral)
main_ordens = re.sub(
    r'Último pulso carimbado há 48h \(Ciclo regular: 720h\)',
    r'Prazo restante até transmissão automática: <span id="contador-pulso-horas" class="text-primary font-bold">29 dias e 22 horas</span>',
    main_ordens
)
main_ordens = re.sub(
    r'<div class="bg-primary h-full w-11/12"></div>',
    r'<div id="barra-pulso-vida" class="bg-primary h-full transition-all duration-500" style="width: 98%;"></div>',
    main_ordens
)
# Corrigir quebra lateral do cabeçalho e cards de métricas
main_ordens = re.sub(
    r'flex flex-col lg:flex-row lg:items-end justify-between gap-8',
    'flex flex-col xl:flex-row xl:items-end justify-between gap-6',
    main_ordens
)
main_ordens = re.sub(
    r'min-w-\[280px\]',
    'w-full xl:w-auto min-w-0 max-w-xs',
    main_ordens
)
main_ordens = main_ordens.replace('lg:grid-cols-4', 'xl:grid-cols-4')

btn_pulso_vida = '''
<div class="mt-6 pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
  <span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Confirmação de Sobrevivência Soberana</span>
  <button id="btn-emitir-pulso" onclick="emitirPulsoDeVida()" class="ceremonial-btn px-6 py-3 bg-surface border border-primary text-primary font-label-md uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center gap-2">
    <span class="text-tertiary-container">✦</span> Emitir Pulso de Vida do Patriarca
  </button>
</div>
'''
main_ordens = main_ordens.replace('<!-- Right: Master Cryptographic Will Module -->', btn_pulso_vida + '<!-- Right: Master Cryptographic Will Module -->', 1)

# Modais Globais
modais_html = '''
<!-- Modal de Chave Privada -->
<div id="modal-chave-privada" class="fixed inset-0 z-50 codex-modal-backdrop flex items-center justify-center p-4 hidden">
  <div class="ceremonial-card max-w-xl w-full bg-surface-container border border-primary p-8 relative">
    <span class="corner-cross absolute -top-1 -left-1 text-primary text-label-sm">+</span>
    <span class="corner-cross absolute -top-1 -right-1 text-primary text-label-sm">+</span>
    <span class="corner-cross absolute -bottom-1 -left-1 text-primary text-label-sm">+</span>
    <span class="corner-cross absolute -bottom-1 -right-1 text-primary text-label-sm">+</span>

    <div class="flex items-center justify-between border-b border-primary-container/30 pb-4">
      <div class="flex items-center gap-3">
        <span class="text-primary text-xl font-headline-sm">☩</span>
        <span class="font-headline-sm uppercase tracking-widest text-primary">Terminal Criptográfico de Herdeiro</span>
      </div>
      <button onclick="fecharModalChavePrivada()" class="text-on-surface-variant hover:text-primary">
        <span class="material-symbols-outlined text-[22px]">close</span>
      </button>
    </div>

    <div class="mt-6 space-y-4">
      <p class="font-body-sm text-on-surface-variant leading-relaxed">
        Insira a semente fiduciária, a chave de 128-bits ou o identificador do sigilo notarial helvético para auditar o quórum de custódia soberana.
      </p>
      <div>
        <label class="font-label-sm uppercase tracking-widest text-primary block mb-1.5">Identificador Hermético (Sigil)</label>
        <input id="input-chave-sigil" type="text" placeholder="SIGIL-008-VERITAS" class="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 focus:border-primary text-on-surface font-mono text-body-sm uppercase tracking-widest outline-none" />
      </div>

      <div id="feedback-chave-privada" class="hidden p-4 bg-surface-container-lowest border"></div>
    </div>

    <div class="mt-8 flex justify-end gap-3 pt-4 border-t border-outline-variant/20">
      <button onclick="fecharModalChavePrivada()" class="ceremonial-btn px-4 py-2 border border-outline-variant text-on-surface font-label-md uppercase tracking-wider">
        Cancelar
      </button>
      <button onclick="validarChavePrivada()" class="ceremonial-btn px-6 py-2 bg-primary text-on-primary font-label-md uppercase tracking-wider font-semibold hover:bg-primary-fixed">
        Validar Atestado
      </button>
    </div>
  </div>
</div>

<!-- Modal de Lavrar Nova Transação Ritual -->
<div id="modal-nova-transacao" class="fixed inset-0 z-50 codex-modal-backdrop flex items-center justify-center p-4 hidden">
  <div class="ceremonial-card max-w-2xl w-full bg-surface-container border border-primary p-8 relative max-h-[90vh] overflow-y-auto">
    <span class="corner-cross absolute -top-1 -left-1 text-primary text-label-sm">+</span>
    <span class="corner-cross absolute -top-1 -right-1 text-primary text-label-sm">+</span>
    <span class="corner-cross absolute -bottom-1 -left-1 text-primary text-label-sm">+</span>
    <span class="corner-cross absolute -bottom-1 -right-1 text-primary text-label-sm">+</span>

    <div class="flex items-center justify-between border-b border-primary-container/30 pb-4">
      <div class="flex items-center gap-3">
        <span class="text-tertiary-container font-bold text-headline-sm">♦</span>
        <div>
          <span class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary block">CODEX PATRIMONII · PROTOCOLO DVP</span>
          <h3 class="font-headline-md text-headline-md uppercase text-on-surface tracking-wider">Lavrar Nova Ordem Ritual</h3>
        </div>
      </div>
      <button onclick="fecharModalNovaTransacao()" class="text-on-surface-variant hover:text-primary">
        <span class="material-symbols-outlined text-[22px]">close</span>
      </button>
    </div>

    <form onsubmit="submeterNovaTransacao(event)" class="mt-6 space-y-4 text-left">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="font-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">Natureza do Ativo</label>
          <select id="form-transacao-ativo" class="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 focus:border-primary text-on-surface font-body-sm outline-none">
            <option value="AU">Ouro Físico Au 999.9 (Good Delivery)</option>
            <option value="PT">Platina Pura Pt 999.5</option>
            <option value="PR">Dividendos Perpétuos de Infraestrutura</option>
            <option value="GT">Carta de Fiança Soberana Standby</option>
            <option value="ZK">Rebalanceamento Criptográfico Shamir MPC</option>
          </select>
        </div>
        <div>
          <label class="font-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">Volume Financeiro (R$)</label>
          <input id="form-transacao-volume" type="number" required placeholder="Ex: 50000000" class="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 focus:border-primary text-on-surface font-mono text-body-sm outline-none" />
        </div>
      </div>

      <div>
        <label class="font-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">Contraparte Notarial Homologada</label>
        <input id="form-transacao-contraparte" type="text" required placeholder="Ex: Credit Suisse Vault Zurich / Haia Court" class="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 focus:border-primary text-on-surface font-body-sm outline-none" />
      </div>

      <div>
        <label class="font-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">Cofre de Desembaraço Primário</label>
        <select id="form-transacao-cofre" class="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/50 focus:border-primary text-on-surface font-body-sm outline-none">
          <option value="Bastião Alpina · São Gotardo">Bastião Alpina · São Gotardo (Suíça)</option>
          <option value="Meridiano Titânio · Estocolmo">Meridiano Titânio · Estocolmo (Suécia)</option>
          <option value="Cripta Lacustre · Genebra">Cripta Lacustre · Genebra (Suíça)</option>
        </select>
      </div>

      <div class="p-4 bg-surface-container-low border border-outline-variant/20 text-body-sm text-on-surface-variant">
        <span class="text-primary font-bold">Fé Pública Notarial:</span> Esta ordem será instantaneamente autenticada sob a convenção de Haia, com quórum multilíngue e carimbo temporal UTC+1 de Zurique.
      </div>

      <div class="mt-8 flex justify-end gap-3 pt-4 border-t border-outline-variant/20">
        <button type="button" onclick="fecharModalNovaTransacao()" class="ceremonial-btn px-4 py-2.5 border border-outline-variant text-on-surface font-label-md uppercase tracking-wider">
          Cancelar
        </button>
        <button type="submit" class="ceremonial-btn px-6 py-2.5 bg-primary text-on-primary font-label-md uppercase tracking-wider font-semibold hover:bg-primary-fixed">
          Chancelar Registro
        </button>
      </div>
    </form>
  </div>
</div>

<!-- Modal de Inspeção de Bunker -->
<div id="modal-inspecao-bunker" class="fixed inset-0 z-50 codex-modal-backdrop flex items-center justify-center p-4 hidden">
  <div class="ceremonial-card max-w-3xl w-full bg-surface-container border border-primary p-8 relative">
    <div id="conteudo-inspecao-bunker"></div>
  </div>
</div>

<!-- Modal de Detalhe de Ativo -->
<div id="modal-detalhe-ativo" class="fixed inset-0 z-50 codex-modal-backdrop flex items-center justify-center p-4 hidden">
  <div class="ceremonial-card max-w-2xl w-full bg-surface-container border border-primary p-8 relative">
    <div id="conteudo-detalhe-ativo"></div>
  </div>
</div>

<!-- Modal de Auditoria Notarial e Certidão de Haia -->
<div id="modal-auditoria-notarial" class="fixed inset-0 z-50 codex-modal-backdrop flex items-center justify-center p-4 hidden overflow-y-auto">
  <div class="max-w-3xl w-full my-8">
    <div id="conteudo-auditoria-notarial"></div>
  </div>
</div>

<!-- Toast de Notificação Cerimonial -->
<div id="codex-toast" class="fixed bottom-6 right-6 z-50 max-w-md bg-surface-container border border-primary p-4 shadow-2xl transition-all duration-500 transform translate-y-24 opacity-0 pointer-events-none">
  <div class="flex items-start gap-3">
    <span class="text-primary text-xl font-headline-sm">☩</span>
    <div class="flex-1">
      <div id="toast-titulo" class="font-headline-sm text-primary uppercase text-sm tracking-wider"></div>
      <div id="toast-mensagem" class="font-body-sm text-on-surface-variant text-xs mt-1 leading-relaxed"></div>
    </div>
  </div>
</div>
'''

# Montar HTML Completo
html_completo = f'''<!DOCTYPE html>
<html class="dark" lang="pt-BR">
<head>
{head_final}
</head>
<body class="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col justify-between">

<!-- Moldura Cerimonial Fixa (Totalmente passiva) -->
<div class="pointer-events-none fixed inset-0 z-50 border border-primary-container/20 m-2 p-1" style="pointer-events: none !important;">
  <div class="w-full h-full border border-secondary/10 relative" style="pointer-events: none !important;">
    <span class="absolute -top-1 -left-1 text-primary-container text-label-sm font-label-sm select-none" style="pointer-events: none !important;">+</span>
    <span class="absolute -top-1 -right-1 text-primary-container text-label-sm font-label-sm select-none" style="pointer-events: none !important;">+</span>
    <span class="absolute -bottom-1 -left-1 text-primary-container text-label-sm font-label-sm select-none" style="pointer-events: none !important;">+</span>
    <span class="absolute -bottom-1 -right-1 text-primary-container text-label-sm font-label-sm select-none" style="pointer-events: none !important;">+</span>
  </div>
</div>

<!-- Overlay dos Movimentos Celestes (Astrarium) -->
{astral_overlay_html}

<!-- Header Cerimonial Superior -->
{header_custom}

<!-- Menu Gaveta Mobile -->
{menu_mobile_html}

<!-- Container Dinâmico SPA das 5 Visões -->
<main class="w-full pt-20 bg-surface flex-1">
  <!-- 1. Visão Geral -->
  <section id="view-visao-geral" class="codex-view-section">
    {main_visao}
  </section>

  <!-- 2. Custódia Ativa & Bunkers Herméticos -->
  <section id="view-custodia-ativa" class="codex-view-section hidden">
    {main_custodia}
  </section>

  <!-- 3. Arquivo de Ativos & Metais Austeros -->
  <section id="view-arquivo-ativos" class="codex-view-section hidden">
    {main_arquivo}
  </section>

  <!-- 4. Transações Rituais & Liquidações Notariais -->
  <section id="view-transacoes-rituais" class="codex-view-section hidden">
    {main_transacoes}
  </section>

  <!-- 5. Ordens Celestes & Governança Sucessória -->
  <section id="view-ordens-celestes" class="codex-view-section hidden">
    {main_ordens}
  </section>
</main>

<!-- Modais Globais Interativos -->
{modais_html}

<!-- Rodapé Fiduciário Soberano -->
{footer_raw}

<script src="js/app.js?v=2.1"></script>
</body>
</html>
'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_completo)

print('Plataforma Áurea Codex compilada com sucesso em index.html!')
print(f'Tamanho do arquivo: {len(html_completo)} bytes')

