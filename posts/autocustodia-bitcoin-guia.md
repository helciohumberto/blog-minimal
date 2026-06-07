---
title: "Not your keys, not your coins: guia definitivo para guardar Bitcoin sem depender de ninguém"
date: "2026-06-07"
excerpt: "A FTX tinha $8 bilhões em depósitos quando sumiu em 48 horas. Enquanto seu Bitcoin está na exchange, você tem um número na tela de alguém. Veja como mudar isso agora."
category: criptomoedas
tags: [bitcoin, autocustódia, segurança, hardware-wallet, seed-phrase]
---

A FTX tinha $8 bilhões em depósitos quando sumiu em 48 horas.

A Celsius congelou os saques numa sexta e pediu falência semana seguinte. A Mt. Gox foi embora com 850 mil Bitcoins. Nenhum dos clientes que perdeu dinheiro achava que ia acontecer com a exchange deles.

Se o Bitcoin não está nas suas mãos, não é seu. Você tem um número na tela de alguém.

Guia direto. Sem produto patrocinado, sem enrolação.

![Custódia centralizada vs. autocustódia em Bitcoin](/images/autocustodia-setup.svg)

---

## Por que isso importa

Bitcoin foi feito para cortar intermediários. Quando você compra BTC numa exchange, quem guarda as chaves privadas é ela — não você. É como depositar ouro num banco e receber um papel dizendo que o ouro é seu. Funciona até o banco fechar.

Com autocustódia, as chaves ficam com você. Só você move os fundos. Hack de exchange, falência, bloqueio regulatório — nada disso alcança seu Bitcoin.

---

## Passo 1 — Escolha o tipo de carteira

Dois caminhos:

**Software wallet (quente)**
App no celular ou computador. Mais prático, menos seguro. Para valores pequenos — o que você usaria no dia a dia, como carteira física no bolso.

Opções confiáveis: Blue Wallet, Sparrow Wallet, Muun.

**Hardware wallet (fria)**
Dispositivo físico com as chaves 100% offline. Necessário para qualquer valor que você não toparia perder num descuido com o celular.

Opções: Ledger, Trezor, Coldcard. Para controle total com segurança máxima: Coldcard.

> Acima de $500, use hardware wallet. Sem exceção.

---

## Passo 2 — Configure a hardware wallet

O processo é parecido em qualquer dispositivo:

1. Compre direto do fabricante — jamais em marketplace ou revendedor não oficial
2. Conecte ao computador pela primeira vez
3. Instale o software oficial (Ledger Live, Trezor Suite, Sparrow)
4. Siga a configuração inicial — o dispositivo gera a **seed phrase**

A seed phrase são 12 ou 24 palavras em inglês, criadas pelo hardware, offline. É a chave mestra.

**Nunca conecte o dispositivo num computador que não seja o seu. Nunca compre hardware wallet de segunda mão.**

---

## Passo 3 — Faça o backup da seed phrase certo

Com a seed phrase, qualquer um restaura sua carteira em qualquer dispositivo compatível. Sem ela, se o hardware falhar, acabou.

**Não faça:**
- Foto da seed phrase no celular
- Screenshot em nuvem (Drive, iCloud, Dropbox)
- Arquivo de texto no computador
- Qualquer coisa digital

**Faça:**
- Escreva em papel, à mão, num lugar seco e protegido
- Grave numa placa de metal (resistente a fogo e água) — tem produtos baratos para isso
- Guarde em dois locais físicos separados
- Numere cada palavra — a ordem é tudo

A seed phrase não substitui o dispositivo. O dispositivo não substitui a seed phrase. Os dois são indispensáveis.

---

## Passo 4 — Gere e confira o endereço de recebimento

Com a carteira configurada, gere um endereço Bitcoin na wallet. Parece com isso:

```
bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
```

**Confira o endereço no display do hardware** — não só na tela do computador. Malware consegue trocar endereços na área de transferência sem você ver. Se os dois batem, está certo.

---

## Passo 5 — Transfira da exchange

Na exchange, vá em "Sacar" ou "Withdraw":

1. Cole o endereço da hardware wallet
2. **Comece pequeno** — uns $10 ou $20
3. Confirme no display do hardware wallet, não só no computador
4. Espere a confirmação na blockchain (10 a 30 minutos normalmente)
5. Confira que o saldo chegou antes de continuar

Só depois que a transferência pequena confirmar, mande o restante. Erro de endereço não tem desfazer.

---

## Passo 6 — Teste a restauração

A maioria pula esse passo. É o mais importante.

Com a seed phrase em mãos, simule a restauração: configure um segundo dispositivo (ou resete o mesmo) usando só as palavras. Confirme que o saldo aparece.

Isso garante duas coisas: a seed phrase está certa e você sabe usá-la quando precisar de verdade.

Se nunca testou, não sabe se o backup funciona.

---

## Depois de configurado

- Revise onde está o backup físico a cada seis meses
- Para valores altos, estude **multisig** — múltiplas chaves pra aprovar uma transação
- Não sai falando por aí que tem autocustódia nem qual hardware usa
- Exchange ainda serve para comprar e vender — só não é lugar de guardar

---

A lista de exchanges quebradas só cresce. Mt. Gox, BitFinex (2016), Cryptopia, QuadrigaCX, Celsius, FTX. Todas tinham clientes que confiavam nelas.

*Not your keys, not your coins.* Dez anos de frase, ainda a mais importante do Bitcoin.
