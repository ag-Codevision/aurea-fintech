// AUREA CODEX - Client Engine
const CodexState = {
  activeRoute: 'visao-geral',
  astralMode: false,
  pulsoHorasRestantes: 718,
  transacoes: [
    {
      id: 'ARC-9902-AU',
      dataLiturgica: '24/10/2026 • 14:32 ZUR',
      ativoCodigo: 'AU',
      descricao: 'Liquidacao de 250 Barras Good Delivery',
      volume: 'R$ 142.650.000,00',
      volumeNum: 142650000,
      contraparte: 'Credit Suisse Gold Vault Zurich',
      status: 'Concluido com Fe Publica',
      hash: '0x8f2a1b94c5e3d7729f82...c10b',
      cartorio: 'Cartorio Notarial de Zurique n 12'
    },
    {
      id: 'ARC-9884-EQ',
      dataLiturgica: '23/10/2026 • 09:15 GVA',
      ativoCodigo: 'PR',
      descricao: 'Dividendos de Infraestrutura Portuaria Privada',
      volume: 'R$ 38.420.000,00',
      volumeNum: 38420000,
      contraparte: 'Cartorio de Titulos e Notas de Sao Paulo',
      status: 'Concluido com Fe Publica',
      hash: '0x4e77da1248cc9201fb33...e441',
      cartorio: '1 Oficio de Notas da Capital'
    },
    {
      id: 'ARC-9871-GT',
      dataLiturgica: '21/10/2026 • 18:00 LON',
      ativoCodigo: 'GR',
      descricao: 'Emissao de Carta de Fianca Soberana Standby',
      volume: 'R$ 510.000.000,00',
      volumeNum: 510000000,
      contraparte: 'London Court of International Arbitration',
      status: 'Concluido com Fe Publica',
      hash: '0xaa931e4088d2274100c2...990f',
      cartorio: 'Rolls Building Commercial Court London'
    }
  ],
  bunkers: [
    {
      id: 'alpina',
      numero: 'I',
      nome: 'BASTIAO ALPINA',
      jurisdicao: 'SAO GOTARDO - CONFEDERACAO SUICA',
      status: 'Lacre Inviolado',
      alocacao: '14.850 kg',
      alocacaoDesc: 'Au 999.9 Good Delivery',
      blindagem: '-450m Granito',
      resistencia: 'Resistencia Sismica IX',
      ciclo: 'Bimestral',
      proximaAuditoria: '18 Dias',
      descricao: 'Reserva fisica central contida sob placa macica de granito alpino. Sentinela armada privada com duplo cordao de contencao e redundancia barometrica continua.',
      certificacao: 'ISO-17025 / CODELIST ALP-09',
      temperatura: '14.2 C',
      pressao: '1013.2 hPa',
      faraday: '145 dB (Isolamento Maximo)',
      guardioes: 'Guarda Suica Fiduciaria Privada'
    },
    {
      id: 'titanio',
      numero: 'II',
      nome: 'MERIDIANO TITANIO',
      jurisdicao: 'ESTOCOLMO - REINO DA SUECIA',
      status: 'Gaiola Faraday Ativa',
      alocacao: 'Titanio Grau 5',
      alocacaoDesc: 'Ponto de Fusao 1.668 C',
      blindagem: 'EMP Shield',
      resistencia: 'Atenuacao > 120 dB',
      ciclo: 'Trimestral',
      proximaAuditoria: '42 Dias',
      descricao: 'Camara hermetica blindada contra pulsos eletromagneticos, tempestades solares geomagneticas de classe X e ataques de radiacao ionizante.',
      certificacao: 'MIL-STD-188-125 EMP HARDENED',
      temperatura: '16.8 C',
      pressao: '1015.0 hPa',
      faraday: '138 dB',
      guardioes: 'Operadores Notariais Credenciados'
    },
    {
      id: 'lacustre',
      numero: 'III',
      nome: 'CRIPTA LACUSTRE',
      jurisdicao: 'GENEBRA / VALAIS - CONFEDERACAO SUICA',
      status: 'Quorum Hermetico Pleno',
      alocacao: '5 de 7 Chaves',
      alocacaoDesc: 'Protocolo Shamir Subterraneo',
      blindagem: '-120m Rocha Calcaria',
      resistencia: 'Inundacao Pressurizada',
      ciclo: 'Mensal',
      proximaAuditoria: '04 Dias',
      descricao: 'Instalacao hiper-reclusa subaquatica para salvaguarda de contratos de dinastia original, titulos reais perpetuos e certificados primarios de barras de ouro.',
      certificacao: 'FINMA HIGH-SECURITY CLASS V',
      temperatura: '12.5 C',
      pressao: '1020.1 hPa',
      faraday: '130 dB',
      guardioes: 'Quorum de 3 Tabeliaes e 2 Guardioes'
    }
  ],
  ativos: [
    {
      id: 'AU-BAR-01',
      tipo: 'Ouro Fisico',
      codigo: 'Au 999.9',
      serie: 'CH-ZG-2026-88410',
      peso: '12,500 kg (400 oz t)',
      pureza: '99.99% Fine Gold',
      ensaio: 'Argor-Heraeus SA Refiners',
      bunker: 'Bastiao Alpina - Gaveta A-04',
      valorEstimado: 'R$ 5.920.000,00',
      status: 'Em Deposito Inviolavel'
    },
    {
      id: 'AU-BAR-02',
      tipo: 'Ouro Fisico',
      codigo: 'Au 999.9',
      serie: 'CH-ZG-2026-88411',
      peso: '12,500 kg (400 oz t)',
      pureza: '99.99% Fine Gold',
      ensaio: 'Valcambi SA Balerna',
      bunker: 'Bastiao Alpina - Gaveta A-05',
      valorEstimado: 'R$ 5.920.000,00',
      status: 'Em Deposito Inviolavel'
    },
    {
      id: 'PT-BAR-01',
      tipo: 'Platina Pura',
      codigo: 'Pt 999.5',
      serie: 'PT-995-10294',
      peso: '5,000 kg',
      pureza: '99.95% Pure Platinum',
      ensaio: 'PAMP Suisse Haute Joaillerie',
      bunker: 'Meridiano Titanio - Gaveta T-12',
      valorEstimado: 'R$ 1.860.000,00',
      status: 'Em Deposito Inviolavel'
    },
    {
      id: 'PD-BAR-01',
      tipo: 'Paladio Nobre',
      codigo: 'Pd 999.5',
      serie: 'PD-882-99014',
      peso: '3,000 kg',
      pureza: '99.95% Pure Palladium',
      ensaio: 'C. Hafner GmbH & Co',
      bunker: 'Meridiano Titanio - Gaveta T-18',
      valorEstimado: 'R$ 940.000,00',
      status: 'Em Deposito Inviolavel'
    },
    {
      id: 'TP-SEC-01',
      tipo: 'Titulos Perpetuos',
      codigo: 'TP-IPCA+',
      serie: 'TIT-SOB-2026-X01',
      peso: 'Emissao Soberana',
      pureza: 'Triple-A Fiduciario',
      ensaio: 'Cartorio de Registros da Haia',
      bunker: 'Cripta Lacustre - Arquivo Notarial 01',
      valorEstimado: 'R$ 12.800.000.000,00',
      status: 'Custodia Fiduciaria Ativa'
    }
  ]
};

