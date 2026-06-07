---
title: "DeFi: o sistema financeiro que funciona sem ninguém no meio"
date: "2026-06-07"
excerpt: "O DeFi tira o banco da equação e coloca matemática no lugar. Entenda como smart contracts, DEXs e protocolos de lending funcionam por baixo."
category: blockchain
tags: [defi, ethereum, smart-contracts, blockchain, web3]
---

Bancos existem para resolver um problema de confiança. Você não confia no desconhecido, então coloca um intermediário no meio — o banco — que garante que a transação acontece. O DeFi tira esse intermediário e coloca matemática no lugar.

DeFi é Decentralized Finance. Protocolos financeiros rodando em blockchains públicas, principalmente Ethereum. Sem empresa no controle, sem conta para abrir, sem pedir permissão.

![DeFi: primitivas e fluxo de valor](/images/defi-primitivas.svg)

---

## O que substitui o banco

O banco faz três coisas: guarda dinheiro, empresta e facilita transferências. O DeFi replica cada uma com smart contracts — programas que rodam na blockchain e executam sozinhos quando as condições batem.

Smart contract não tem CEO. Não tem suporte. Não fecha no feriado. O código define as regras e as cumpre. Condição A verdadeira, executa B. Sem exceção.

O custo disso: bug no código é permanente. Não tem hotfix numa blockchain. O que foi deployado fica.

---

## As três primitivas do DeFi

**1. Empréstimo e colateral (Lending)**

Em protocolos como Aave e Compound, você deposita um ativo como colateral e toma emprestado outro. Sem análise de crédito. O contrato monitora a proporção entre colateral e dívida em tempo real — se cair abaixo do limite, liquida automaticamente.

Taxa de juros por algoritmo: oferta e demanda de liquidez no pool, não decisão de comitê.

**2. Exchange descentralizada (DEX)**

Exchange tradicional tem order book — fila de compradores e vendedores. DEX como Uniswap tem pool de liquidez: dois ativos depositados num contrato na proporção que define o preço.

A fórmula é `x * y = k` — o produto das reservas é constante. Você compra X, o pool recebe Y e entrega X. Preço muda a cada troca. Pool pequeno em relação ao tamanho da operação significa impacto grande no preço — isso é slippage.

Quem deposita no pool recebe parte das taxas de cada transação. Esse é o yield.

**3. Stablecoin descentralizada**

DAI é gerada pelo Maker: você deposita ETH como colateral, o contrato emite DAI proporcionalmente, sempre com over-collateralization. Colateral cai de valor, o contrato liquida para garantir respaldo.

Nenhuma empresa emite DAI. O algoritmo segura o peg.

---

## O que muda em relação ao sistema tradicional

| | Sistema tradicional | DeFi |
|---|---|---|
| Acesso | Conta bancária, aprovação | Carteira, sem aprovação |
| Custódia | Banco guarda | Você guarda |
| Transparência | Opaco | Código público |
| Horário | Horário comercial | 24/7/365 |
| Reversibilidade | Chargebacks existem | Transações irreversíveis |

---

## Os riscos reais

DeFi não é sistema sem risco. Os riscos mudam de forma.

**Smart contract:** o código pode ter bug. Bilhões já foram drenados em exploits de contratos auditados. Auditoria reduz, não elimina.

**Liquidação:** em protocolos de empréstimo, queda rápida de preço liquida posições na hora. O mercado não avisa.

**Oracle:** contratos precisam do preço de ativos do mundo real. Oracles fornecem esses dados — e são pontos de falha. Manipulação de oracle já foi vetor de vários ataques.

**Governança:** muitos protocolos são controlados por tokens. Quem tem mais tokens decide os parâmetros. Concentração de poder existe.

---

DeFi não é sistema perfeito. É sistema diferente — trade-offs explícitos, regras visíveis, sem intermediário para culpar quando dá errado.

Essa é a proposta. Você decide se vale.
