async function callAPI(Url) {
    let FullUrl = "https://api.tnkrr.nl/" + Url;
    alert(FullUrl)

    const response = await fetch(FullUrl);
    const myJson = await response.json();

    const output = JSON.stringify(myJson);

    alert(output);
    return(output);
}

async function StartConfig(){

    let cookieUUID = getCookie("UUIDKey");

    if(cookieUUID == ""|| cookieUUID == null){
        UUID = Math.floor(Math.random() * 10000001);

        ResponseAPI = await callAPI("Set/SetUser?Email=h@h.nl&UUID="+UUID); 
    }else{
        ResponseAPI = await callAPI("Get/GetUserData?UUID="+cookieUUID); 
    }

    setCookie("UUIDKey",UUID,30);

    return ResponseAPI;
}

async function MakeProject(ProjectType,Project_ID) {

    let cookieUUID = getCookie("UUIDKey");

    ResponseAPI = await callAPI("Set/SetProject?Room_Type="+ ProjectType+ "&UUID="+ cookieUUID+ "&Project_ID="+ Project_ID); 

    return ResponseAPI;
}

async function MakeRoom(Room_ID, RoomHoogte, RoomBreedte){

    RoomSize = 200;

    ResponseAPI = await callAPI("Set/SetRoom?CoordX="+RoomBreedte+"&CoordY="+RoomSize+"&CoordZ="+RoomHoogte+"&Square=1&Room_ID="+Room_ID); 

    return ResponseAPI;

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