---
layout: post
title: "Funcionários da Cloudflare caem no mesmo Phishing da Twilio Authy" #titulo para a barra de enderecos
date: 2022-08-10 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "engenhariasocial", "phishing", "cloudflare", "authy" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# Funcionários da Cloudflare caem no mesmo Phishing da Twilio Authy

![](/images/cloudflare.png)

Quando digo que a Engenharia Social é um tema que deve ser discutido sistematicamente e incansavelmente é para evitar situações como esta.

Após o recente [ataque de engenharia social, bem-sucedido, contra os funcionários da Twilio](https://gustavosaez.github.io/post/2022/08/09/engenharia-social-atinge-funcionarios-da-twilio-authy-e-causa-violacao-de-dados.html), a Cloudflare informou que seus funcionários também caíram no mesmo ataque e algumas das credenciais de seus funcionários também foram roubadas.

Embora os funcionários tenham caído nas mensagens de phishing, foi possível impedir o ataque através do uso do [produto Cloudflare One](https://www.cloudflare.com/cloudflare-one/) e chaves de segurança física emitidas para todos os funcionários que são obrigados a usar para acessar todos os nossos aplicativos.

Felizmente nenhum sistema Cloudflare foi comprometido. A [equipe de inteligência contra ameaças Cloudforce One](https://blog.cloudflare.com/introducing-cloudforce-one-threat-operations-and-threat-research/) foi capaz de realizar análises adicionais para desvendar ainda mais o mecanismo do ataque e coletar evidências críticas para rastrear o atacante.

>Este foi um ataque sofisticado direcionado a funcionários e sistemas de tal forma que acreditamos que a maioria das organizações provavelmente seria violada.

## O Ataque

Em menos de 1 minuto, pelo menos 76 funcionários receberam mensagens de texto em seus telefones pessoais e profissionais. Algumas mensagens também foram enviadas aos familiares do funcionário.

![](/images/cloudflare2.png)

A Cloudflare afirma administrar uma Equipe de Resposta a Incidentes de Segurança (SIRT) 24×7. Todos os funcionários da Cloudflare são treinados para denunciar qualquer coisa suspeita ao SIRT. Mais de 90% dos relatórios ao SIRT acabam não sendo ameaças. Os funcionários são incentivados a relatar qualquer coisa e nunca são desencorajados a relatar em excesso.

Por fim, a empresa afirma que, [assim como o Google](https://krebsonsecurity.com/2018/07/google-security-keys-neutralized-employee-phishing/), nenhum ataque de engenharia social contra os funcionários (o elo mais fraco da segurança) tenha sido bem-sucedido após a implantação das chaves físicas

___
Fonte: [Blog Cloudflare](https://blog.cloudflare.com/2022-07-sms-phishing-attacks/)