async function server01(request, response){

    try{
    const apiToken = process.env.PORTAL_API_TOKEN;
    
    if(!apiToken){
        throw new Error("Verifique o Token infomrado e tente novamente");
    }
    
    
    const dynamicDate = new Date();
    const alertaResponse = await fetch(`https://172.16.70.12/api/table.json?content=sensors&output=json&columns=objid,probe,group,device,sensor,status,message,lastvalue,priority,favorite&apitoken=${apiToken}`);

    if(!alertaResponse.ok){
        throw new Error(`Não foi possível coletar as informações. Status: ${alertaResponse.status}`);
    }

    const alertaResponseJson = await alertaResponse.json();
    const dadosAlerta = dadosFiltrados(alertaResponseJson);

    response.json({
        date: dynamicDate.toGMTString(),
        dadosAlerta: dadosFiltrados
        
    })

}catch(error){
    console.error("An error occurred:", error.message);
    response.status(500).json({ error: error.message });
    return("Erro ao tentar acessar a página, tente novamente mais tarde");
}
//TODO conteúdo do arquivo json filtrando o que não for usado 
function dadosFiltrados(dados){
    const camposPermitidos=["id85"];
    return camposPermitidos.reduce((filtro, campo) =>{
        if(dados[campo]){
            filtro[campo]=dados[campo];
        }
        return filtro;
    },{});
}
}
export default server01;
