import axios from 'axios';
async function teste1(request, response){
  axios.get(`https://172.16.70.12/api/table.json?content=sensors&output=json&columns=objid,probe,group,device,sensor,status,message,lastvalue,priority,favorite&apitoken=O3DXJ4XITTZPTTNHCQWIT3G3DKT2A7576GDWPVAEL4======`);
  .then(resultado=>{console.log(resultado.data)})
}
