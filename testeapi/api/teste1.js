import axios from 'axios';
async function teste1(request, response){

  /*
  TODO: criação do bloco try catch para tratamento de erros de arquivo, rede e funcionamento registrando em:
  console.log() || arquivo log || retorno simples de erro
  para melhor análise;

  Teste de fetch com novo front/back;

  Uso de return imediatamente abaixo de fetch();
  */

  
  //coleta da data atual de tivação da api
  let dynamicDate = new Date();
  
  //função para requisição do json ad PRTG
  let alertResponse = axios.get(`https://172.16.70.12/api/table.json?content=sensors&output=json&columns=objid,probe,group,device,sensor,status,message,lastvalue,priority,favorite&apitoken=O3DXJ4XITTZPTTNHCQWIT3G3DKT2A7576GDWPVAEL4======`);
  .then(resultado=>{console.log(resultado.data)})

  //caso a requisição volte com algum estado diferente de 200(ok)
  if(!alertaResponse.ok){
        throw new Error(`Não foi possível coletar as informações. Status: ${alertaResponse.status}`);
    }

  //conversão da resposta de retorno em arquivo Json
  const alertResponseJson = /*await????*/ alertResponse.json();

  //formatação do Json de resposta
  response.json{

    date: dynamicDate.toGMTString(),
    //verificar lógica para filtragem de dados 
  }

}
default export teste1;
