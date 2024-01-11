---
layout: post
title: "A Saga LastPass: Migre e exclua sua conta." #titulo para a barra de enderecos
date: 2022-12-22 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "cofre", "1password", "enpass", "bitwarden", "golpe", "passkey", "phishing", "2fa", "lastpass", "vazamento" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# A Saga LastPass: Migre e exclua sua conta.
### Hackers roubaram dados do cofre de cliente em violação.
![](/images/lastpass.png)

O LastPass revelou hoje que os atacantes roubaram dados do cofre de cliente depois de violar seu armazenamento em nuvem.

Isso segue uma atualização anterior emitida no mês passado, quando o CEO da empresa, Karim Toubba, só disse que o ator da ameaça obteve acesso a “certos elementos” de informações de cliente.

Hoje, Toubba acrescentou que o serviço de armazenamento em nuvem é usado pelo LastPass para armazenar backups arquivados de dados de produção.

O invasor obteve acesso ao armazenamento em nuvem do Lastpass usando “chave de acesso ao armazenamento em nuvem e chaves de descriptografia de contêiner de armazenamento duplo” roubadas de seu ambiente de desenvolvedor.

“O ator da ameaça copiou informações do backup que continham informações básicas da conta do cliente e metadados relacionados, incluindo nomes de empresas, nomes de usuários finais, endereços de cobrança, endereços de e-mail, números de telefone e os endereços IP a partir dos quais os clientes estavam acessando o serviço LastPass”, disse Toubba hoje.

“O ator da ameaça também conseguiu copiar um backup dos dados do cofre do cliente do contêiner de armazenamento criptografado, que é armazenado em um formato binário proprietário que contém dados não criptografados, como URLs do site, bem como campos sensíveis totalmente criptografados, como nomes de usuário e senhas do site, notas seguras e dados preenchidos por formulários.”

## Alguns dos dados do cofre roubados são “encriptados com segurança”
Felizmente, os dados criptografados são protegidos com criptografia AES de 256 bits e só podem ser descriptografados com uma chave de criptografia exclusiva derivada da senha mestra de cada usuário.

De acordo com Toubba, a senha mestra nunca é conhecida pelo LastPass, não é armazenada nos sistemas do Lastpass e o LastPass não a mantém.

Os clientes também foram avisados de que os atacantes podem tentar forçar suas senhas mestras para obter acesso aos dados do cofre criptografado roubados.

No entanto, isso seria muito difícil e demorado se você estivesse seguindo [as melhores práticas de senha](https://support.lastpass.com/help/what-is-the-lastpass-master-password-lp070014#:~:text=We%20recommend%20using,%3A) recomendadas pelo LastPass.

Se você fizer isso, “levaria milhões de anos para adivinhar sua senha mestra usando a tecnologia de quebra de senha geralmente disponível”, [acrescentou Toubba](https://blog.lastpass.com/2022/12/notice-of-recent-security-incident/).

“Seus dados confidenciais do cofre, como nomes de usuário e senhas, notas seguras, anexos e campos de preenchimento de formulários, permanecem criptografados com segurança com base na arquitetura Zero Knowledge do LastPass.”

## Violado duas vezes em um único ano
A violação do armazenamento em nuvem é o segundo incidente de segurança divulgado pela empresa desde o início do ano, depois de [confirmar em agosto](https://gustavosaez.github.io/episódios/2022/12/02/lastpass-hackeado-pela-segunda-vez-este-ano.html) que seu ambiente de desenvolvedor foi violado usando uma conta de desenvolvedor comprometida.

A Lastpass publicou os dias de consultoria de agosto depois que a BleepingComputer entrou em contato e não recebeu resposta a perguntas sobre uma possível violação.

Em e-mails enviados aos clientes, a Lastpass confirmou que os atacantes roubaram informações técnicas proprietárias e código-fonte de seus sistemas.

Em uma atualização de acompanhamento, a empresa também revelou que o invasor por trás da violação de agosto manteve o acesso interno aos seus sistemas por quatro dias até ser despejado.

O LastPass diz que seu software de gerenciamento de senhas está sendo usado por mais de 33 milhões de pessoas e 100.000 empresas em todo o mundo.

## Alternativas
Como já mencionado aqui aqui sobre o [Enpass](https://gustavosaez.github.io/post/2022/01/29/enpass-um-gerenciador-de-senhas-robusto-e-gratuito.html), [Minimalist](https://gustavosaez.github.io/post/2022/02/19/minimalist-pode-ser-o-melhor-cofre-para-ios-ipados-e-macos.html) e [1Password](https://gustavosaez.github.io/tag/1password).

___


Fonte: [BleepingComputer](https://www.bleepingcomputer.com/news/security/lastpass-hackers-stole-customer-vault-data-in-cloud-storage-breach/)