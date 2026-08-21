exports.handler = async () => {
  const API_URL =
    "https://uni001eu5.fusionsolar.huawei.com/rest/pvms/web/kiosk/v1/station-kiosk-file?kk=ie2viBuxotNw5fLrkQJF7JyJ7H8jGbvI";

  try {
    const response = await fetch(API_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const text = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: text
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: false,
        error: err.message
      })
    };
  }
};