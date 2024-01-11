---
layout: post
title: "Configurar um cofre não é tão difícil quanto você pensa" #titulo para a barra de enderecos
date: 2022-08-17 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "cofre", "1password", "enpass", "bitwarden", "golpe", "passkey", "phishing" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# Configurar um cofre não é tão difícil quanto você pensa
### É possível mover senhas salvas e como as ferramentas de preenchimento automático da Apple e do Google se comparam.
![](/images/correntes-seguranca.png)

Parabéns, você decidiu usar um [cofre](https://gustavosaez.github.io/tag/cofre) para salvar e preencher automaticamente suas senhas on-line. Mas isso é metade da batalha – você ainda precisa colocar todas essas senhas no app escolhido, redefinir todas as senhas idênticas e verificar se houve credenciais roubadas.

Mas não há motivos para entrar em pânico: você não precisa fazer tudo de uma vez.

Eu procuro incentivar as pessoas que nunca usaram um cofre a começar a usá-lo de forma gradual. Comece com senhas e com o passar do tempo, vá adicionando tudo o que for digitalmente importante (documentos, licenças de software e mais). Com o tempo, você vai perceber que está economizando tempo, mas também endurecendo suas defesas contra violações de senhas, ataques [phishing](https://gustavosaez.github.io/tag/phishing) e outras práticas modernas.

## Você já estar usando um cofre para senhas
Se você usa um dispositivo Apple ou navega com navegadores modernos (Edge, Firefox, Brave, Chrome), há uma chance de ter dito “sim” quando solicitado a salvar senhas com as [Chaves do iCloud](https://support.apple.com/pt-br/HT204085) ou o gerenciador de senhas do navegador (não o use, é inseguro).

Para verificar no seu dispositivo Apple, vá para Configurações -> Senhas, ou caso utilize o app Atalhos, pode usar [este atalho](https://www.icloud.com/shortcuts/015b2b36d4e04da896d3c84dae68814f). Para verificar sua conta do Google, acesse [passwords.google.com](http://passwords.google.com/).

Ambas as empresas permitem que você baixe suas senhas salvas no formato CSV e as importe para um cofre separado.

## Apple
![](/images/apple-keychain.png)
Para exportar as senhas das Chaves do iCloud, será possível somente via macOS. Em um Mac, vá para Preferências do Sistema -> Senhas e clique no ícone com os três pequenos pontos na parte inferior da lista. Selecione “Exportar senhas”.

## Navegador
![](/images/brave-export-password.png)
No navegador, clique nos três pontos no canto superior direito da sua janela. Vá para Configurações e selecione Preenchimento Automático no menu do lado esquerdo (Caso esteja usando o navegador Brave, como eu, poderá copiar o link brave://settings/autofill e colar em sua barra de pesquisa para ir direto para a página correspondente). 

Vá para Senhas Salvas, escolha os três pontos à direita e selecione “Exportar senhas”.

Seu cofre de sua escolha deve ter uma ferramenta de importação que permita fazer upload do arquivo CSV. Lembre-se: se você baixar suas senhas, elas ficarão visíveis para qualquer pessoa que tenha acesso ao arquivo. Apague-o, de forma permanente, assim que terminar a importação.

## Manter o cofre do meu telefone ou navegador?
Os cofres dedicados vêm com algumas vantagens. Primeiro, eles podem preencher suas senhas em dispositivos e aplicativos, enquanto as Chaves do iCloud não funcionam em telefones Android, por exemplo. Em segundo lugar, os cofres independentes vêm com recursos extras, como compartilhamento seguro de arquivos e senhas.

Um porta-voz do Google disse que o aplicativo Chrome permite que os usuários do iPhone e iPad preencham automaticamente as senhas sem usar o Chrome como navegador principal, e o Chrome pode até orientá-lo na redefinição de senhas comprometidas para [determinados sites](https://blog.google/products/chrome/automated-password-changes/). Uma porta-voz do Firefox observou que as integrações de navegador são convenientes para pessoas que não querem o trabalho extra de configurar um cofre autônomo e que o Firefox para Android e iOS pode preencher automaticamente senhas em outros aplicativos.

Uma porta-voz da Microsoft se recusou a responder a perguntas sobre interoperabilidade e recursos limitados. Representantes da Apple não responderam imediatamente a uma solicitação de comentário.

Troy Hunt, um especialista em segurança que administra o banco de dados de senhas comprometidas [Haveibeenpwned.com](https://haveibeenpwned.com/), diz que seu foco deve ser: Sua ferramenta está levando você a criar senhas mais fortes, ou você está apenas usando-a para salvar e preencher automaticamente as mesmas velhas e ruins? (Troy Hunt está em um conselho de consultores do gerenciador de senhas 1Password.)

Cofres que usam senhas únicas e difíceis de adivinhar melhorarão sua segurança. Caso contrário, Hunt observou que você está recebendo ajuda extra para lembrar suas senhas inseguras e reutilizadas.

Eu, particularmente vejo um outro risco que me leva a considerar armazenar meus dados em um cofre independente + Chaves do iCloud.

O cofre é o principal e o Chaves do iCloud serve como um “backup”. Imagine que a empresa que você armazena seus dados mais importantes vá a falência, saia do ar, sofre um vazamento de dados ou, até mesmo, é comprada por uma empresa que não cuida dos dados de seus usuários, o que você faz?

Isto é a velha máxima do backup… quem tem 1, não tem nenhum.

## E se eu nunca tiver salvo uma senha?
Se você tem mantido suas senhas em um documento do Excel, pode enviá-las diretamente para um gerenciador de senhas depois de salvá-las como um. Arquivo CSV.

Mas se você os tiver armazenado em uma nota adesiva, caderno ou seu cérebro, você terá que inseri-las manualmente.

Comece com suas contas mais críticas, como bancos, portais médicos e contas de trabalho. Lembre-se de que o gerenciamento de senhas é um jogo longo, e não há problema em trabalhar devagar. 

Toda vez que você iniciar sessão em outra conta, seu cofre deverá perguntar se você deseja que ela salve a senha. 

Com o tempo, você pode construir seu cofre e redefinir as duplicadas.

## Posso tornar minhas senhas ainda mais seguras?
A pessoa média tinha mais de 150 contas on-line em 2017, de acordo com uma análise da Dashlane, e, atualmente, podemos ter cerca de 300. Faz sentido se sentir ansioso ao inserir as senhas de toda a sua vida online.

Nenhum software é "ihackeável", e isso inclui os cofres, mas os benefícios de usar um superam os riscos, disse ele.

Esta semana tivemos um [incidente de segurança com a Twilio Authy](https://gustavosaez.github.io/post/2022/08/09/engenharia-social-atinge-funcionarios-da-twilio-authy-e-causa-violacao-de-dados.html), famoso app gerenciador de contas e códigos de autenticação em 2 fatores, que resultou na violação de dados.

Se você está em um ecossistema Apple, recomendo a leitura da nossa análise do cofre Minimalist:

- [Minimalist pode ser o melhor cofre para iOS, iPadOS e macOS](https://gustavosaez.github.io/post/2022/02/19/minimalist-pode-ser-o-melhor-cofre-para-ios-ipados-e-macos.html)
  
Mas se você trabalha com ecossistemas diferentes, isto é, tem um iPhone e um computador com Windows ou Linux, ou vice-versa, tem um Mac e um smartphone Android:

- [Enpass, um gerenciador de senhas robusto e gratuito](https://gustavosaez.github.io/post/2022/01/29/enpass-um-gerenciador-de-senhas-robusto-e-gratuito.html)
  
Não deixe de considerar também os apps [1Password](https://1password.com) e [Bitwarden](https://bitwarden.com/).
