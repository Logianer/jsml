# Json Markup-Language
json-ml (Json Markup-Lanuage) is a JavaScript libary for writing an html-website in json. It uses [jQuery](https://jquery.com) for that.

<a id="toc"></a>
## Table of Contents
1) [Installation](#install)
2) [Usage](#main)
      - [JSON Format](#format)
          - [Common Elements](#elements)
          - [Images](#image)
3) [Common Errors](#trouble)

## Installation
<a id="install"></a>
Install the libary by importing jQuery and json-ml in your `.html` file:
```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/Logianer/json-ml/json-ml.js" charset="utf-8"></script>
```
It's as simple as that! You successfully installed json-ml!</p>
[Table of Contents](#toc)

## Usage
<a id="main"></a>
To use `json-ml` we add a `<script>` tag under the imported scripts and say:
```js
$("body").html(JsonMl("example.json"))
```
whereas "body" is the selected element and "example.json" the `.json` file with the "html" inside. More on that [here](#format). If you want a simple example, look at the template [here](https://github.com/Logianer/json-ml/tree/template)</p>
[Table of Contents](#toc)
