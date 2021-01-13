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
            console.log(obj[key]);
            if (obj[key].tag == "img") {
              temp += `<${obj[key].tag} src="${obj[key].src||''}" style="${obj[key].style||''}" class="${obj[key].class}" id="${obj[key].id||''}"/>`
            } else {
              temp += `<${obj[key].tag} style="${obj[key].style||''}"class="${obj[key].class||''}" id="${obj[key].id||''}">${drawContent(obj[key].content)||''}</${obj[key].tag}>`
            }
          }
        } else {
          return obj;
        }
        return temp;
      }
      $(element).html(`${drawContent(content)}`)
    }
  })
}