---
layout: post
title: "A Nova Era da Segurança Online: Introdução das Passkeys e o Declínio do Phishing" #titulo para a barra de enderecos
date: 2023-11-08 09:41 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "cofre", "1password", "enpass", "bitwarden", "golpe", "passkey", "phishing" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# A Nova Era da Segurança Online: Introdução das Passkeys e o Declínio do Phishing
### As passkeys chegaram e estão ganhando espaço.
![](/images/passkeys.png)

## O que é?
Passkeys, traduzida por alguns por “chaves-senha” é uma forma avançada de autenticação que permite proteger suas contas e informações pessoais de forma ainda mais segura que uma senha difícil.

As passkeys funcionam de maneira semelhante aos tradicionais métodos de autenticação, como senhas ou códigos de verificação, mas com uma camada adicional de segurança. Em vez de memorizar ou usar um [cofre](https://gustavosaez.github.io/tag/cofre) e para inserir uma senha, você pode usar uma passkey para acessar seus aplicativos e dispositivos.

## Suporte
Para habilitar o uso de passkeys, é necessário que o serviço tenha suporte e que você tenha um dispositivo que possua algum tipo de autenticação biométrica, seja Facial, Digital ou íris.
Atualmente, diversos aplicativos e dispositivos populares já oferecem suporte a essa funcionalidade assim como navegadores da web, aplicativos de [autenticação de dois fatores (2FA)](https://gustavosaez.github.io/episódios/2018/09/12/2FA-Like-A-Boss.html) e cofres como [1Password](https://gustavosaez.github.io/post/2022/08/17/configurar-um-cofre-nao-e-tao-dificil-quanto-voce-pensa), Bitwarden e [Enpass](https://gustavosaez.github.io/post/2022/01/29/enpass-um-gerenciador-de-senhas-robusto-e-gratuito.html).

Você pode descobrir se um serviço específico suporta passkeys acessando o site https://passkeys.directory. Essa é uma ferramenta útil que lista os serviços e dispositivos compatíveis com passkeys, permitindo que você verifique facilmente se o serviço desejado está na lista.

## Fim das senhas?
A utilização de passkeys oferece um nível adicional de segurança aos seus dados pessoais e contas online. Portanto, se você quer adicionar uma camada extra de proteção, considere habilitar essa funcionalidade sempre que possível.

Isso não significa o fim das senhas, você ainda precisará de uma senha para armazenar com segurança suas passkeys.

Lembre-se de sempre [utilizar senhas seguras](https://gustavosaez.github.io/post/2023/11/03/como-proteger-suas-informacoes-pessoais-e-evitar-vazamentos-de-dados-dicas-de-seguranca-online) e proteger suas passkeys, assim como faria com qualquer outra informação sensível.

A segurança é essencial para manter suas contas e dados protegidos contra ameaças online.

## Fim do golpe por Phishing!!!
Se esta palavra te parece estranha, saiba que ela é mais comum do que imagina.

O Phishing é a prática de golpistas em criar sites e/ou e-mails falsos que induzem a pessoa a cair em um golpe. 

Pode ser uma promoção falsa que roubará seus dados de cartão, pode ser um e-mail de banco que roubará seus dados bancários, entre outras possibilidades.

Quem nunca recebeu um SMS com uma proposta de emprego de 4000-5000 por dia e um link para cadastro? Incrível né?

De todo modo as passkeys acabarão com isso e se você utilizá-las nunca mais um golpe phishing te pegará. Entenda como funciona.

Resumidamente, quando você cria uma passkey com um site específico, o site e seu dispositivo criam um token único de comunicação, logo somente eles conseguem “se validar” e te dar acesso à conta. Vamos usar de exemplo o TikTok, ok?

Suponha que você habilitou a passkey em sua conta do TikTok (pois ele já possui suporte), então você terá um token único para o TikTok em seu dispositivo e o TikTok terá “o mesmo” token único do lado deles.

Quando você tenta fazer login usando a Passkey, o TikTok irá consultar o token que eles possuem e validar com o token que você está fornecendo (por exemplo, FaceID), se ambos estiverem OK, você terá acesso, do contrário, ficará sem acesso.

É aí que o Phishing morre. Entendeu que esse token é único entre você e o site que deseja acessar? Se, por acaso, você clicar em um link falso do TikTok, este site falso não terá o token para validação, então por mais que tente usar a passkey, não conseguirá acesso, logo, o golpe não é bem executado e se encerra aí.

## O que achou?
E aí, como está o uso das passkeys por aí? Já habilitou? Não conhecia? Ficou confuso? Me conta: https://gustavosaez.com.br