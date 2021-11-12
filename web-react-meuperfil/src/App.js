import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
 
  render(){
    return(
      <body>
        <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"></link>

        <div id="conteudo">
        <div class="form-row text-center">
        <div class="col-12">
          <h1>Meu Perfil</h1>
          <img></img>
        </div>
        </div>
        <h3>Dados Pessoas</h3>
        <FotoPerfil />

        <p>Nome: Victor Silva</p>
        <p>Idade: 20</p>

        <h3>Formação</h3>
        <p>Ensino Superior: Sistema de Informação</p>
        <h3>Experiência</h3>
        <p>Suporte TI</p>
        <h3>Projetos</h3>
        <p>Nenhum</p>
      </div>
      </div>
      </body>
    );
  }
}
 
export default App;
 
class FotoPerfil extends Component {
  render(){

    let img = 'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/p206x206/132419884_1073150676445971_2512976520766692969_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_eui2=AeGw8tJj7OlC16xoiD1a9-oKoapN2Mm3gq-hqk3YybeCr73QQqoienHqjpTwp1s5q6YzDHVild9dxZYweWcM2kVz&_nc_ohc=AdnsS6aqSAsAX-KVubb&_nc_ht=scontent-gru1-2.xx&oh=310dab2acdc060e7082d994288b1ec27&oe=61B1E975';
 
    return(
        <img src={img} width={250} height={180} />
    );
  }
}