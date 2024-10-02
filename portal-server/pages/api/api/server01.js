async function (request, response){
    const apiSecret = process.env.PORTAL_API_SECRET;
    const dynamicDate = new Date();
    const alertaResponse = await fetch(`secret=${apiSecret}`);//colocar a api
    const alertaResponseJson = await alertaResponse.json();
    const dadosAlerta = alertaResponseJson;

    response.json({
        date: dynamicDate.toGMTString()
        //TODO conteúdo do arquivo json filtrando o que não for usado 
    })

}