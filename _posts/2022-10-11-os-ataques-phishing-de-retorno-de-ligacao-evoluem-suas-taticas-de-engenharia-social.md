---
layout: post
title: "Os ataques phishing de retorno de ligação evoluem suas táticas de Engenharia Social" #titulo para a barra de enderecos
date: 2022-10-11 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "engenhariasocial", "golpe", "phishing" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# Os ataques phishing de retorno de ligação evoluem suas táticas de Engenharia Social
![](/images/callcenter.png)

Os golpes phishing de retorno de ligação evoluíram seus métodos de engenharia social, mantendo as antigas assinaturas falsas atrativas para a primeira fase do ataque, mas mudando para fingir ajudar as vítimas a lidar com uma infecção no computador ou hack.

Ataques bem-sucedidos infectam as vítimas com um arquivo de malware que baixa arquivos adicionais, como trojans de acesso remoto, spyware e ransomware.

Esses ataques, geralmente, são campanhas de e-mail que fingem ser assinaturas de alto preço projetadas para causar confusão pelo destinatário, pois eles nunca se inscreveram nesses serviços.

No e-mail está um número de telefone que o destinatário pode ligar para saber mais sobre esta “assinatura” e cancelá-la. No entanto, isso leva a um ataque de engenharia social que implanta o malware nos dispositivos das vítimas e, potencialmente, [ataques de ransomware completos](https://www.bleepingcomputer.com/news/security/ransomware-gangs-move-to-callback-social-engineering-attacks/).

De acordo com um [novo relatório da Trellix](https://www.trellix.com/en-us/about/newsroom/stories/research/evolution-of-bazarcall-social-engineering-tactics.html), as últimas campanhas visam usuários nos Estados Unidos, Canadá, Reino Unido, Índia, China e Japão.

![](/images/trellix-wm.png)

## Tudo começou com o BazarCall
Os ataques de phishing de retorno de ligação

apareceram pela primeira vez em março de 2021 sob o nome de [“BazarCall“](https://www.bleepingcomputer.com/news/security/bazarcall-malware-uses-malicious-call-centers-to-infect-victims/), onde os atores de ameaças começaram a enviar e-mails fingindo ser uma assinatura de um serviço de streaming, produto de software ou empresa de serviços médicos, dando um número de telefone para ligar se quiserem cancelar a compra.

Quando um destinatário ligou para o número, os atores da ameaça os orientaram através de uma série de etapas que levaram ao download de um arquivo malicioso do Excel que instalaria o malware BazarLoader.

O BazarLoader forneceria acesso remoto a um dispositivo infectado, fornecendo acesso inicial a redes corporativas e, eventualmente, levando a ataques de ransomware Ryuk ou Conti.

Ao longo do tempo, os ataques de phishing de retorno de chamada [surgiram como uma ameaça significativa](https://www.advintel.io/post/bazarcall-advisory-the-essential-guide-to-call-back-phishing-attacks-that-revolutionized-the-data), pois agora são usados por vários grupos de hackers, incluindo o Silent Ransom Group, Quantum e as operações de ransomware/extorsão Royal.

## Novos truques de engenharia social

O processo de engenharia social mudou nas recentes campanhas de phishing de retorno de ligação, embora a isca no e-mail de phishing permaneça a mesma, uma fatura de um pagamento feita ao Geek Squad, Norton, McAfee, PayPal ou Microsoft.

Uma vez que o destinatário liga para o golpista no número fornecido, ele é solicitado a fornecer os detalhes de faturamento para “verificação”. Em seguida, o golpista declara que não há entradas correspondentes no sistema e que o e-mail que a vítima recebeu foi spam.

Em seguida, o suposto agente de atendimento ao cliente avisa a vítima de que o e-mail de spam pode ter resultado em uma infecção por malware em sua máquina, oferecendo-se para conectá-los a um especialista técnico.

Depois de um tempo, um golpista diferente liga para a vítima para ajudá-la com a infecção e a direciona para um site onde eles baixam malware disfarçado de software antivírus.

Outra variante usada nos ataques de phishing com tema do PayPal é perguntar à vítima se ela usa o PayPal e, em seguida, verificar se seu e-mail foi comprometido, alegando que sua conta foi acessada por oito dispositivos espalhados por vários locais em todo o mundo.

Nas campanhas de renovação de assinatura de software de segurança, os golpistas afirmam que o produto de segurança pré-instalado com o computador da vítima expirou e foi renovado automaticamente para estender a proteção.

Eventualmente, o golpista direciona a vítima para um portal de cancelamento e reembolso, que é, novamente, o site de corte de malware.

![](/images/trellix2.png)

O resultado de todas essas campanhas é convencer a vítima a baixar malware, que pode ser BazarLoader, trojans de acesso remoto, Cobalt Strike ou algum outro software de acesso remoto, dependendo do ator da ameaça.

## Tomando o controle remoto dos dispositivos

A Trellix diz que a maioria dessas campanhas recentes está empurrando um executável ClickOnce chamado ‘support.Client.exe’, que, quando lançado, instala a ferramenta de acesso remoto ScreenConnect.

“O agressor também pode mostrar uma tela de bloqueio falsa e tornar o sistema inacessível à vítima, onde o agressor é capaz de executar tarefas sem que a vítima esteja ciente delas”, [explica Trellix](https://www.trellix.com/en-us/about/newsroom/stories/research/evolution-of-bazarcall-social-engineering-tactics.html).

Em alguns casos vistos pelos analistas de segurança, os golpistas abriram formulários de cancelamento falsos e pediram às vítimas que os preenchessem com seus dados pessoais.

Finalmente, para receber o reembolso, a vítima é incitada a fazer login em sua conta bancária, onde é induzir para enviar dinheiro ao golpista.

“Isso é conseguido bloqueando a tela da vítima e iniciando uma solicitação de transferência e, em seguida, desbloqueando a tela quando a transação requer uma OTP (One Time Password) ou uma senha secundária”, explica o relatório Trellix.

“A vítima também recebe uma página de sucesso de reembolso falso para convencê-la a acreditar que recebeu o reembolso. O golpista também pode enviar um SMS para a vítima com uma mensagem de dinheiro falso recebida como uma tática adicional para evitar que a vítima suspeite de qualquer fraude.”

Claro, perder dinheiro é apenas um dos problemas que os usuários infectados podem enfrentar, já que os atores da ameaça podem descartar malware adicional e mais desagradável a qualquer momento, espionando-os a longo prazo e roubando informações altamente sensíveis.

---
Fonte: [Bleeping Computer](https://www.bleepingcomputer.com/news/security/callback-phishing-attacks-evolve-their-social-engineering-tactics/)