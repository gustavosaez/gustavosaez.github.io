---
layout: post
title: "Enpass, um gerenciador de senhas robusto e gratuito" #titulo para a barra de enderecos
date: 2022-01-28 23:52 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "cofre", "gerenciadordesenhas", "enpass", "1password" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# Enpass, um gerenciador de senhas robusto e gratuito
![](/images/enpass1.png)

Como eu sempre digo e o próprio slogan Enpass, na imagem acima, diz, um gerenciador de senhas atualmente é mais que um gerenciador de senhas, então neste post trataremos Gerenciador de Senhas como **Cofre**, ok?

Ser um cofre não é uma exclusividade Enpass, entretanto, ele se sobressai em muitos (e outros) aspectos. Pra quem participa da ~~Zona Segura~~, sabe que sou/fui usuário do 1Password, um excelente **cofre**.

Enpass
Minha história com o cofre Enpass começou em fevereiro de 2015, quando eu já buscava ampliar minha segurança digital.

Por anos alimentei o cofre com tudo o que é importante digitalmente, isto é, tudo além das senhas, como documentos, licenças de software, notas, dados de cartão de crédito, [2FA](https://gustavosaez.github.io/tag/2fa) e mais.

![](/images/enpass2.webp)
_Data do primeiro download_

O Enpass me chamou a atenção por ser, na época, um dos poucos cofres tão robusto e completo e disponível em várias plataformas e com a possibilidade de ter o próprio controle dos dados inseridos nele.

Enpass permite escolher aonde salvar os dados, sendo em nuvem própria, nuvem de terceiros (iCloud, Box, Gmail, etc) ou localmente (offline).

Além de, atualmente, ter planos bem competitivos, é um dos poucos que (ainda) oferece a possibilidade de compra única/vitalícia. Entretanto, não se aplica para planos família, este, só assinando ~R$15.

## Ida para o 1Password
Eu estava muito satisfeito com o Enpass, mesmo ele tendo um desenvolvimento um pouco mais lento e o 1Password se demonstrava mais “bonito” e tendência.

Como nada acontece por acaso, 3 anos depois participei de um sorteio do grande [Gustavo Faria (Cocatech)](http://cocatech.com.br/) para testar gratuitamente por 1 ano o 1Password Família e ganhei.

Foi o começo da migração do Enpass para o 1Password. Na época o Enpass não tinha um plano família e essa era a oportunidade ideal para embarcar minha esposa nessa.

## Primeiras Impressões
Embora fosse mais bonito, notei algumas coisas que me incomodaram um pouco, como a não possibilidade de definir os parâmetros da senha, apenas a quantidade de caracteres. Eu gostaria de poder definir, por exemplo, 30 caracteres, sendo 4 números, 6 letras minúsculas, 10 maiúsculas e 10 caracteres especiais adicionando também a possibilidade de excluir caracteres que podem não ser aceitos em alguns sites.

![Alt text](/images/image.png)

Outro incomodo foram os anexos, enquanto no Enpass um anexo poderia estar dentro do item cadastrado, no 1Password seriam 2 itens separados. Exemplo: Imagine que acabou de comprar uma licença do Office e recebeu a Nota Fiscal e quer anexar à chave da licença. Pois bem, no Enpass ela fica dentro do cadastro de licença do Office, já no 1Password você tem 1 cadastro com a chave e 1 cadastro de documento (com a NF) e só é possível criar um “link” entre os dois. Veja você mesmo:
![Alt text](/images/enpass-1password.png)

Felizmente o 1Password, embora salve separado, tem uma categoria “Documentos” que facilita. De todo modo, logo me adaptei e passei a adotá-lo como oficial. Minha esposa foi na sequência.

A possibilidade de não precisar instalar o app na máquina foi o que me ganhou frente ao Enpass, bastava a extensão no navegador, login na conta 1Password e voilá.

Passei a assiná-lo desde então, sempre com pagamento anual pra me custa o menos possível. Logo, ao invés de R$ 25,90/mês, pago/pagava R$ 219,90/ano (~R$18/mês).

2 anuidades pagas e surgem rumores do 1Password 8 e tudo de ruim que pode vir com ele.

## 1Password 8
1Password é uma empresa e como toda empresa, visa lucro que gera novidades, mas nem toda novidade é relativamente boa.

Com o anúncio da versão 8, muitos usuários começaram a deixar o app e migrar para outros serviços. Dentre as inúmeras mudanças, a reescrita do app em Electron foi a que mais gerou burburinhos. A empresa estaria abrindo mão da qualidade em prol dos lucros?

Desenvolver um app em Electron é uma forma de otimizar o desenvolvimento do software, “unificando tudo em um” e só compilando a mesma versão para todas as plataformas que desejar, é como se fosse um WebApp.

Você já deve ter usado algum desses apps MS Teams, Dropbox, Discord, né? E independente do seu sistema operacional, seja macOS, Windows, Linux ou usar diretamente no navegador. Ele terá a mesma “cara” e o mesmo comportamento.

Ou seja, é uma página web que foi compilada em app para que você tenha instalada na máquina.

Ok, mas qual o grande problema disso? – Bem, geralmente a experiência é péssima e o consumo de recursos da máquina aumentam drasticamente. Um app Electron consome muita memória RAM e muito armazenamento.

Outro problema na nova versão, são recursos que mudarão e outros que se perderão, justamente por ser Electron e não mais um app nativo. Visualização de quantidade de itens, segmentação, categorização, e até mesmo atalhos de teclado serão impactados. Entre várias outras mudanças desagradáveis.

## A decisão de deixar o 1Password
Claro que eu poderia ser mais otimista e pensar que tudo iria se ajustar, que eu me adaptaria às mudanças e pagaria R$ 220 por ano por um app que eu estaria desgostoso de usar, mas surge a notícia que o 1Password recebeu um investimento de US$ 620 milhões para focar em clientes corporativos, ou seja, é a informação necessária para desiludir qualquer um que achava que o 1Password ainda teria olhos para seus usuários finais e daria ouvidos à eles.

Uma matéria mais completa com a opinião do Rodrigo Ghedin [pode ser lida aqui](https://manualdousuario.net/notinha-1password-620-milhoes-futuro/). Não só isso, você também encontra o anúncio oficial desse investimento [nesta página do 1Password](https://blog.1password.com/future-of-1password/).

## Retorno ao Enpass
Com toda essa justificativa acima, decidi voltar pro excelente Enpass. Algumas mudanças aconteceram no Enpass também, mas felizmente todas para melhor.

Primeiro acesso e ele restaura meus antigos registros, deletei todos e pude importar todos do 1Password facilmente, porém o 1Password não exporta arquivos em sua exportação nativa “.1pf”. Tudo bem, não fiquei tão surpreso com mais isso e também eram poucos anexos (cerca de 20 só).

Importação realizada e logo da pra perceber que a nova casa te dá mais controle, mas como eu disse no começo, o 1Password é melhor acabado e permite inserir a própria imagem nos itens cadastrados. Coisa que eu, por ser muito visual, sempre fiz. Basta ver na imagem acima o Audio Hijack sem ícone no Enpass e com um ícone dele no 1Password.

Mas isso não é um problema, funcionalidade acima da estética, afinal o Enpass está em constante desenvolvimento e também está disponível em todas as plataformas e com a melhor segmentação e categorização que já vi.

Uma outra coisa que me chamou a atenção foi que ele identificou 59 senhas fracas e que no 1Password não apareciam como fracas. Já gostei mais.

Não acho que isso seja uma questão de segurança, mas talvez de “algoritmo” na geração das senhas, já que o 1Password tem o seu e não permite personalização e o Enpass permite criar sua própria complexidade. Pode ser que isso já denote mais um ponto positivo ao Enpass.

![](/images/enpass3.png)  
_Auditoria do Enpass das minhas senhas_

## É pago?
Assim como o excelente Bitwarden, o Enpass também é gratuito e ilimitado, entretanto, somente em sua versão para computadores.

Quanto às versões móveis e alguns recursos que demandam mais desenvolvimento, inclusive certo recurso de infraestrutura, como Alertas de vazamento de sites e identificação de 2FA nas contas, são cobrados.

Algo raro de se ver hoje em dia é a possibilidade de compra única vitalícia. Talvez ele seja “_o último dos moicanos_“.
![](/images/enpass-planos.png)  
_Tabela de cobrança do Enpass_

## Fechamento
O 1Password não deixou de ser recomendado aqui no PodApps, ele segue firme e forte, entretanto este é um relato pessoal, se você considerou o 1Password ou acabou de assiná-lo, não tem motivos para se arrepender, ele é excelente, e, principalmente se você chegou agora nesse mundo, não vai ter toda essa “perda”, pois já encarará um novo 1Password e se adaptará ao novo. Eu que sou chato ué.

Mas se você não gosta do Enpass (que é gratuito para macOS, Windows, Linux, Navegadores), nem do 1Password (pago), recomendo que use o Bitwarden. Com certeza será a melhor opção pra você.

Já os demais, não posso opinar, alguns já se envolveram com ataques, vazamentos, venda de dados e etc. Sabe como é né?

Vou ficando por aqui, mas se precisar de algo, você sabe aonde me encontrar.

Ahh, e não esquece que eles não são só gerenciadores de senhas, mas **cofres**! Guarde tudo o que achar importante nele.
___

*_App nativo é quando um app é desenvolvido especificamente para aquele sistema operacional. No macOS por exemplo, os app devem ser desenvolvidos em Objective-C ou Swift. No Windows, C#, C++, entre outros._
