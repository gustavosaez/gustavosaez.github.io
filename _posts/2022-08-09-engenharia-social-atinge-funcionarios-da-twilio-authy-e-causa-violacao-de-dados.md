---
layout: post
title: "Engenharia Social atinge funcionários da Twilio Authy e causa violação de dados" #titulo para a barra de enderecos
date: 2022-08-09 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "cofre", "1password", "enpass", "bitwarden", "golpe", "passkey", "phishing", "engenhariasocial" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# Engenharia Social atinge funcionários da Twilio Authy e causa violação de dados
![](/images/authy.png)
A empresa responsável pelo famoso app de gerenciamento de contas e autenticações em 2 fatores, Twilio, confirma uma violação de dados após um ‘ataque sofisticado’.
A sofisticação do ataque chama-se [Engenharia Social](https://gustavosaez.github.io/tag/engenhariasocial), que já falamos aqui muitas vezes.

## O que aconteceu?
Em 4 de agosto de 2022, a Twilio tomou conhecimento do acesso não autorizado a informações relacionadas a um número limitado de contas de clientes da Twilio por meio de um **sofisticado ataque de engenharia social** projetado para roubar credenciais dos funcionários. O famoso **Phishing**.

Este amplo ataque contra nossa base de funcionários conseguiu **enganar alguns funcionários a fornecer suas credenciais**. Os atacantes então usaram as credenciais roubadas para obter acesso a alguns de nossos sistemas internos, onde puderam acessar certos dados do cliente.

A empresa alega estar no início das investigações.

Mais especificamente, funcionários atuais e antigos relataram recentemente receber mensagens de texto (*SMShing*) supostamente do nosso departamento de TI. As mensagens indicavam que as senhas do funcionário haviam expirado, ou que sua agenda havia mudado, e que eles precisavam fazer login em uma URL que o invasor controla.

As URLs usaram palavras como “Twilio”, “Okta” e “SSO” para tentar **enganar os usuários a clicar em um link** que os levava a uma página de destino que se fez passar pela página de login do Twilio. As mensagens de texto se originaram de redes de operadoras dos EUA. Além disso, os atores da ameaça pareciam ter habilidades sofisticadas para **combinar nomes de funcionários** de fontes **com seus números de telefone**.

![](/images/sms-fake.png)

## O que foi feito?
Uma vez que Twilio confirmou o incidente, a equipe de segurança revogou o acesso às contas de funcionários comprometidas para mitigar o ataque.

Eles enfatizam que realizam treinamentos de segurança para garantir que os funcionários estejam em alerta máximo para ataques de engenharia social, mas como é de conhecimento de todos os profissionais de segurança, o elo mais fraco da segurança é a pessoa.

A Twilio informa que notificou os clientes afetados individualmente com os detalhes. Se você não foi contatado pelo Twilio, isso significa que não tiveram evidências de que sua conta foi afetada por esse ataque.

___

Fonte: [Twilio](https://www.twilio.com/blog/august-2022-social-engineering-attack)