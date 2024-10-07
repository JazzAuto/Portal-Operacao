async function teste1(request, response) {
    // Collect the current date
    const dynamicDate = new Date();
    
    try {
        // Fetch JSON from PRTG (replace the empty string with the actual URL)
        const alertaResponse = await fetch("YOUR_API_URL_HERE", {
            method: 'GET',
        });

        // Check if the response is ok (status code 200)
        if (!alertaResponse.ok) {
            throw new Error(`Não foi possível coletar as informações. Status: ${alertaResponse.status}`);
        }

        // Convert the response to JSON
        const alertResponseJson = await alertaResponse.json();

        // Filter the data
        const filteredData = dadosFiltro(alertResponseJson);

        // Prepare the response object
        const apiResponse = {
            date: dynamicDate.toGMTString(),
            dados: filteredData,
        };

        // Send the response
        response.status(200).json(apiResponse);
        
    } catch (error) {
        console.error(error); // Log the error for debugging
        response.status(500).json({ message: "Erro ao tentar acessar a página, tente novamente mais tarde" });
    }

    // Function to filter data
    function dadosFiltro(dados) {
        const camposPermitidos = ["objid"];
        return camposPermitidos.reduce((filtro, campo) => {
            if (dados[campo]) {
                filtro[campo] = dados[campo];
            }
            return filtro;
        }, {});
    }
}

export default teste1;
