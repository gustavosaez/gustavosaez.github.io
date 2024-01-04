---
layout: post
title: "O FBI pode invadir mensagens privadas do Signal em um iPhone bloqueado? Evidências indicam que sim!" #titulo para a barra de enderecos
date: 2021-02-15 23:52 -0300 #formato padrão data e hora
categories: Post
path: "_posts" #caminho da pasta
tags: [ "iphone" ]
#image: /images/CleanShot%202023-12-28%20—%2009h35m29s.png
---

# O FBI pode invadir mensagens privadas do Signal em um iPhone bloqueado? Evidências indicam que sim!
![pix](/images/ufed-featured-3.png)


O Signal se tornou o “rei” dos aplicativos de mensagens seguras ultimamente, roubando usuários do WhatsApp e reunindo milhões de outros procurando formas privadas de comunicação. Isso significa que a polícia e os governos estarão querendo, mais do que nunca, garantir que tenham técnicas forenses para acessar as mensagens do app. Documentos judiciais obtidos pela Forbes não apenas atestam esse desejo, mas indicam que o FBI tem uma maneira de acessar textos do Signal, mesmo que estejam em um iPhone bloqueado.  

As pistas vieram de [Seamus Hughes](https://twitter.com/SeamusHughes) no **Programa de Extremismo da Universidade George Washington** em documentos judiciais contendo capturas de tela de mensagens do Signal entre homens acusados, em 2020, de executar uma operação de tráfico de armas em Nova York. (Os suspeitos ainda não entraram com uma declaração e permanecem inocentes até que se prove o contrário). 

Nos bate-papos do Signal obtidos de um de seus telefones, eles discutem não apenas o comércio de armas, mas também a tentativa de assassinato, de acordo com documentos arquivados pelo Departamento de Justiça. Há também alguns metadados nas capturas de tela, o que indica não apenas que o Signal foi descriptografado no telefone, mas que a extração foi feita em “AFU parcial”. Esse último acrônimo significa “após o primeiro desbloqueio (**A**fter **F**irst **U**nlock)” e descreve um iPhone em um certo estado: um iPhone que está bloqueado, mas que foi desbloqueado uma vez e não desligado. Um iPhone nesse estado é mais suscetível a ter dados extraídos porque as chaves de criptografia são armazenadas na memória. 

Qualquer hacker ou dispositivo hackeado com as vulnerabilidades corretas do iPhone podem juntar chaves e começar a desbloquear dados privados dentro do dispositivo.

Para que a polícia acesse mensagens privadas do Signal a partir de um iPhone, existem algumas outras ressalvas além de um dispositivo que precisa estar no modo AFU. O iPhone em questão parece ser um iPhone 11 (seja Pro ou Max) ou um iPhone SE de segunda geração. Não está claro se a polícia pode acessar dados privados em um iPhone 12. 

Também não está claro qual versão do software estava no dispositivo. Modelos iOS mais recentes tendem a ter melhor segurança. A Apple se recusou a comentar, mas apontou a _Forbes para_ sua [resposta a pesquisas anteriores sobre buscas de iPhones no modo AFU](https://www.wired.com/story/smartphone-encryption-law-enforcement-tools/ "https://www.wired.com/story/smartphone-encryption-law-enforcement-tools/"), na qual observou que eles exigiam acesso físico e eram caros de fazer.  

Um porta-voz do Signal disse: “Se alguém estiver na posse física de um dispositivo e puder explorar uma vulnerabilidade não corrigida do sistema operacional Apple ou Google para ignorar parcial ou totalmente a tela de bloqueio no Android ou iOS, eles poderão interagir com o dispositivo como se fossem seu proprietário.  

>Manter os dispositivos atualizados e escolher uma senha de tela de bloqueio forte pode ajudar a proteger as informações se um dispositivo for perdido ou roubado.  

O advogado do réu no caso de Nova York não respondeu às mensagens. O Departamento de Justiça disse que não podia comentar.

## GrayKey vs. Cellebrite

A exploração forense de dispositivos afeta qualquer aplicativo de comunicações criptografadas, do WhatsApp ao Wickr, não apenas Signal. O que é evidente é que o governo tem uma ferramenta que pode ignorar a criptografia para entrar no que a maioria das pessoas assumiria ser mensagens privadas. A questão permanece: O que é essa ferramenta? É provável que seja uma das duas ferramentas forenses populares para iPhone usadas pelo FBI: a GrayKey ou a Cellebrite UFED.  

GrayKey, uma ferramenta criada pela startup Grayshift, com sede em Atlanta, tem sido uma escolha cada vez mais popular para o FBI. A agência gastou centenas de milhares de dólares na aquisição dos dispositivos, que começam a partir de US$9.995(!). Quando a Forbes obteve uma gravação vazada do CEO da Grayshift, David Miles, falando em meados de 2019, ele disse que a tecnologia de sua empresa poderia obter “quase tudo” em um iPhone no modo AFU.  

Vladimir Katalov, fundador da empresa forense russa ElcomSoft, disse acreditar que GrayKey era a ferramenta em uso no caso de Nova York. “Ele usa alguma abordagem muito avançada usando vulnerabilidades de hardware”, ele levantou a hipótese. Grayshift não havia respondido a um pedido de comentário no momento da publicação.  

Cellebrite, um provedor israelense estabelecido de tecnologia forense, há muito tempo atende à aplicação da lei americana, bem como agências policiais globais. Um porta-voz disse que era política da Cellebrite “não comentar sobre clientes específicos ou usos de nossa tecnologia”, mas acrescentou que “as agências de aplicação da lei estão vendo um rápido aumento na adoção de aplicativos altamente criptografados como o Signal por criminosos que desejam se comunicar, enviar anexos e fazer acordos ilegais que desejam manter discretos e fora da vista da aplicação da lei”.  

Em dezembro, a Cellebrite indicou que havia desenvolvido “técnicas avançadas” para contornar a criptografia do Signal, embora a Signal tenha emitido uma declaração criticando não apenas a empresa, mas relatos da mídia que haviam repetido as alegações da Cellebrite. Em um post no blog, Signal disse que tudo o que Cellebrite fez foi “passar” o Signal em um dispositivo Android que eles fisicamente têm com a tela desbloqueada.  
“Esta é uma situação em que alguém está segurando um telefone desbloqueado em suas mãos e pode simplesmente abrir o aplicativo para olhar as mensagens nele. O post deles era sobre fazer a mesma coisa programaticamente (o que é igualmente simples).”  

Quando o cofundador da Signal, Moxie Marlinspike, comentou sobre as alegações do Cellebrite em dezembro, ele chamou isso de “hora amadora”. Quaisquer que sejam as ferramentas que o FBI usou no caso de Nova York, elas estão longe de ser amadoras.  
—  
_Fonte:_ [_Forbes_](https://www.forbes.com/sites/thomasbrewster/2021/02/08/can-the-fbi-can-hack-into-private-signal-messages-on-a-locked-iphone-evidence-indicates-yes/?sh=9499f7d66244)