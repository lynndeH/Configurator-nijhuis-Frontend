async function callAPI(Url) {

    let FullUrl = "http://localhost/leerjaar 3/Configurator_nijhuis/Configurator-nijhuis/" + Url;
    alert(FullUrl)

    const response = await fetch(FullUrl);
    const myJson = await response.json();

    const output = JSON.stringify(myJson);

    alert(output);
    return(output);
}

async function StartConfig(){

    UUID = Math.floor(Math.random() * 10000001);

    setCookie("UUID",UUID,30);

    alert(UUID);

    if(UUID == ""|| UUID == null){
        let Response = await callAPI("Set/SetUser?Email=h@h.nl"); 
    }else{
        let Response = await callAPI("Get/GetUser?UUID="+UUID); 
    }
    alert(Response);

    window.location.href = "Config1.html";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}