window.CodexState = CodexState;

document.addEventListener('DOMContentLoaded', () => {
  carregarTransacoesLocais();
  configurarRoteamento();
  iniciarRelogioLiturgico();
  iniciarContadorPulso();
  renderizarTabelaTransacoes();
  renderizarTabelaAtivos();
});

function carregarTransacoesLocais() {
  const salvas = localStorage.getItem('aurea_transacoes');
  if (salvas) {
    try {
      CodexState.transacoes = JSON.parse(salvas);
    } catch (e) {
      console.error('Erro ao ler transacoes locais', e);
    }
  }
}

function salvarTransacoesLocais() {
  localStorage.setItem('aurea_transacoes', JSON.stringify(CodexState.transacoes));
}

function configurarRoteamento() {
  window.addEventListener('hashchange', lidarComMudancaDeRota);
  const hashInicial = window.location.hash.replace('#/', '').replace('#', '');
  if (hashInicial) {
    navegarPara(hashInicial);
  } else {
    navegarPara('visao-geral');
  }
}

function navegarPara(rota) {
  if (!rota) rota = 'visao-geral';
  CodexState.activeRoute = rota;
  window.location.hash = '#/' + rota;
  
  const secoes = document.querySelectorAll('.codex-view-section');
  secoes.forEach(secao => {
    if (secao.id === 'view-' + rota) {
      secao.classList.remove('hidden');
    } else {
      secao.classList.add('hidden');
    }
  });

  const navLinks = document.querySelectorAll('[data-nav-path]');
  navLinks.forEach(link => {
    const caminho = link.getAttribute('data-nav-path');
    if (caminho === rota) {
      link.classList.add('active', 'text-primary');
      link.classList.remove('text-on-surface-variant');
    } else {
      link.classList.remove('active', 'text-primary');
      link.classList.add('text-on-surface-variant');
    }
  });

  fecharMenuMobile();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function lidarComMudancaDeRota() {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  if (hash && hash !== CodexState.activeRoute) {
    navegarPara(hash);
  }
}

function alternarMovimentosCelestes() {
  CodexState.astralMode = !CodexState.astralMode;
  const overlayAstros = document.getElementById('astral-overlay');
  const btnAstral = document.getElementById('btn-astral-toggle');
  const btnAstralMob = document.getElementById('btn-astral-toggle-mob');
  const paineisAstral = document.querySelectorAll('.astral-specific-panel');

  if (CodexState.astralMode) {
    if (overlayAstros) {
      overlayAstros.classList.remove('opacity-0');
      overlayAstros.classList.add('opacity-25', 'pointer-events-none');
    }
    if (btnAstral) {
      btnAstral.classList.add('bg-primary', 'text-on-primary', 'border-primary');
      btnAstral.classList.remove('bg-surface-container-lowest', 'text-primary');
      btnAstral.innerHTML = '<span class="text-tertiary-container animate-nodal-pulse">✦</span><span class="hidden xl:inline"> Astral Ativo</span>';
    }
    if (btnAstralMob) {
      btnAstralMob.innerHTML = '✦ Modo Astral Ativado';
    }
    paineisAstral.forEach(p => p.classList.remove('hidden'));
    exibirNotificacao('Alinhamento Celestial Ativado', 'Coordenadas orbitais e efemérides sincronizadas em tempo contínuo.');
  } else {
    if (overlayAstros) {
      overlayAstros.classList.add('opacity-0', 'pointer-events-none');
      overlayAstros.classList.remove('opacity-25');
    }
    if (btnAstral) {
      btnAstral.classList.remove('bg-primary', 'text-on-primary', 'border-primary');
      btnAstral.classList.add('bg-surface-container-lowest', 'text-primary');
      btnAstral.innerHTML = '<span class="text-primary animate-nodal-pulse">☿</span><span class="hidden xl:inline"> Astral</span>';
    }
    if (btnAstralMob) {
      btnAstralMob.innerHTML = '☿ Ativar Movimentos Celestes';
    }
    paineisAstral.forEach(p => p.classList.add('hidden'));
  }
}

function iniciarRelogioLiturgico() {
  const elemRelogio = document.getElementById('relogio-liturgico-top');
  function atualizar() {
    const agora = new Date();
    const zurichTime = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'Europe/Zurich',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(agora);
    
    if (elemRelogio) {
      elemRelogio.innerText = zurichTime + ' ZURICH (UTC+1)';
    }
  }
  atualizar();
  setInterval(atualizar, 1000);
}

function iniciarContadorPulso() {
  const elemHoras = document.getElementById('contador-pulso-horas');
  const elemBarra = document.getElementById('barra-pulso-vida');

  function atualizarPulso() {
    if (elemHoras) {
      const dias = Math.floor(CodexState.pulsoHorasRestantes / 24);
      const horas = CodexState.pulsoHorasRestantes % 24;
      elemHoras.innerText = dias + ' dias e ' + horas + ' horas';
    }
    if (elemBarra) {
      const porcentagem = (CodexState.pulsoHorasRestantes / 720) * 100;
      elemBarra.style.width = porcentagem + '%';
    }
  }
  atualizarPulso();
}

function emitirPulsoDeVida() {
  CodexState.pulsoHorasRestantes = 720;
  iniciarContadorPulso();
  
  const btn = document.getElementById('btn-emitir-pulso');
  if (btn) {
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">sync</span> Chancelando Pulso...';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.innerHTML = '<span class="text-primary-container font-bold">✓</span> Pulso Vitalício Selado!';
      exibirNotificacao(
        'Pulso de Vida Carimbado com Sucesso',
        'Atestado nº #REG-LX-8890 renovado por mais 720 horas sob jurisdição fiduciária suíça.'
      );
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 3000);
    }, 900);
  }
}

function abrirModalChavePrivada() {
  const modal = document.getElementById('modal-chave-privada');
  const input = document.getElementById('input-chave-sigil');
  const feedback = document.getElementById('feedback-chave-privada');
  if (modal) modal.classList.remove('hidden');
  if (input) {
    input.value = '';
    input.focus();
  }
  if (feedback) feedback.classList.add('hidden');
}

function fecharModalChavePrivada() {
  const modal = document.getElementById('modal-chave-privada');
  if (modal) modal.classList.add('hidden');
}

function validarChavePrivada() {
  const input = document.getElementById('input-chave-sigil');
  const feedback = document.getElementById('feedback-chave-privada');
  const valor = input ? input.value.trim().toUpperCase() : '';

  if (!valor) {
    if (feedback) {
      feedback.classList.remove('hidden', 'text-primary', 'border-primary');
      feedback.classList.add('text-error', 'border-error-container');
      feedback.innerHTML = '⚠ Insira uma chave criptográfica ou identificador inviolável.';
    }
    return;
  }

  if (feedback) {
    feedback.classList.remove('hidden', 'text-error', 'border-error-container');
    feedback.classList.add('text-primary', 'border-primary');
    feedback.innerHTML = `
      <div class="flex flex-col gap-2 text-left">
        <div class="flex items-center gap-2">
          <span class="text-tertiary font-bold text-lg">✦</span>
          <span class="font-headline-sm uppercase tracking-wider text-primary">Atestado Notarial de Herdeiro Legítimo</span>
        </div>
        <p class="font-body-sm text-on-surface-variant leading-relaxed">
          Chave <strong>${valor}</strong> verificada com quórum pleno. Despacho dinástico aberto sob sigilo bancário helvético. Acesso ao cofre central deferido.
        </p>
        <div class="flex justify-between items-center text-label-sm uppercase tracking-widest pt-2 border-t border-primary/20 text-on-surface-variant">
          <span>Protocolo: SUI-HAIA-8891</span>
          <span class="text-primary">Fé Pública Homologada</span>
        </div>
      </div>
    `;
  }
}

