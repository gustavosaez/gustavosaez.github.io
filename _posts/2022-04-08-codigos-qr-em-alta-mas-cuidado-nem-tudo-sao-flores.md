---
layout: post
title: "Códigos QR em alta, mas cuidado, nem tudo são flores" #titulo para a barra de enderecos
date: 2022-04-08 23:52 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "qrcode", "golpe", "phishing", "engenhariasocial" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# Códigos QR em alta, mas cuidado, nem tudo são flores
### Códigos QR ou QR Codes estão em alta, mas, claro, como tudo na tecnologia, nem tudo são flores.
![](/images/qrcode.png)

Há muito tempo, quando os códigos QR surgiram, me lembro de já orientar a não sair escaneando todo e qualquer código por aí, não tinha como saber previamente para aonde o código te levaria.

Depois de muitos anos e muito estudo, o que eu temia, passou a ser verdade. Comprovadamente é possível enganar os usuários e levá-los para aonde não se deve.

A nível de curiosidade, o significado das iniciais é Quick Response Code. E com o avanço da tecnologia dos smartphones, a popularização destes códigos tem se espalhado rapidamente.

Há vários websites que permitem gerar estes códigos rapidamente para que você compartilhe alguma informação.

Através dos QRCodes você pode compartilhar:
- URLs (Links)
- Pagamentos (Mercado Pago, PIX, Bancos, etc.)
- Textos
- Contatos (vCard)
- Apps
- Número de Telefone
- SMS
- Geolocalização
- Evento
- E-mail
- Wi-Fi
- Imagens
- Músicas
- Criptomoedas
- Redes Sociais (Telegram, WhatsApp, TikTok, Snapchat, etc.)
- Muito mais…

Dos sites que geram estes códigos, alguns permitem até a personalização deles para deixá-lo mais característico com o que deseja. Abaixo, por exemplo, os que uso quando compartilho meus contatos diretos:
![](/images/qrcode2.png)

Mas nem todo mundo usa para o bem e, como missão principal deste blog, tentaremos expor os riscos e como mitigá-los.

## História
Pasmem, mas o QRCode foi inventado em 1994 por Denso Wave e passou a ser usado em grande escala no Japão.

## Como gerar um QRCode?
Há vários sites que geram QRCodes, inclusive apps, mas nada melhor que ter algum que possa confiar, e nesses abaixo, já passou pela curadoria PodApps.

- https://www.the-qrcode-generator.com/
- http://goqr.me/
- http://www.qr-code-generator.com/
- http://www.qrstuff.com/

## Vida útil de um QRCode
Não há limite para uso do QRCode. Você pode gerá-lo e usar para sempre. Todo QRCode acaba por ser um redirecionador de informação. Se for um link e o link parar de existir, o QRCode irá te levar ao site e o seu navegador não conseguirá chegar no destino por não existir mais, mas a informação “gravada” no QRCode permanecerá imutável. O mesmo serve para qualquer outra informação gravada nele.

Alguns pontos a se levar em conta. Geolocalização não é algo que da pra mudar, né? – Então cuidado. Se não for um lugar público, é bom não gravar num QRCode.

## Os códigos QR podem ser hackeados?
Um código QR é a matriz quadrada com um pequeno arranjo de pontos quadrados pretos. Hackear um código QR significa manipular a ação sem modificar o código QR. Isso não é possível. Os códigos QR podem ser maliciosos e podem desencadear ações maliciosas. Mas esse código QR não será o mesmo que o código QR legítimo. Dois códigos QR com ações diferentes nunca mais serão os mesmos. Você certamente verá padrões diferentes em ambos os códigos QR. Portanto, os códigos QR não podem ser hackeados. Mas pode ser malicioso e os hackers podem usar um código QR para vários fins maliciosos.

