async function callAPI(Url) {

    let FullUrl = "http://localhost/leerjaar 3/Configurator_nijhuis/Configurator-nijhuis/" + Url;
    alert(FullUrl)

    const response = await fetch(FullUrl);
    const myJson = await response.json();

    const output = JSON.stringify(myJson);

    return(output);
}

function StartConfig(){
    let cookie = document.cookie;

    let UUID = cookie["UUID"];

    alert(UUID);

    if(UUID == ""|| UUID == null){
        let response = callAPI("Set/SetUser?"); 
    }else{
        let response = callAPI("Get/GetUser?UUID="+UUID); 
    }
    alert(response);

    window.location.href = "Config1.html";
}