import axios from 'axios';
async function teste1(request, response){

  /*
  Teste de fetch com novo front/back;

  Uso de return imediatamente abaixo de fetch();

  https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration
  */

  
  //coleta da data atual de tivação da api
  let dynamicDate = new Date();
  try{
  //função para requisição do json ad PRTG
  let alertaResponse = axios.get("https://172.16.70.12/api/table.json?content=sensors&output=json&columns=objid,probe,group,device,sensor,status,message,lastvalue,priority,favorite&apitoken=O3DXJ4XITTZPTTNHCQWIT3G3DKT2A7576GDWPVAEL4======")
  .then(resultado=>{console.log(resultado.data)})

  //caso a requisição volte com algum estado diferente de 200(ok)
  if(!alertaResponse.ok){
        throw new Error(`Não foi possível coletar as informações. Status: ${alertaResponse.status}`);
    }

  //conversão da resposta de retorno em arquivo Json
  const alertResponseJson = await alertaResponse.json();

  
  //formatação do Json de resposta
  //verificar lógica para filtragem de dados

 let response={

    date: dynamicDate.toGMTString(),
    dados: dadosFiltro
     
}

}catch(error){
    return("Erro ao tentar acessar a página, tente novamente mais tarde");
}

  function dadosFiltro(dados){
    let camposPermitidos=["objid"];
    return camposPermitidos.reduce((filtro, campo)=>{
        if(dados[campo]){
            filtro[campo]=dados[campo];
        }
        return filtro;
    },{});
  }
}
export default  teste1;
