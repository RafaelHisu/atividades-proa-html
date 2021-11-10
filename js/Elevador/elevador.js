class Elevador {
  constructor(capacidade_Maxima, total_andar, andar_atual, pessoas_dentro) {
      this.total_andar = 12;
      this.capacidade_Maxima = 5;
      this.andar_atual = 0;
      this.pessoas_dentro = 0;
      }   
  
      entrar(){
          if(this.pessoas_dentro < this.capacidade_Maxima){
              this.pessoas_dentro ++;
               console.log(this.pessoas_dentro + ' entrou no elevador')
          }else {
              console.log('Capacidade máxima atingida');
          }
      }

      sair(){
          if(this.pessoas_dentro > 0){
              this.pessoas_dentro --;
              console.log(this.pessoas_dentro);
          } else {
              console.log('O elevador está vazio');
          }
      }

      subir(){
          if ( this.andar_atual < this.total_andar){
              this.andar_atual ++;
              if (this.andar_atual == 0){
              console.log('Térreo');
              } else {
                  console.log(this.andar_atual + '° andar');
              }
          }else {
              console.log('Último andar')
          } 
      }   

      descer(){
          if (this.andar_atual > 0){
              this.andar_atual --;
              if (this.andar_atual == 0) {
                  console.log ('Térreo');
              } else{
                  console.log(this.andar_atual + '° andar');
              }
          } else {
              console.log('O elevador já esta no térreo');
          }
      }
  }

  var elevadorA = new Elevador();
  
  
  elevadorA.subir();
  elevadorA.entrar();
  elevadorA.sair();
  elevadorA.descer();