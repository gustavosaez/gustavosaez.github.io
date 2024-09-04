---
layout: post
title: "Retransmissão Privada do iCloud+ não é o mesmo que VPN, entenda" #titulo para a barra de enderecos
date: 2022-03-11 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "vpn", "icloud", "retransmissao privada", "cloudflare" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# Retransmissão Privada do iCloud+ não é o mesmo que VPN, entenda
### O que é VPN você já deve estar cansado de escutar, aliás, a SPOD VPN é uma das patrocinadoras do podcast e você pode escutar mais sobre ela no bate-papo que fiz com o CEO da empresa.

<iframe src="https://embed.podcasts.apple.com/us/podcast/27-spod-vpn-%C3%A9-3-em-1-quando-falamos-de-privacidade/id1434188907?i=1000470408723&amp;itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto" height="175px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style="width: 100%; max-width: 660px; overflow: hidden; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; background-color: transparent;" data-ruffle-polyfilled=""></iframe>

Mas e esse tal de Retransmissão Privada do iCloud+ que surgiu no iOS 15? Alguns tem falado que é a VPN da Apple, mas, por mais legal que seja esse recurso de Retransmissão Privada, definitivamente não é uma VPN.

## Porque não é uma VPN?

Em uma lista rápida e curta:
- Ele só funciona com o Safari e não com outros aplicativos ou navegadores da web que você usa. Tecnicamente, algumas outras informações de DNS e um pequeno subconjunto de tráfego da web relacionado a aplicativos o usarão, mas é melhor pensar nisso como uma coisa apenas do Safari.
- É facilmente identificável como um servidor proxy, com o qual [muitas redes grandes](https://9to5mac.com/2022/01/10/european-carriers-seek-to-block-iphone-private-relay-feature/), como as de escolas ou empresas, não funcionarão. A maioria das boas VPNs se disfarça para se parecer com tráfego não proxy regular.
- Como mencionado, ele não pode ocultar a região da qual você está se conectando, **apenas você** e uma localização IP específica, então você não pode acessar conteúdo bloqueado fora da sua região ou sites de experiência como se estivesse se conectando de outro país.

Agora que você já sabe o básico do porquê não é uma VPN, vamos às respostas longas, no que se refere ao funcionamento mais técnico e completo proveniente da Cloudflare, parceira da Apple nessa empreitada.

## Como a navegação funciona usando a Retransmissão Privada do iCloud

O Private Relay usa mecanismos modernos de criptografia e transporte para transmitir tráfego de dispositivos de usuários através da Apple e da infraestrutura de parceiros antes de enviar tráfego para o site de destino.

Quando você não está usando a Retransmissão Privada, sua navegação na web fica mais ou menos assim:
![](/images/cloudflare1.png)

Porém, ao habilitarmos a Retransmissão Privada, a coisa muda de figura.
![](/images/cloudflare3.png)

Ao adicionar dois “relés” (rotulados como “Proxy de Entrada” e “Proxy de Saída” acima), os metadados da conexão são divididos:
- O endereço IP original do usuário é visível para a rede de acesso (por exemplo, a cafeteria em que você está sentado ou o ISP da sua casa) e o primeiro relé (operado pela Apple), mas o nome do servidor ou site é criptografado e não visível para nenhum deles.

O primeiro relé entrega dados criptografados a um segundo relé (ex. Cloudflare), mas não consegue ver “dentro” o tráfego para Cloudflare.

- Os relés operados pela Cloudflare sabem apenas que estão recebendo tráfego de um usuário do Private Relay, mas não especificamente quem ou seu endereço IP do cliente. O Cloudflare retransmite encaminhe o tráfego para o servidor de destino.

Dividir conexões dessa maneira impede que os sites vejam endereços IP do usuário e minimiza a quantidade de informações que as entidades “no caminho” podem coletar sobre o comportamento do usuário.

## O papel da Cloudflare como um ‘segundo relé’

A Cloudflare opera uma das maiores e mais rápidas redes do mundo. Sua infraestrutura garante que o tráfego chegue a todas as redes do mundo de forma rápida e confiável, não importa de onde no mundo um usuário esteja se conectando.

Também trabalham com protocolos modernos de criptografia e transporte, incluindo [TLS 1.3](https://blog.cloudflare.com/rfc-8446-aka-tls-1-3/) e [QUIC](https://blog.cloudflare.com/the-road-to-quic/). QUIC, e [MASQUE](https://datatracker.ietf.org/wg/masque/about/) intimamente relacionado, são as tecnologias que permitem que o Private Relay mova dados de forma eficiente entre vários saltos de relé sem incorrer em perdas de desempenho.

Os mesmos blocos de construção que alimentam os produtos Cloudflare foram usados para criar suporte para Private Relay: a [rede](https://www.cloudflare.com/network/), 1.1.1.1, [Cloudflare Workers](https://workers.cloudflare.com/) e software como [quiche](https://github.com/cloudflare/quiche), nossa biblioteca de manuseio de protocolos QUIC (e agora MASQUE) de [código aberto](https://blog.cloudflare.com/enjoy-a-slice-of-quic-and-rust/), que agora inclui suporte a proxy.

## Garantindo a precisão da geolocalização

Preservar a capacidade de entregar a localização aproximada do usuário garante que os usuários com o Private Relay ativado sejam capazes de:

1. Consultar a pesquisa de locais e outros conteúdos relevantes localmente quando eles interagirem com conteúdo específico da geografia sem o compartilhamento preciso de localização ativado.
2. Consumir conteúdo sujeito a restrições de licenciamento que limitem quais regiões têm acesso a ele (por exemplo, transmissões esportivas ao vivo e conteúdo com restrição de direitos semelhantes).

Um dos principais “testes de aceitação” em que pensamos ao pensar em geolocalizar usuários é o “teste de pizza local”. Com os serviços de localização desativados, os resultados retornados para a pesquisa “pizza próximo a mim” são geograficamente relevantes? Por causa da preservação da geografia e dos sistemas de gerenciamento de endereços IP que operamos, eles são!

Em um nível alto, veja como funciona:
- Os relés da Apple geolocalizam endereços IP do usuário e os traduzem em um [“geohash”](https://en.wikipedia.org/wiki/Geohash). Geohashes são representações compactas de latitude e longitude. O sistema inclui proteções para garantir que os geohashes não possam ser falsificados pelos clientes e opera com precisão reduzida para garantir que a privacidade do usuário seja mantida. Os relés da Apple não enviam endereços IP do usuário para frente.
- Os relés Cloudflare mantêm um pool de endereços IP para uso exclusivo pelo Private Relay. Esses endereços IP foram registrados em provedores de banco de dados de geolocalização para corresponder a cidades específicas ao redor do mundo. Quando um usuário do Private Relay se conecta e apresenta o geohash previamente determinado, o endereço IP correspondente mais próximo é selecionado.
- Os servidores veem um endereço IP que corresponde à localização do endereço IP do usuário original, sem obter informações que podem ser usadas para identificar o usuário específico.

Na maior parte do mundo, o Private Relay suporta geolocalização para a cidade mais próxima por padrão. Se os usuários preferirem estar localizados em granularidade de localização mais grosseira, a opção de localizar com base no país e fuso horário estará disponível nas configurações de Retransmissão Privada.

## A retransmissão privada do iCloud+ torna a navegação na Internet mais privada e segura
O *iCloud Private Relay* é um passo empolgante para preservar a privacidade do usuário na Internet, sem forçar comprometimentos no desempenho.

Se você é assinante do iCloud+, pode [ativar a Retransmissão Privada nos Ajustes do iCloud](https://support.apple.com/guide/icloud/set-up-icloud-private-relay-mm7dc25cb68f/icloud#:~:text=On%20your%20iPhone%2C%20iPad%2C%20or%20iPod%20touch%2C%20go%20to,or%20cellular%20plan%20(SIM).) no seu iPhone, iPad ou Mac no iOS15, iPadOS15 ou macOS Monterey.

Se você é um profissional de tecnologia e deseja detalhes mais técnicos sobre o funcionamento do iCloud Private Relay, você pode ler mais no [post da Cloudflare](https://blog.cloudflare.com/icloud-private-relay/).
