function JsonMl(path, element) {
  $.ajax({
    type: "GET",
    url: path,
    success: function(res) {
      var content = res.content
      var temp = "";

      function drawContent(obj) {
        if (typeof obj == "object") {
          for (let key in obj) {
            if (obj[key].tag == "img") {
              temp += `<${obj[key].tag} src="${obj[key].src||''}" style="${obj[key].style||''}" class="${obj[key].class}" id="${obj[key].id||''}"/>`
            } else {
              temp += `<${obj[key].tag} style="${obj[key].style||''}"class="${obj[key].class||''}" id="${obj[key].id||''}">${drawContent(obj[key].content)||''}</${obj[key].tag}>`
            }
          }
          return temp;
        } else {
          return obj;
        }
      }
      $(element).html(`<div>${drawContent(content)}</div>`)
    }
  })
}