function abrirModalNovaTransacao() {
  const modal = document.getElementById('modal-nova-transacao');
  if (modal) modal.classList.remove('hidden');
}

function fecharModalNovaTransacao() {
  const modal = document.getElementById('modal-nova-transacao');
  if (modal) modal.classList.add('hidden');
}

function submeterNovaTransacao(event) {
  event.preventDefault();
  const ativo = document.getElementById('form-transacao-ativo').value;
  const volume = document.getElementById('form-transacao-volume').value;
  const contraparte = document.getElementById('form-transacao-contraparte').value;
  const cofre = document.getElementById('form-transacao-cofre').value;

  const novoId = 'ARC-' + Math.floor(1000 + Math.random() * 9000) + '-' + ativo;
  const agora = new Date();
  const dataLiturgica = agora.toLocaleDateString('pt-BR') + ' • ' + agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) + ' ZUR';
  
  let descAtivo = 'Transferência Notarial Soberana';
  if (ativo === 'AU') descAtivo = 'Alocação Física de Lingotes Au 999.9 Good Delivery';
  if (ativo === 'PT') descAtivo = 'Custódia Fria de Platina Pura Pt 999.5';
  if (ativo === 'PR') descAtivo = 'Assentamento de Dividendos Perpétuos de Infraestrutura';
  if (ativo === 'GT') descAtivo = 'Carta de Fiança Soberana Standby';
  if (ativo === 'ZK') descAtivo = 'Rebalanceamento Criptográfico Shamir MPC';

  const valorNum = Number(volume) || 1000000;
  const valorFormatado = 'R$ ' + valorNum.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const hashGerado = '0x' + Array.from({length: 16}, () => Math.floor(Math.random()*16).toString(16)).join('') + '...haia';

  const novaTransacao = {
    id: novoId,
    dataLiturgica: dataLiturgica,
    ativoCodigo: ativo,
    descricao: descAtivo,
    volume: valorFormatado,
    volumeNum: valorNum,
    contraparte: contraparte || 'Câmara de Custódia Notarial de Zurique',
    status: 'Concluído com Fé Pública',
    hash: hashGerado,
    cartorio: cofre || 'Bastião Alpina · São Gotardo'
  };

  CodexState.transacoes.unshift(novaTransacao);
  salvarTransacoesLocais();
  renderizarTabelaTransacoes();

  // Injetar também no settlements-container da visão Transações Rituais
  const settlementsContainer = document.getElementById('settlements-container');
  if (settlementsContainer) {
    const novaLinhaDiv = document.createElement('div');
    novaLinhaDiv.className = 'settlement-row cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-4 p-4 bg-surface-container-low hover:bg-surface-container-high transition-colors items-center';
    novaLinhaDiv.setAttribute('data-category', ativo);
    novaLinhaDiv.onclick = function() {
      selectSettlement(this, novoId, hashGerado, '5 de 5 Guardiões (Unanimidade Sacra)', cofre, valorFormatado, contraparte, descAtivo);
    };
    novaLinhaDiv.innerHTML = `
      <div class="md:col-span-3 flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <span class="w-6 h-6 bg-surface-container-highest flex items-center justify-center font-headline-sm text-label-sm text-primary">${ativo}</span>
          <span class="font-headline-sm text-headline-sm text-primary tracking-wider">${novoId}</span>
        </div>
        <span class="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">${dataLiturgica}</span>
      </div>
      <div class="md:col-span-5 flex flex-col gap-1">
        <span class="font-body-md text-body-md text-on-surface font-medium">${descAtivo}</span>
        <span class="font-body-sm text-body-sm text-on-surface-variant truncate">${cofre} · Liquidação Notarial</span>
      </div>
      <div class="md:col-span-2 flex flex-col md:items-end justify-center">
        <span class="font-headline-sm text-headline-sm text-secondary-fixed">${valorFormatado}</span>
        <span class="font-label-sm text-label-sm text-on-surface-variant">Liquidação Real</span>
      </div>
      <div class="md:col-span-2 flex items-center justify-start md:justify-center">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-highest text-primary font-label-sm text-label-sm uppercase tracking-wider">
          <span class="w-1.5 h-1.5 bg-[#8F282A]"></span> FÉ PÚBLICA
        </span>
      </div>
    `;
    settlementsContainer.insertBefore(novaLinhaDiv, settlementsContainer.firstChild);
  }

  fecharModalNovaTransacao();

  exibirNotificacao(
    'Ordem Ritual Lavrada com Fé Pública',
    `Protocolo ${novoId} registrado no Livro Sacro com desembaraço T+0 e hash de consenso.`
  );
}

