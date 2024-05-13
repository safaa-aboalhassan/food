

export default async function connect(url,method='get',header={}){
    var config={
    method:method,
    header:header
    }
    var response = await fetch(url,config);
    var json= response.json();
   
        return json;


}