## Phishing (QRishing)
O golpe que mais comento e o mais usado na Engenharia Social e para isto, não vou prolongar a leitura deste post explicando o que é, mas deixo abaixo links para entender melhor como funciona:
- [#39 – PRECISAMOS falar de Engenharia Social… de novo!](https://gustavosaez.github.io/episódios/2022/02/06/precisamos-falar-de-engenharia-social-de-novo.html)
- [#26.1 – Engenharia social não faz conta, mas pode pegar a sua conta](https://gustavosaez.github.io/episódios/2020/02/08/engenharia-social-nao-faz-conta-mas-pode-pegar-a-sua-conta.html)
- [#26 – Engenharia social não faz conta, mas pode pegar a sua conta](https://gustavosaez.github.io/episódios/2020/02/08/engenharia-social-nao-faz-conta-mas-pode-pegar-a-sua-conta.html)
- [Seja iPhone ou Android, veja como criminosos conseguem zerar sua conta bancária após um furto](https://gustavosaez.github.io/post/2021/07/10/seja-iphone-ou-android-veja-como-criminosos-conseguem-zerar-sua-conta-bancaria-apos-um-furto.html)

O funcionamento do QRCode é fácil de entender, abra sua câmera, mire para o QRCode e voilá.

É aqui que os golpistas tentam enganar os usuários. Como eu disse acima, os códigos QR não podem ser hackeados. Então, crackers ou golpistas tentam alterar o código QR adicionado no banner.

Eles também podem imprimir o tipo semelhante de banners falsos e colocá-los em locais públicos. Clientes inocentes digitalizarão esses códigos QR falsos para visitar os sites, mas serão redirecionados para sites de phishing.

A maioria das pessoas julga um site por sua aparência, e as páginas de phishing são muito semelhantes a sites legítimos. Em dispositivos móveis, é difícil verificar o endereço completo nos navegadores.

Devido ao espaço limitado de tela, os navegadores não mostram o endereço completo no campo URL. E a maioria das pessoas nunca tenta verificar o endereço completo. Isso torna os usuários mais vulneráveis. Quando eles usam esta página de phishing para fazer login, suas senhas são comprometidas.

Embora esse truque de phishing tenha escopo limitado, ele é mais eficaz. Existem vários estudos de caso que confirmam claramente que as pessoas geralmente confiam em códigos QR e se tornam vítimas de QRishing em locais públicos.

## Distribuição de software malicioso
Os golpistas geralmente usam sites maliciosos para distribuir malware via unidade por ataque de download. Hoje em dia, a maior parte dos ataques via download está sendo feita contra usuários do Android.

Ataques de transmissão por download são ataques nos quais um site baixa, de modo forçado, o software no seu dispositivo quando você visita o site. Não precisa de nenhuma ação do lado do usuário. Visitar o site é suficiente para acionar a ação de download.

Os golpistas tentam instalar aplicativos maliciosos e, em seguida, explorar esse dispositivo. Esses dispositivos infectados podem se conectar a uma botnet existente ou podem enviar SMS para números pagos. Também pode vazar seus dados.

Ao usar códigos QR para apontar para esse tipo de site malicioso, podemos facilmente enganar os usuários. Os usuários não podem ver a URL, então não há sensação de dúvida. Nos códigos QR, não há necessidade de inserir a URL manualmente, os usuários digitalizam apenas o código QR. E eles só sabem o que você vai escrever sobre o código QR.

Na Rússia, um código QR malicioso, após escaneado, enviou SMS para números pagos que custam US$ 5 por SMS. Os ataques desse tipo foram identificados contra dispositivos Android.

## Apontando para sites potencialmente prejudiciais
Isso é semelhante ao que aprendemos no ponto anterior, mas não se trata de servir malware. Às vezes, os sites têm explorações de navegador que podem causar muito mais danos. As explorações do navegador podem permitir o acesso ao microfone/câmera, acessar dados do navegador, enviar e-mails ou se juntar a uma botnet para realizar um ataque DDOS em qualquer site legítimo. Todas essas ações ocorrem em segundo plano, para que os usuários nunca saibam disso. Eles só verão um site, mas estão sendo enganados.

## Como se proteger de códigos QR maliciosos
Códigos QR maliciosos têm escopo limitado, mas podem ser prejudiciais. Então, você precisa sempre cuidar da sua segurança enquanto usa códigos QR. Se você vai usá-lo a partir de banners em locais públicos, você precisa ser seletivo. Há poucas coisas que você pode fazer para se proteger de códigos QR maliciosos e seus ataques.

## Observe antes de usar
Se você encontrar um código QR em qualquer banner em um local público, olhe para ele de perto. Na maioria das vezes, os golpistas colocam seu código QR falso acima do código QR legítimo em um banner legítimo. Então tente ver se é real ou não. Você pode verificar tocando no banner (se possível).

Se não parecer que está realmente impresso no pôster, não o use. Siga esta diretriz para códigos QR em locais públicos. Sua observação pode salvá-lo de ataques. Se você não tiver certeza, nunca escaneie esse código QR.

## Seja suspeito e nunca forneça informações pessoais ou de login
Sempre desconfie da página em que você acessa via código QR. Nunca compartilhe suas informações pessoais nessas páginas. Só faça isso se o código QR for de uma fonte muito confiável e você confiar no site. E sim, evite inserir suas informações de login. Pode ser uma página de phishing.

Portanto, para login, sempre insira o URL manualmente na barra de endereços do navegador. Inserir informações de login nas páginas em que você acessa via código QR significa se colocar em apuros. Então, por que correr o risco apenas para evitar um pouco de esforço extra? Abra um navegador, digite o endereço e faça login diretamente no site.

## Observe o URL antes de prosseguir
Alguns apps que escaneiam código QR também mostram o URL real antes de prosseguir e pedem para confirmar se você deseja visitar o URL. Você pode usar esses scanners de código QR para saber qual URL o código QR lhe enviará. Isso ajudará você a saber se o código QR é malicioso ou não. Olhar para o código QR não confirma se ele é malicioso ou não. Então, eu recomendo o uso de scanners de código QR seguros.

Norton Snap é um bom aplicativo de scanner de código QR com recursos de segurança integrados. Este aplicativo está disponível para as plataformas Android e iOS. Você pode usar este aplicativo de scanner de código QR para evitar qualquer atividade maliciosa no seu smartphone. Ele não apenas mostra as URLs, mas também verifica as URLs dentro de seu banco de dados de links maliciosos. Se ele encontrar alguma URL maliciosa dentro do código QR, ele irá avisá-lo.