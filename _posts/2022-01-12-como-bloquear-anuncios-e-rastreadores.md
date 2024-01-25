---
layout: post
title: "Como bloquear anúncios e rastreadores" #titulo para a barra de enderecos
date: 2022-01-12 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "livro" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# Como bloquear anúncios e rastreadores
### Quase 20 GB de dados economizados
![](/images/adguard-1ano.png)

Esta matéria saiu primeiro no [canal do Telegram](https://t.me/PodApps/584).

A imagem acima diz tudo, mas posso esclarecer um pouco mais o quanto nos estão rastreando.

AdGuard é um app disponível para todas as plataformas existentes e de código aberto e personalizável. Há diversos outros apps que fornecem o mesmo recurso, porém poucos trazem essa informação à vista dos usuários.

É muito importante salientar que já não uso buscador Google e nem redes sociais, esses dados tratam-se apenas dos dados de navegação na WEB, normalmente (e principalmente) sites de notícias, automações e de desenvolvimento do PodApps.

Com isso, toda essa coleta de dados não contabiliza o que a META e Google poderiam coletar, arrisco dizer que, se eu usasse serviços Google + Meta estes números dobrariam.

>IMPORTANTE. O ÚNICO SERVIÇO DO GOOGLE USADO É O **YOUTUBE**.

```
Antes de mais nada, vamos entender o que é um tracker, ou rastreador.

Um rastreador web é um código que monitora as ações que você realiza na internet para entender o seu comportamento. 

Alguns sites o usam para fazer medições de desempenho, mas outros podem carregar estes códigos com intuito de vender suas informações para outras empresas. Alguns rastreadores são tão avançados que conseguem rastrear a posição do seu mouse para entender como você se comporta diante o site ou app mobile.

```

Você deve ter em mente que, comumente, um rastreador “pesa” de ~3kb a ~15kb. São leves, pois são, geralmente, scripts que rodam a medida que o usuário navega.

Quanto a anúncios, 37.128 bloqueados, considero que são poucos até, visto a quantidade de sites que costumo acessar e até mesmo os anúncios do YouTube. 

Já quanto a quantidade de rastreadores, 451.076, é absurda, são ~12x a quantidade de anúncios. 

Em resumo, podemos entender que pra cada anúncio, temos 12 rastreadores.

A nível de curiosidade:

**10 GB** equivale ao peso aproximado de:
- 6 filmes FullHD;
- 1 filme FullHD Blu-Ray;
- 1/2 filmes FHD Blu-Ray 4K;
- mais de 3000 fotos suas em 1 ano (8 fotos diárias);
- música em qualidade baixa, são mais de 6600 músicas;
- e em qualidade alta, pode chegar a 1000 músicas.

Quando vejo se aproximar de **20 GB**(!), imagine o dobro disso.

## SPOD VPN
Um dos patrocinadores do nosso podcast é a [SPOD VPN](https://spod.com.br) que traz anonimidade, segurança e privacidade sem complicação. 

No app também é possível ver os mesmos dados e, quando falamos do app mobile, é possível visualizarmos quanto “tempo de vida” isso nos deu.

Mas… tempo de vida?

## Tempo de Vida
Imagine que você quer muito acessar uma matéria de um site que está cheio de rastreadores e anúncios. Pra cada item da página, um download é feito.

Texto, imagens, rastreadores, anúncios, cookies, tudo é baixado e tudo tem um peso. Ao final, uma página pode pesar ~5kb até Gigabytes (vide a página que tem a imagem mais pesada do mundo).

Agora some tudo e imagine que está em um local com pouco sinal. Uma página “leve” irá te poupar tempo de vida, pois precisará esperar pouco para visualizar o que deseja, já uma página “pesada” já tomaria mais do seu tempo.

Em resumo, o tempo de vida é o peso da pagina X tempo de espera para carregamento. Ou seja, os apps que mostram o tempo salvo, indicam quanto tempo você ganhou só bloqueando rastreadores e anúncios.

## YouTube
Outro exemplo clássico é o YouTube, não é chato esperar 5 segundos para tirar o anúncio e ver logo o que deseja? – Pois é.

## Professor do iPhone
Eu já escrevi uma matéria, no blog do Professor do iPhone, antes de conhecer a SPOD VPN e AdGuard, em que eu explicava sobre esse assunto também, o app em questão era a VPN Disconnect. [Você pode ler a matéria aqui](https://professordoiphone.com.br/2020/01/26/como-eu-economizei-10-gb-de-internet-eliminando-os-rastreadores-de-internet/).

Ainda no blog do professor do iPhone, você também pode encontrar uma das primeiras matérias que escrevi sobre economia de dados, bateria, tempo de vida e etc. [Veja a matéria aqui](https://professordoiphone.com.br/2019/07/09/economizando-bateria-e-dados-celulares-no-iphone/).

## APPS
Por fim, a recomendação de apps que costumo fazer no Podcast.

<html>
<style>
    .button {
      border: none;
      color: white;
      padding: 5px 22px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 14px;
      margin: 2px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
    }
    /*Botão Apple*/
    .button2 {
      background-color: white; 
      color: #2A78C9; 
      border: 2px solid #2A78C9;
      border-radius: 100px;
    } 
    .button2:hover {
      background-color: #2A78C9;
      color: white;
    } 
    /*Botão Amazon*/    
    .button3 {
      background-color: white; 
      color: #3B8C6D; 
      border: 2px solid #3B8C6D;
      border-radius: 100px;
    }    
    .button3:hover {
      background-color: #3B8C6D;
      color: white;
    }
</style>
<div>
<center>
    <button class="button button2" target="_blank" onclick="window.location.href='https://apps.apple.com/us/app/spod-vpn-web-filter/id1441670465';">SPOD VPN (iOS)</button>
    <button class="button button2" target="_blank" onclick="window.location.href='https://play.google.com/store/apps/details?id=br.com.spod.spodvpnwebfilter';">SPOD VPN (Android)</button>
    <button class="button button3" target="_blank" onclick="window.location.href='https://apps.apple.com/us/app/disconnect-premium/id1333277187?mt=12';">Disconnect Premium</button>
    <button class="button button3" target="_blank" onclick="window.location.href='https://adguard.com/en/products.html';">AdGuard</button>
</center>
</div>
<BR>
</html>
