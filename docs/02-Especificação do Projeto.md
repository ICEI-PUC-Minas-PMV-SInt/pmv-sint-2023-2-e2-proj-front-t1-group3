# Especificação do Projeto

## Perfis de Usuários
---

Os perfis levantados durante o processo de entendimento do problema são apresentados nas tabelas a seguir:

### **Perfil 01 – Carlos Afonso**

>| Descrição                                                                   |
| --------------------------------------------------------------------------- |
| Estudante de Ciências da Computação na faculdade PUC Minas – Belo Horizonte |

>| Necessidades                                              |
| --------------------------------------------------------- |
| Chat para conversas; Campo de especificações dos animais. |


### **Perfil 02 – Marta Gomes**

>| Descrição                                                                                                  |
| ---------------------------------------------------------------------------------------------------------- |
| Formada em Arquitetura, trabalha como projetista em uma construtora que atende todo o território nacional. |

>| Necessidades                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------- |
| Publicação de animais; Filtros de busca; Chat para conversa; Vinculação a redes sociais; Fotos e vídeos de animais. |


### **Perfil 03 – Nayara de Carvalho**

>| Descrição                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Formada em Medicina Veterinária e atualmente atua também como Presidente e gestora da Ong Amor de Pelos, uma organização civil e sem fins lucrativos. |

>| Necessidades                                              |
| --------------------------------------------------------- |
| Aplicativo de fácil manejo; Divulgação de animais de rua. |

### **Perfil 04 – Ricardo Silveira**

> | Descrição|
| ---------------------------- |
| Formado em administração, trabalha como consultor administrativo. É voluntário da ONG Ampara Animal.  |

>| Necessidades             |
| --------------------------------------------------------- |
|Perfil de quem quer adotar; Impulsionamento de publicação.|

## Histórias de usuários
---
A partir da compreensão das personas identificadas, foram registradas as seguintes histórias dos usuários:

>|Eu como (quem)|Quero desejo (o que)|Para (porque)|
|---|---|---|
|Carlos Afonso |Quero um chat onde possa conversar com quem deseja doar o animal para trocar informações mais detalhadas.|Isso evitaria que eu adotasse um animal de uma pessoa que pratica maus tratos, podendo ter mais confiança naquele que quer doar. |
|Carlos Afonso|Um campo com as especificações dos animais, como raça, peso e porte.|Isso me ajudaria a adotar um animal que seja condizente com minha moradia, evitando que eu adote algum animal de grande porte e depois tenha que o doar devido à falta de espaço.|
|Marta Gomes|Quero um aplicativo de fácil manejo para os receptores e ter contato mais direto com quem deseja adotar.|Para ampliar a forma de divulgação do nosso trabalho.|
|Marta Gomes|Um meio digital que eu possa divulgar nossos animais e nossas feiras de adoção.|Dessa forma conseguiríamos aumentar o público das feiras e consequentemente mais animais seriam adotados.|
|Nayara de Carvalho|Quero um meio digital que possa publicar os animais de rua que ajudo.|Não depender apenas das redes sociais para encontrar receptores.|
|Nayara de Carvalho|Desejo que pessoas interessadas em adotar possam encontrar exatamente os animais que procuram, utilizando filtros de busca.|Tornar rápida e assertiva o processo de adoção, sem se misturar com aquilo que não há interesse.|
|Nayara de Carvalho|Quero um chat para interagir com os interessados em adoção.|Para não ter de divulgar publicamente meus contatos.|
|Nayara de Carvalho|Quero compartilhar em minhas redes sociais as publicações do app. |Aumentar ainda mais o alcance. |
|Nayara de Carvalho|Quero poder fotografar e filmar os animais para doação diretamente pelo app. |Tornar mais rápida e prática a publicação de animais para doação. |
|Ricardo Silveira |Quero verificar o perfil de quem quer adotar animais.|Encontrar pessoas que tem condições de cuidar e fazer o bem pelo animal.|
|Ricardo Silveira |Impulsionar animais que tem menos procura.|Despertar interesse em receptores que talvez não tenham pensado em certo tipo de animal e ajudá-lo a ter um lar mais rapidamente.|
|Ricardo Silveira |Ampliar o alcance da ONG. |Deixar de depender apenas das redes sociais e feiras de adoção. |
|Rita Moretti |Um aplicativo didático e de fácil acesso para expor a situação e animais disponíveis para adoção. |A usuária em questão tem muita dificuldade no acesso a tecnologias, então precisa de algo didático e fácil uso. |
|Rita Moretti |Comunicação direta com o indivíduo que deseja adotar.|Por possuir mais de 30 anos de experiência nesse ramo, Rita sabe que é necessário o contato com a pessoa para determinar se ela é apta a entregar boas condições de vida ao animal. |
|Rita Moretti |Sistema de feedback e denúncias. |Identificar perfis confiáveis e de possível agressores de animais, para aumentar a confiança no uso da plataforma por parte dos usuários.  |

