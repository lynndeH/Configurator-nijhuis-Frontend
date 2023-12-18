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

    let cookieUUID = getCookie("UUIDKey");
    alert(cookieUUID);

    if(cookieUUID == ""|| cookieUUID == null){
        UUID = Math.floor(Math.random() * 10000001);

        ResponseAPI = await callAPI("Set/SetUser?Email=h@h.nl&UUID="+UUID); 
    }else{
        ResponseAPI = await callAPI("Get/GetUserData?UUID="+cookieUUID); 
    }
    alert(ResponseAPI);

    setCookie("UUIDKey",UUID,30);

    return ResponseAPI;
}

async function MakeRoom(){

}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }