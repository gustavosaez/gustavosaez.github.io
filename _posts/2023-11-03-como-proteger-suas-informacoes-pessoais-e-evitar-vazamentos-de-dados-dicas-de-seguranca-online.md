---
layout: post
title: "Como Proteger suas Informações Pessoais e Evitar Vazamentos de Dados: Dicas de Segurança Online" #titulo para a barra de enderecos
date: 2023-11-03 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "cofre", "1password", "enpass", "bitwarden", "vazamento", "passkey" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# Como Proteger suas Informações Pessoais e Evitar Vazamentos de Dados: Dicas de Segurança Online
### As passkeys chegaram e estão ganhando espaço.
![](/images/coding.png)
Falar de [vazamento](https://gustavosaez.github.io/tag/vazamento) é sempre uma tristeza, já que uma vez vazado, não temos como reavê-los, principalmente se falarmos de CPF, afinal, é o único dado que, mesmo com burocracia, não conseguimos mudar.

A grande questão é: Será que meus dados vazaram?

## Como saber?
Para descobrir se seu e-mail vazou, você poderá acessar o site https://haveibeenpwned.com e inserir o seu e-mail principal para verificar se ele apareceu por aí, por aqui, tudo certo:
![](/images/haveibeenpwned.png)

Se seu e-mail apareceu em algum vazamento irá aparecer em quantas base dados ele foi encontrado e quais foram os serviços, conforme exemplo abaixo:
![](/images/pwned.png)

O melhor a se fazer nesse caso é “recomeçar”. Mude seu e-mail!

Mas isso não é uma opção viável para muita gente. Sendo assim, aumente os níveis de segurança de sua conta para que ninguém, além de você, tenha acesso à ela.

- **Troque a senha** para uma aleatória alfa-numérica de **pelo menos 25** caracteres (caso o serviço permita essa quantidade, se não, 20).
- Se houver, ative o **segundo fator de autenticação**
- Se houver, ative a **chave de recuperação de conta**
- Se houver, insira um **segundo e-mail** para recuperação de conta, preferencialmente um e-mail dedicado para isto e que você não usará para nada além dessa possível necessidade de recuperação de conta

Para ajudar com a criação de uma senha segura nesse nível, caso você não use um cofre, você poderá usar o meu [Gerador de Senhas Seguras](https://gustavosaez.com.br/geradordesenhas):
![](/images/geradordesenhas.png)

Nele, é possível definir a quantidade de caracteres que deseja (até 50) e ainda ele irá te dizer quanto tempo um software especializado em quebra de senhas irá levar para descobrir essa nova senha.

## A importância de usar senhas exclusivas para cada conta online

Usar senhas exclusivas para cada conta online é essencial para garantir a segurança de suas informações pessoais e evitar possíveis problemas de violação de dados. Aqui estão algumas razões pelas quais isso é importante:
- **Proteção contra vazamentos de dados**: Caso ocorra um vazamento de dados em um determinado serviço, se você estiver usando a mesma senha em várias contas, os invasores poderão acessar facilmente suas outras contas, colocando em risco sua privacidade e segurança.
- **Mitigação de ataques de força bruta**: Usar senhas exclusivas dificulta ataques de força bruta, em que hackers tentam adivinhar suas senhas através de tentativas repetidas. Se cada conta tiver uma senha diferente, mesmo se uma delas for comprometida, as outras permanecerão protegidas.

## Dicas para criar senhas fortes

Criar senhas fortes é fundamental para melhorar a segurança das suas contas online. Aqui estão algumas dicas para ajudá-lo a criar senhas seguras:
- **Comprimento**: Opte por senhas longas, com pelo menos 20 caracteres. Quanto maior a senha, mais difícil será de ser quebrada.
- **Variedade de caracteres**: Use uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais. Quanto mais diversidade de caracteres, mais difícil será para hackers descobrirem sua senha.
- **Evite informações pessoais**: Evite usar informações pessoais óbvias, como datas de nascimento, nomes de familiares ou números de telefone. Essas informações podem ser facilmente descobertas por meio de pesquisas online.
- **Evite sequências óbvias**: Evite sequências de teclado simples, como “12345” ou “qwerty”. Essas sequências são facilmente adivinhadas e representam um risco para a segurança da sua conta.
- **Não use palavras comuns**: Evite usar palavras comuns encontradas em dicionários. Hackers usam programas automatizados que tentam combinações de palavras para quebrar senhas.
- **Atualização regular**: Certifique-se de atualizar suas senhas regularmente, a cada 3 a 6 meses. Isso reduz o risco de suas senhas serem comprometidas.

Lembre-se, manter suas senhas exclusivas e fortes é uma das melhores práticas para proteger suas contas online. Ao seguir essas dicas, você estará contribuindo para uma maior segurança digital.

## Gerando senhas seguras

É importante ressaltar que o campo em que a senha é gerada é editável, ou seja, você poderá testar a segurança de sua senha ao digitá-la no campo, sem enviar para ninguém. Olha só:
![](/images/geradordesenhas-gif.gif.webp)

Veja que a mensagem a baixo vai mudando a medida que insere os caracteres e informa qual critério de qualidade da senha, no caso, poucos tipos de caracteres, isto é, não há uma boa “mistura” de letras, números e caracteres especiais.

E se ainda assim não estiver convencido em mudar a senha, você poderá testar se sua senha já vazou por aí.

No mesmo site https://haveibeenpwned.com você encontra no topo a opção “Senhas” (em inglês)
![](/images/header-haveibeenpwned.png)

Clique nela, digite sua senha e clique em “Pwned?”

![](/images/password-haveibeenpwned.png)

Ele irá verificar se nesses bancos de dados vazados, sua senha apareceu por aí.

## Aplicativos
Alguns [cofres](https://gustavosaez.github.io/tag/cofre) oferecem este recurso nativamente, isto significa que ele faz esse trabalho de monitoria dos vazamentos a fim de informá-lo assim que tomar conhecimento do incidente, desta forma, você poderá agir mais rapidamente no “controle de danos”.

O uso de um cofre pode trazer uma série de benefícios para a segurança das suas informações pessoais e ajudar no monitoramento de violações de dados. Veja alguns desses benefícios:

- **Armazenamento seguro de senhas, licenças e documentos**: Um gerenciador de senhas oferece um local seguro para armazenar todas as suas senhas, eliminando a necessidade de memorizá-las ou anotá-las em lugares inseguros. Todas as suas senhas são criptografadas e protegidas por uma única senha mestra, que você precisa lembrar.
- **Geração de senhas fortes**: Os gerenciadores de senhas possuem a capacidade de gerar senhas complexas e exclusivas para cada uma das suas contas. Essas senhas são criadas com base em algoritmos seguros e garantem uma proteção adicional contra ataques de hackers.
- **Facilidade de uso**: Com um gerenciador de senhas, você não precisa se preocupar em digitar manualmente suas senhas toda vez que acessa uma conta. O gerenciador armazena seus dados de login e preenche as informações automaticamente quando necessário, facilitando o processo de login em diferentes serviços.
- **Segurança multiplataforma**: A maioria dos gerenciadores de senhas está disponível em diferentes plataformas, como desktop, web e dispositivos móveis. Isso permite que você acesse suas senhas de forma segura em qualquer dispositivo, sincronizando automaticamente as informações entre eles.
- **Monitoramento de violações de dados**: Os melhores gerenciadores de senhas têm recursos integrados de monitoramento de violações de dados. Eles verificam regularmente se suas informações de login foram comprometidas em algum vazamento de dados conhecido e alertam você para que possa tomar as medidas necessárias, como alterar suas senhas.
- **Autenticação de dois fatores**: Muitos gerenciadores de senhas suportam autenticação de dois fatores (2FA), que adiciona uma camada extra de segurança às suas contas. O gerenciador pode armazenar e gerar códigos de autenticação ou atuar como um autenticador para aplicativos e serviços que requerem essa verificação adicional.
- **Compartilhamento seguro de senhas**: Se você precisa compartilhar senhas com outras pessoas, um gerenciador de senhas facilita esse processo. Ele permite que você compartilhe senhas de forma segura, definindo restrições de acesso e acompanhando quem teve acesso aos dados.

Com todos esses benefícios, um cofre (vulgarmente conhecido como gerenciador de senhas) se torna uma ferramenta essencial para proteger suas informações pessoais, garantindo a segurança das suas contas online e simplificando o processo de login. 

Lembre-se sempre de escolher um [gerenciador confiável](https://gustavosaez.github.io/tag/cofre) e adotar boas práticas de segurança, como definir uma senha mestra forte e manter seu dispositivo atualizado.

No caso do 1Password, o meu cofre, ele possui a “[Watchtower](https://watchtower.1password.com/)” que faz um pouco mais que somente estas análises. Um dos recursos mais recentes é a possibilidade de usar as novas “chaves-senhas” (passkeys), trocando a necessidade de senha digitada por um token, como se fosse um FaceID/TouchID.
![](/images/1password-watchtower.png)

O [Enpass](https://gustavosaez.github.io/post/2022/01/29/enpass-um-gerenciador-de-senhas-robusto-e-gratuito.html) oferece algo semelhante.

Proteger suas informações pessoais é essencial no mundo digital em que vivemos. Ao seguir as medidas de segurança mencionadas neste artigo, você estará fortalecendo sua defesa contra vazamentos de dados e violações de privacidade. 

Lembre-se de trocar suas senhas regularmente, utilizar senhas fortes e únicas para cada conta, ativar a autenticação de dois fatores quando disponível e considerar o uso de um cofre de senhas confiável.

Não permita que suas informações pessoais caiam nas mãos erradas. Tome medidas proativas para garantir sua segurança online e proteger sua privacidade. 

Comece hoje mesmo implementando as recomendações mencionadas neste artigo. Lembre-se de que cada passo que você dá em direção à proteção de suas informações pessoais é um passo em direção a uma maior segurança digital.

Proteja-se, proteja suas informações e desfrute de uma experiência online mais segura e tranquila. Sua segurança é importante, então não espere até que seja tarde demais. 

**Aja agora** e proteja o seu mundo digital!