## Requisitos do Projeto
---
A finalidade dos requisitos funcionais e não funcionais tem por propósito, respectivamente, descrever (ou enumerar) as possibilidades de interação dos usuários com o sistema e especificar os aspectos que ele deverá apresentar de maneira geral. Os requisitos serão descritos a seguir:

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

>|ID|Descrição|Prioridade|
|---|---|---|
|RF-01|O sistema deve permitir o cadastro de usuários (responsáveis pelos animais, interessados em adotar, ONGS e instituições públicas ou privadas) de forma simples e intuitiva. |Alta|
|RF-02|O sistema deve permitir ao usuário o gerenciamento de sua conta, podendo adicionar descrições, contatos e dados em geral. |Alta|
|RF-03|O sistema deve permitir o login do usuário de forma simples e intuitiva |Alta|
|RF-04|O sistema deve permitir o cadastro, feito por usuários, das informações dos animais (nome, idade, vacinação, castração, entre outros). |Alta|
|RF-05|O sistema deve apresentar funcionalidade de buscar/filtrar, permitindo a pesquisa de animais pelo usuário. |Alta|
|RF-06|O sistema deve permitir o usuário visualizar a página com as informações completas do animal. |Alta|
|RF-07|O sistema deve permitir a visualização das informações do responsável pelo cadastro do animal. |Alta|
|RF-08|O sistema deve permitir a visualização das informações do interessado por um determinado animal. |Alta|
|RF-09|O sistema deve apresentar funcionalidade de chat, um meio de comunicação entre os interessados e os responsáveis pela adoção. |Alta|
|RF-10|O sistema deve apresentar, para cada animal, uma imagem correspondente (thumbnail). |Alta|
|RF-11|O sistema deve oferecer um menu inicial onde é possível visualizar vários animais disponíveis para adoção. |Alta|
|RF-12|O sistema deve permitir a publicação de fotos e vídeos dos animais disponíveis para a adoção. |Alta|
|RF-13|O sistema deve apresentar integração com outros aplicativos/redes sociais, a fim de divulgar os animais e a plataforma em si. |Alta|
|RF-14|O sistema deve apresentar funcionalidade de compartilhamento de postagens com outras redes/sociais. 	|Alta|
|RF-15|O sistema deve apresentar funcionalidade de comentários nas postagens sobre animais para adoção. |Média|
|RF-16|O sistema deve permitir a denúncia de postagens que não seguem as diretrizes do site. |Média|
|RF-17|O sistema deve possibilitar a criação de vídeos e fotos diretamente pela plataforma acessando a câmera do usuário. |Média|
|RF-18|O sistema deve reconhecer o local geográfico do usuário para recomendar os animais em ordem de distância.|Média|

### Requisitos não funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender:

>|ID|Descrição|Prioridade|
|---|---|---|
|RF-01|O site deve cumprir com as diretrizes da Lei Geral de Proteção de Dados (13.709/ 2018) - LGPD |Alta|
|RF-02|O site deve ser responsivo ao tamanho da tela do usuário (tablet, smartphone, desktop e notebook) com alterações mínimas.|Alta|
|RF-03|O site deve ser compatível com os navegadores Google Chrome, Safari, Microsoft Edge, Firefox |Alta|
|RF-04|O sistema deve ser intuitivo, de fácil compreensão e usabilidade ao usuário com um grau mínimo de conhecimento digital. |Alta|