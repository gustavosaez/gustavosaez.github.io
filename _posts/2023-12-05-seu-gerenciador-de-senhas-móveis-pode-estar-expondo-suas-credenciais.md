---
layout: post
title: "Seu gerenciador de senhas móveis pode estar expondo suas credenciais" #titulo para a barra de enderecos
date: 2023-12-05 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "1password", "enpass", "gerenciadordesenhas", "passkey", "lastpass" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# 7 dicas de privacidade para proteger seus alto-falantes inteligentes e assistentes virtuais

Vários gerenciadores de senhas móveis populares estão inadvertidamente derramando credenciais do usuário devido a uma vulnerabilidade na funcionalidade de preenchimento automático dos aplicativos Android.

A vulnerabilidade, apelidada de "AutoSpill", pode expor as credenciais salvas dos usuários dos gerentes de senhas móveis, contornando o mecanismo seguro de preenchimento automático do Android, de acordo com pesquisadores universitários do IIIT Hyderabad, que descobriram a vulnerabilidade e apresentaram suas pesquisas na Black Hat Europe esta semana. 

Os pesquisadores, Ankit Gangwal, Shubham Singh e Abhijeet Srivastava, descobriram que quando um aplicativo Android carrega uma página de login no WebView, os gerentes de senhas podem ficar “desorientados” sobre onde devem segmentar as informações de login do usuário e, em vez disso, expor suas credenciais aos campos nativos do aplicativo subjacente, disseram eles. 

Isso ocorre porque o WebView, o mecanismo pré-instalado do Google, permite que os desenvolvedores exibam conteúdo da web no aplicativo sem iniciar um navegador da web, e uma solicitação de preenchimento automático é gerada.

“Digamos que você esteja tentando fazer login no seu aplicativo de música favorito no seu dispositivo móvel e use a opção de 'login via Google ou Facebook'. O aplicativo de música abrirá uma página de login do Google ou do Facebook dentro de si mesmo através do WebView”, explicou Gangwal à TechCrunch antes de sua apresentação do Black Hat na quarta-feira.

“Quando o gerenciador de senhas é chamado para preencher automaticamente as credenciais, idealmente, ele deve preencher automaticamente apenas na página do Google ou do Facebook que foi carregada. Mas descobrimos que a operação de preenchimento automático poderia expor acidentalmente as credenciais para o aplicativo base.”

Gangwal observa que as ramificações dessa vulnerabilidade, particularmente em um cenário em que o aplicativo base é malicioso, são significativas. Ele acrescentou: “Mesmo sem phishing, qualquer aplicativo malicioso que peça que você faça login por outro site, como o Google ou o Facebook, pode acessar automaticamente informações confidenciais.”

Os pesquisadores testaram a vulnerabilidade AutoSpill usando alguns dos gerenciadores de senhas mais populares, incluindo 1Password, LastPass, Keeper e Enpass, em dispositivos Android novos e atualizados. Eles descobriram que a maioria dos aplicativos era vulnerável ao vazamento de credenciais, mesmo com a injeção de JavaScript desativada. Quando a injeção de JavaScript foi ativada, todos os gerenciadores de senhas estavam suscetíveis à sua vulnerabilidade AutoSpill.
Gangwal diz que alertou o Google e os gerentes de senhas afetados sobre a falha.

O Google não comentou quando chegou antes da publicação, mas mais tarde disse ao TechCrunch que a empresa recomenda que os gerentes de senhas de terceiros “sejam sensíveis quanto a onde as senhas estão sendo inseridas, e temos as melhores práticas do WebView que recomendamos que todos os gerentes de senhas implementem”, disse o porta-voz do Google, Ed Fernandez.

“O Android fornece aos gerenciadores de senhas o contexto necessário para distinguir entre visualizações nativas e WebViews, bem como se o WebView que está sendo carregado não está relacionado ao aplicativo de hospedagem. Por exemplo, ao usar o Gerenciador de Senhas do Google para preenchimento automático no Android, os usuários são avisados se estiverem inserindo uma senha para um domínio que o Google determina que pode não ser de propriedade do aplicativo de hospedagem, e a senha é preenchida apenas no campo apropriado. O Google implementa proteções do lado do servidor para logins via WebView”, observou o porta-voz do Google.

O diretor de tecnologia da 1Password, Pedro Canahuati, disse à TechCrunch que a empresa identificou e está trabalhando em uma correção para o AutoSpill. “Embora a correção fortaleça ainda mais nossa postura de segurança, a função de preenchimento automático do 1Password foi projetada para exigir que o usuário tome medidas explícitas”, disse Canahuati. “A atualização fornecerá proteção adicional, impedindo que os campos nativos sejam preenchidos com credenciais destinadas apenas ao WebView do Android.”

O CTO da Keeper, Craig Lurey, disse em comentários compartilhados com a TechCrunch que a empresa foi notificada sobre uma potencial vulnerabilidade, mas não disse se havia feito alguma correção. “Solacitamos um vídeo do pesquisador para demonstrar o problema relatado. 

Com base em nossa análise, determinamos que o pesquisador primeiro instalou um aplicativo malicioso e, posteriormente, aceitou um aviso do Keeper para forçar a associação do aplicativo malicioso a um registro de senha do Keeper”, disse Lurey.

O Keeper disse que "salva em vigor para proteger os usuários contra o preenchimento automático de credenciais em um aplicativo não confiável ou em um site que não foi explicitamente autorizado pelo usuário" e recomendou que o pesquisador enviasse seu relatório ao Google "já que está especificamente relacionado à plataforma Android".

A Enpass não respondeu às perguntas do TechCrunch. Alex Cox, diretor da equipe de inteligência, mitigação e escalonamento de ameaças do LastPass, disse à TechCrunch que, antes de ser informado das descobertas dos pesquisadores, o LastPass já tinha uma mitigação em vigor por meio de um aviso pop-up no produto quando o aplicativo detectou uma tentativa de alavancar o exploit. 

“Depois de analisar as descobertas, adicionamos palavras mais informativas no pop-up”, disse Cox.
Gangwal diz ao TechCrunch que os pesquisadores agora estão explorando a possibilidade de um invasor potencialmente extrair credenciais do aplicativo para o WebView. A equipe também está investigando se a vulnerabilidade pode ser replicada no iOS.

___
Fonte: [Tech Crunch](https://techcrunch.com/2023/12/06/your-mobile-password-manager-might-be-exposing-your-credentials/)