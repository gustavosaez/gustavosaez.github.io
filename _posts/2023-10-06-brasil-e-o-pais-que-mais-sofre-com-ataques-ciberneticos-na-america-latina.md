---
layout: post
title: "Nova Extensão ‘Privacy Badger’ Protege Melhor Contra o Rastreamento de Links do Google" #titulo para a barra de enderecos
date: 2023-10-06 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "navegadores", "chrome", "rastreadores", ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# Nova Extensão ‘Privacy Badger’ Protege Melhor Contra o Rastreamento de Links do Google
![](/images/privacybadger.png)

A EFF (Electronic Frontier Foundation) anunciou a disponibilidade de uma nova versão do ‘Privacy Badger’ que apresenta melhores blocos de rastreamento de links para os serviços do Google.

Privacy Badger é uma extensão de navegador para Chrome, Firefox, Opera e Edge, que bloqueia anúncios e rastreadores dinamicamente, empregando mecanismos algorítmicos para determinar o que constitui rastreamento ou violação do consentimento de uso. 

Isso o diferencia de outros bloqueadores de anúncios, permitindo que os anúncios sem rastreamento operem sem obstáculos, incentivando assim os anunciantes a adotar melhores padrões de privacidade.

De uma perspectiva prática, o Privacy Badger monitora fontes de conteúdo em páginas da web e, se descobrir que uma fonte ajuda no rastreamento em vários sites, ela a bloqueia. Tecnicamente, ele observa domínios de “terceiros” e ferramentas de rastreamento, como cookies exclusivos. Se um domínio rastreia o usuário em três sites diferentes, ele é bloqueado. 

Por padrão, o Privacy Badger usa o repositório GitHub “Badger Sett” para reconhecer rastreadores em sites populares, mas também permite que os usuários personalizem a proteção de rastreamento.

Na versão mais recente lançada esta semana, a EFF reformulou a proteção de rastreamento de links para serviços do Google, como Google Docs, Gmail, Mapas, Imagens e Resultados de pesquisa, que são amplamente utilizados e onipresentes na internet.

O rastreamento de links do Google é a técnica de redirecionar as solicitações dos usuários para os servidores da gigante da tecnologia quando eles clicam em links para sair de seus sites para coletar informações sobre seus hábitos de navegação. 

Para o usuário, no entanto, isso não oferece nenhum benefício tangível e, pelo contrário, resulta em um pequeno atraso e violação de sua privacidade.

As versões anteriores da extensão Privacy Badger usavam um método de “script de conteúdo” para detectar e bloquear o rastreamento de links do Google, o que significa que a extensão executa código no contexto de uma página da web para lê-la e modificá-la. 

Este método mais antigo perdeu algumas instâncias de rastreamento e interrompeu as funções de página inócuas, por isso teve que ser renovado.

A extensão mais recente continua a utilizar o script de conteúdo para substituir URLs de rastreamento, mas agora bloqueia solicitações de beacon de rastreamento na camada de rede por meio da API webRequest. 

Isso efetivamente bloqueia redirecionamentos, mesmo que as páginas tentem alterações discretas de links. No entanto, com a aplicação iminente do Manifest V3 e sua mudança da API webRequest para a API Declarative Net Request (DNR) mais restrita, a EFF sugere que versões futuras do Privacy Badger podem precisar adotar estratégias diferentes.”

Se você quiser experimentar o Privacy Badger, você pode baixar a extensão desta página da web.

Lembre-se, nenhuma ferramenta é suficiente para proteger seus dados contra rastreamento persistente e em várias camadas, portanto, seguir práticas holísticas de segurança de dados, como ativar configurações rígidas de bloqueio de rastreador no seu navegador da web, usar um bom serviço VPN (rede privada virtual) para navegação criptografada, limpar regularmente cookies e cache e manter seu software atualizado é aconselhável.

___


Fonte: [Restore Privacy](https://restoreprivacy.com/new-privacy-badger-better-protects-against-google-link-tracking/)
