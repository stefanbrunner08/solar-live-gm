exports.handler = async () => {
  const KIOSK_URL = "https://uni001eu5.fusionsolar.huawei.com/rest/pvms/web/kiosk/v1/station-kiosk-file?kk=Fr8l9ItFy5uoGJPO8homHdo5p4GHiqOh";
  try {
    const response = await fetch(KIOSK_URL,{headers:{"User-Agent":"Mozilla/5.0"}});
    const text = await response.text();
    return {statusCode:200,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:text};
  } catch(err){
    return {statusCode:500,headers:{"Content-Type":"application/json"},body:JSON.stringify({success:false,error:err.message})};
  }
};