function renderizarTabelaTransacoes(filtro = '') {
  const tbodyPrincipal = document.getElementById('tbody-transacoes-rituais');
  const tbodyVisaoGeral = document.getElementById('tbody-transacoes-visao-geral');
  
  const termo = filtro.toLowerCase();
  const listaFiltrada = CodexState.transacoes.filter(t => {
    return t.id.toLowerCase().includes(termo) ||
           t.descricao.toLowerCase().includes(termo) ||
           t.contraparte.toLowerCase().includes(termo) ||
           t.ativoCodigo.toLowerCase().includes(termo);
  });

  const gerarLinha = (t) => `
    <tr class="ceremonial-row transition-colors duration-200 border-b border-outline-variant/15 hover:bg-surface-container-high/60 cursor-pointer" onclick="abrirAuditoriaNotarialEspecifica('${t.id}')">
      <td class="py-4 px-5 font-mono text-body-sm text-primary font-semibold">${t.id}</td>
      <td class="py-4 px-5 font-label-sm text-label-sm uppercase text-on-surface-variant">${t.dataLiturgica}</td>
      <td class="py-4 px-5">
        <div class="flex items-center gap-2 text-on-surface">
          <span class="text-primary font-bold px-1.5 py-0.5 bg-surface-container border border-primary-container/30 text-label-sm">${t.ativoCodigo}</span>
          <span class="font-body-md">${t.descricao}</span>
        </div>
      </td>
      <td class="py-4 px-5 text-right font-headline-sm text-headline-sm text-on-surface">${t.volume}</td>
      <td class="py-4 px-5 font-body-sm text-on-surface-variant hidden md:table-cell">${t.contraparte}</td>
      <td class="py-4 px-5 text-center">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-low border border-primary-container/40 text-primary font-label-sm text-label-sm uppercase tracking-wider">
          <span class="w-1.5 h-1.5 bg-tertiary-container rotate-45"></span> ${t.status}
        </span>
      </td>
    </tr>
  `;

  if (tbodyPrincipal) {
    tbodyPrincipal.innerHTML = listaFiltrada.length > 0 
      ? listaFiltrada.map(t => gerarLinha(t)).join('')
      : '<tr><td colspan="6" class="py-8 text-center text-on-surface-variant">Nenhum assentamento localizado com o filtro especificado.</td></tr>';
  }

  if (tbodyVisaoGeral) {
    tbodyVisaoGeral.innerHTML = CodexState.transacoes.slice(0, 4).map(t => gerarLinha(t)).join('');
  }
}

function renderizarTabelaAtivos(filtro = '') {
  const tbody = document.getElementById('tbody-arquivo-ativos');
  if (!tbody) return;

  const termo = filtro.toLowerCase();
  const filtrados = CodexState.ativos.filter(a => {
    return a.tipo.toLowerCase().includes(termo) ||
           a.codigo.toLowerCase().includes(termo) ||
           a.serie.toLowerCase().includes(termo) ||
           a.bunker.toLowerCase().includes(termo);
  });

  tbody.innerHTML = filtrados.map(a => `
    <tr class="ceremonial-row transition-colors duration-200 border-b border-outline-variant/15 hover:bg-surface-container-high/60 cursor-pointer" onclick="abrirDetalheAtivo('${a.id}')">
      <td class="py-4 px-5 font-mono text-body-sm text-primary font-bold">${a.serie}</td>
      <td class="py-4 px-5">
        <div class="flex items-center gap-2 text-on-surface">
          <span class="text-primary font-bold px-2 py-0.5 bg-surface-container border border-primary-container/30 text-label-sm">${a.codigo}</span>
          <span class="font-medium">${a.tipo}</span>
        </div>
      </td>
      <td class="py-4 px-5 font-body-sm text-on-surface-variant">${a.peso}</td>
      <td class="py-4 px-5 font-body-sm text-secondary">${a.pureza}</td>
      <td class="py-4 px-5 font-body-sm text-on-surface-variant hidden md:table-cell">${a.bunker}</td>
      <td class="py-4 px-5 text-right font-headline-sm text-primary">${a.valorEstimado}</td>
      <td class="py-4 px-5 text-center">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-low border border-primary-container/40 text-primary font-label-sm text-label-sm uppercase tracking-wider">
          <span class="w-1.5 h-1.5 bg-tertiary-container rotate-45"></span> ${a.status}
        </span>
      </td>
    </tr>
  `).join('');
}

function abrirInspecaoBunker(bunkerId) {
  const bunker = CodexState.bunkers.find(b => b.id === bunkerId) || CodexState.bunkers[0];
  const modal = document.getElementById('modal-inspecao-bunker');
  const conteudo = document.getElementById('conteudo-inspecao-bunker');

  if (conteudo) {
    conteudo.innerHTML = `
      <div class="space-y-6 text-left">
        <div class="flex items-start justify-between border-b border-primary-container/30 pb-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-tertiary-container font-bold text-headline-sm">♦</span>
              <span class="font-label-sm text-label-sm text-primary uppercase tracking-[0.25em]">Laudo Notarial de Telemetria Fiduciária</span>
            </div>
            <h3 class="font-headline-lg text-headline-lg text-on-surface uppercase mt-1">${bunker.nome}</h3>
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">${bunker.jurisdicao}</span>
          </div>
          <div class="text-right">
            <span class="inline-block px-3 py-1 bg-surface border border-primary text-primary font-label-sm uppercase tracking-wider">
              ${bunker.status}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="bg-surface-container p-3 border border-outline-variant/30">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase block">Temperatura</span>
            <span class="font-headline-sm text-primary mt-1 block">${bunker.temperatura}</span>
          </div>
          <div class="bg-surface-container p-3 border border-outline-variant/30">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase block">Pressão Barométrica</span>
            <span class="font-headline-sm text-on-surface mt-1 block">${bunker.pressao}</span>
          </div>
          <div class="bg-surface-container p-3 border border-outline-variant/30">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase block">Atenuação Faraday</span>
            <span class="font-headline-sm text-secondary-fixed mt-1 block">${bunker.faraday}</span>
          </div>
          <div class="bg-surface-container p-3 border border-outline-variant/30">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase block">Reserva Alocada</span>
            <span class="font-headline-sm text-primary mt-1 block">${bunker.alocacao}</span>
          </div>
        </div>

        <div class="space-y-2">
          <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary">Relatório Descritivo do Bastião</span>
          <p class="font-body-md text-on-surface-variant leading-relaxed bg-surface-container p-4 border border-outline-variant/20">
            ${bunker.descricao}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-primary-container/20 text-label-sm text-on-surface-variant">
          <div>Certificação: <span class="text-on-surface font-semibold">${bunker.certificacao}</span></div>
          <div>Guarda: <span class="text-primary font-semibold">${bunker.guardioes}</span></div>
        </div>

        <div class="pt-2 text-right">
          <button class="ceremonial-btn px-6 py-2.5 bg-primary text-on-primary font-label-md uppercase tracking-[0.2em] font-semibold hover:bg-primary-fixed" onclick="fecharModalInspecaoBunker()">
            Fechar Laudo
          </button>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.remove('hidden');
}

function fecharModalInspecaoBunker() {
  const modal = document.getElementById('modal-inspecao-bunker');
  if (modal) modal.classList.add('hidden');
}

function abrirDetalheAtivo(ativoId) {
  const ativo = CodexState.ativos.find(a => a.id === ativoId) || CodexState.ativos[0];
  const modal = document.getElementById('modal-detalhe-ativo');
  const conteudo = document.getElementById('conteudo-detalhe-ativo');

  if (conteudo) {
    conteudo.innerHTML = `
      <div class="space-y-6 text-left">
        <div class="flex items-start justify-between border-b border-primary-container/30 pb-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-primary font-bold text-headline-sm">☩</span>
              <span class="font-label-sm text-label-sm text-primary uppercase tracking-[0.25em]">Certidão Individual de Lingote Sacro</span>
            </div>
            <h3 class="font-headline-lg text-headline-lg text-on-surface uppercase mt-1">${ativo.tipo} ${ativo.codigo}</h3>
            <span class="font-mono text-body-sm text-primary">Série Notarial: ${ativo.serie}</span>
          </div>
          <span class="inline-block px-3 py-1 bg-surface border border-primary text-primary font-label-sm uppercase tracking-wider">
            ${ativo.status}
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="bg-surface-container p-3 border border-outline-variant/30">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase block">Peso / Massa Fina</span>
            <span class="font-headline-sm text-on-surface mt-1 block">${ativo.peso}</span>
          </div>
          <div class="bg-surface-container p-3 border border-outline-variant/30">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase block">Ensaio Metalúrgico</span>
            <span class="font-headline-sm text-primary mt-1 block">${ativo.pureza}</span>
          </div>
          <div class="bg-surface-container p-3 border border-outline-variant/30">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase block">Avaliação Contábil</span>
            <span class="font-headline-sm text-primary mt-1 block">${ativo.valorEstimado}</span>
          </div>
        </div>

        <div class="bg-surface-container p-4 border border-outline-variant/20 space-y-2">
          <div class="flex justify-between items-center text-body-sm">
            <span class="text-on-surface-variant">Refinador e Ensaísta Homologado:</span>
            <span class="text-on-surface font-semibold">${ativo.ensaio}</span>
          </div>
          <div class="flex justify-between items-center text-body-sm">
            <span class="text-on-surface-variant">Localização Geológica Atual:</span>
            <span class="text-primary font-semibold">${ativo.bunker}</span>
          </div>
          <div class="flex justify-between items-center text-body-sm">
            <span class="text-on-surface-variant">Padrão Internacional:</span>
            <span class="text-secondary-fixed">LBMA Good Delivery Standard</span>
          </div>
        </div>

        <div class="pt-2 text-right">
          <button class="ceremonial-btn px-6 py-2.5 bg-primary text-on-primary font-label-md uppercase tracking-[0.2em] font-semibold hover:bg-primary-fixed" onclick="fecharModalDetalheAtivo()">
            Fechar Registro
          </button>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.remove('hidden');
}

function fecharModalDetalheAtivo() {
  const modal = document.getElementById('modal-detalhe-ativo');
  if (modal) modal.classList.add('hidden');
}

function abrirAuditoriaNotarial() {
  abrirAuditoriaNotarialEspecifica(CodexState.transacoes[0].id);
}

function abrirAuditoriaNotarialEspecifica(transacaoId) {
  const transacao = CodexState.transacoes.find(t => t.id === transacaoId) || CodexState.transacoes[0];
  const modal = document.getElementById('modal-auditoria-notarial');
  const certidaoArea = document.getElementById('conteudo-auditoria-notarial');

  if (certidaoArea) {
    certidaoArea.innerHTML = `
      <div class="p-8 border border-primary-container/60 bg-surface-container-lowest relative text-left notarial-certificate">
        <span class="absolute top-2 left-2 text-primary text-label-md select-none">+</span>
        <span class="absolute top-2 right-2 text-primary text-label-md select-none">+</span>
        <span class="absolute bottom-2 left-2 text-primary text-label-md select-none">+</span>
        <span class="absolute bottom-2 right-2 text-primary text-label-md select-none">+</span>

        <div class="text-center pb-6 border-b border-primary-container/30">
          <div class="font-headline-sm text-primary tracking-[0.3em] uppercase">REPÚBLICA E CANTONS DA SUÍÇA</div>
          <div class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.25em] mt-1">APOSTILA DA CONVENÇÃO DA HAIA DE 5 DE OUTUBRO DE 1961</div>
          <h2 class="font-headline-xl text-headline-lg text-on-surface uppercase mt-3 tracking-wider font-normal">
            Instrumento Público Notarial de Liquidação Fiduciária
          </h2>
          <span class="font-mono text-body-sm text-primary tracking-widest mt-1 block">PROTOCOLO ARCANE: ${transacao.id}</span>
        </div>

        <div class="py-6 space-y-4 font-body-md text-on-surface-variant leading-relaxed">
          <p>
            Certifico e dou fé pública que, em sessão solene realizada no meridiano regulamentar sob os auspícios do <strong>AUREA CODEX PROTOCOL</strong>, procedeu-se à liquidação física e imutável do seguinte registro de custódia patrimonial:
          </p>
          <div class="bg-surface-container p-4 border border-outline-variant/30 space-y-2 font-mono text-body-sm">
            <div><strong>NATUREZA DO ATIVO:</strong> ${transacao.descricao} (${transacao.ativoCodigo})</div>
            <div><strong>VOLUME HOMOLOGADO:</strong> <span class="text-primary font-bold text-base">${transacao.volume}</span></div>
            <div><strong>CONTRAPARTE NOTARIAL:</strong> ${transacao.contraparte}</div>
            <div><strong>DATA/HORA LITÚRGICA:</strong> ${transacao.dataLiturgica}</div>
            <div><strong>HASH CRIPTOGRÁFICO DE CONSENSO:</strong> ${transacao.hash}</div>
            <div><strong>CARTÓRIO REGISTRADOR:</strong> ${transacao.cartorio}</div>
          </div>
          <p>
            A presente escritura goza de presunção de veracidade absoluta, inquestionabilidade fiduciária e irretratabilidade jurisdicional perante qualquer corte arbitral soberana ou tribunal de sucessões dinásticas.
          </p>
        </div>

        <div class="pt-6 border-t border-primary-container/30 flex flex-col sm:flex-row justify-between items-end gap-6">
          <div>
            <div class="w-24 h-24 border border-primary flex items-center justify-center relative bg-surface-container">
              <svg class="w-16 h-16 text-primary animate-astrolabe-compass" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="1"></circle>
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-dasharray="2 2"></circle>
                <polygon points="50,15 58,45 85,50 58,55 50,85 42,55 15,50 42,45" fill="currentColor" opacity="0.3"></polygon>
              </svg>
              <span class="absolute text-[8px] font-label-sm text-primary uppercase">SIGILLUM</span>
            </div>
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-2 block">Selo Notarial Helvético</span>
          </div>

          <div class="text-right space-y-1">
            <div class="font-serif italic text-primary text-xl">Tito Valério Codex, Tabelião Primus</div>
            <div class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tabelião Regente da Curia Prima MMXXVI</div>
            <div class="font-label-sm text-label-sm text-primary uppercase">Fé Pública Plena e Inviolável</div>
          </div>
        </div>

        <div class="mt-8 flex justify-end gap-3 pt-4 border-t border-outline-variant/20">
          <button class="ceremonial-btn px-4 py-2 border border-outline-variant text-on-surface font-label-md uppercase tracking-wider hover:border-primary" onclick="window.print()">
            Imprimir Certidão
          </button>
          <button class="ceremonial-btn px-6 py-2 bg-primary text-on-primary font-label-md uppercase tracking-wider font-semibold hover:bg-primary-fixed" onclick="fecharModalAuditoriaNotarial()">
            Concluir Inspeção
          </button>
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.remove('hidden');
}

function fecharModalAuditoriaNotarial() {
  const modal = document.getElementById('modal-auditoria-notarial');
  if (modal) modal.classList.add('hidden');
}

function alternarMenuMobile() {
  const menu = document.getElementById('menu-mobile-gaveta');
  if (menu) {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }
}

function fecharMenuMobile() {
  const menu = document.getElementById('menu-mobile-gaveta');
  if (menu) menu.classList.add('hidden');
}

function exibirNotificacao(titulo, mensagem) {
  const toast = document.getElementById('codex-toast');
  const toastTitulo = document.getElementById('toast-titulo');
  const toastMensagem = document.getElementById('toast-mensagem');

  if (toast && toastTitulo && toastMensagem) {
    toastTitulo.innerText = titulo;
    toastMensagem.innerText = mensagem;
    toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    
    setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    }, 4500);
  }
}

// Funções de compatibilidade das telas originais
function solicitarInspecao(cofreNome) {
  const nome = (cofreNome || '').toLowerCase();
  if (nome.includes('alpina') || nome.includes('gotardo')) {
    abrirInspecaoBunker('alpina');
  } else if (nome.includes('titan') || nome.includes('estocolmo')) {
    abrirInspecaoBunker('titanio');
  } else {
    abrirInspecaoBunker('lacustre');
  }
}

function verificarEntropia(matrizNome) {
  exibirNotificacao(
    'Protocolo de Integridade MPC Executado',
    'Entropia física atestada em 256 bits com dispersão galvânica perfeita no bunker.'
  );
}

function consultarDespacho(arquivoNome) {
  abrirAuditoriaNotarial();
}

function executarRitoDesembaraco(e) {
  if (e && e.preventDefault) e.preventDefault();
  const logBox = document.getElementById("terminalLog");
  if (logBox) {
    logBox.classList.remove("hidden");
    logBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  exibirNotificacao('Rito de Desembaraço Notarial', 'Quórum atestado. Despacho lançado nos livros invioláveis.');
}

function gerarAtestadoPDF() {
  abrirAuditoriaNotarial();
}

function switchLedgerTab(tabBtn, category) {
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.classList.remove('bg-primary', 'text-on-primary', 'font-medium');
    btn.classList.add('bg-surface-container-lowest', 'text-on-surface-variant');
  });
  if (tabBtn) {
    tabBtn.classList.remove('bg-surface-container-lowest', 'text-on-surface-variant');
    tabBtn.classList.add('bg-primary', 'text-on-primary', 'font-medium');
  }
  
  const rows = document.querySelectorAll('.settlement-row');
  rows.forEach(row => {
    if (category === 'ALL' || row.getAttribute('data-category') === category) {
      row.style.display = 'grid';
    } else {
      row.style.display = 'none';
    }
  });
}

function selectSettlement(element, protocol, hash, quorum, jurisdiction, value, counterparty, summary) {
  document.querySelectorAll('.settlement-row').forEach(row => {
    row.classList.remove('bg-surface-container-high/60');
  });
  if (element) {
    element.classList.add('bg-surface-container-high/60');
  }

  const p = document.getElementById('inspected-protocol');
  const h = document.getElementById('inspected-hash');
  const q = document.getElementById('inspected-quorum');
  const j = document.getElementById('inspected-jurisdiction');
  const v = document.getElementById('inspected-value');
  const c = document.getElementById('inspected-counterparty');
  const s = document.getElementById('inspected-summary');

  if (p) p.innerText = protocol;
  if (h) h.innerText = hash;
  if (q) q.innerText = quorum;
  if (j) j.innerText = jurisdiction;
  if (v) v.innerText = value;
  if (c) c.innerText = counterparty;
  if (s) s.innerText = summary;
}

function triggerAttestationModal(protocol) {
  abrirAuditoriaNotarialEspecifica(protocol);
}

function closeAttestationModal() {
  fecharModalAuditoriaNotarial();
}

function validarSigilRapido() {
  const input = document.getElementById('input-chave-sigil-rapido');
  const valor = input ? input.value.trim().toUpperCase() : '';
  abrirModalChavePrivada();
  if (valor) {
    const inputModal = document.getElementById('input-chave-sigil');
    if (inputModal) {
      inputModal.value = valor;
      validarChavePrivada();
    }
  }
}

function filtrarSettlementsPorTexto(termo) {
  const t = (termo || '').toLowerCase();
  const rows = document.querySelectorAll('.settlement-row');
  rows.forEach(row => {
    const texto = row.innerText.toLowerCase();
    if (texto.includes(t)) {
      row.style.display = 'grid';
    } else {
      row.style.display = 'none';
    }
  });
}
