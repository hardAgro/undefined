# Undefined Group
# Monitoramento de irrigação por microaspersor

O projeto traz o monitoramento de aspersores em uma rede mesh (com ESP8266). É utilizado um sensor óptico reflexivo para verificar se o microaspersor não está com mal funcionamento (entupido, por exemplo), também sendo possível saber a quantidade de litros utilizados na irrigação por cada microaspersor. Para tal o sensor detecta a mudança de faixa de preto para branco(marcação que tem no microaspersor) como um giro.

## Getting Started

### Pré-requisito

* npm v6.4+
* Arduino IDE

### Instalação

Na pasta `hardware` estão os códigos que devem ser executados nas ESP's e no NodeMCU. Para passar os códigos para o hardware basta abrir em uma IDE Arduino e enviar o código via serial.

Na pasta `./frontend`, execute

```shell-session
npm install
```

e, após as dependências instaladas, rode

```shell-session
npm run serve
```
Para executar a  API, dentro da pasta `api-VIPA/src/` execute o comando 
```shell-session
npm src index.js
```

Para abrir a aplicação basta acessar `localhost:8080` no navegador.

## Tecnologias Utilizadas

### Linguagens

> Aplicação

* HTML
* CSS
* JS

> Software Embarcado
* C/C++

### Outras

> Aplicação

* Shards Dashboard Vue (MIT)
* Vuex (MIT)
* VueRouter (MIT)
* Vue.js (MIT)
* git (GPLv2)
* vue-cli3 (MIT)
* NodeJS (MIT)
* MongoDB

> Software Embarcado

* Arduino IDE (GPLv2)
* ESP8266WiFi (LGPL)
* ESP8266WiFiMesh (LGPL)


## Autores

* **[Italo André](https://github.com/IACF)** - *Especialista*
* **[Patrícia Coelho](https://github.com/patriciacoelho)** - *Desenvolvedor*
* **[Victor Gabriel](https://github.com/victorgfb)** - *Desenvolvedor*

## Licença

[MIT License](https://github.com/hardAgro/topzera/blob/master/LICENSE.txt)
