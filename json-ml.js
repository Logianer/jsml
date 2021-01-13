function JsonMl(path) {
  $.ajax({
    type: "GET",
    url: path,
    headers:{
    "Access-Control-Allow-Origin": *
    },
    success: function(res) {
      var content = res.content
      var temp = "";

      function drawContent(obj) {
        if (typeof obj == "object") {
          for (let key in obj) {
            if (obj[key].tag == "img") {
              temp += `<${obj[key].tag} src="${obj[key].src||''}" style="${obj[key].style||''}" class="${obj[key].class}" id="${obj[key].id||''}"/>`
            }
            temp += `<${obj[key].tag} style="${obj[key].style||''}"class="${obj[key].class||''}" id="${obj[key].id||''}">${drawContent(obj[key].content)||''}</${obj[key].tag}>`
          }
          return temp;
        } else {
          return obj;
        }
      }
      return drawContent(content);
    }
  })
}
