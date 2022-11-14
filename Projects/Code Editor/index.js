

var myCode = CodeMirror(document.querySelector('#monokai'), {
  lineNumbers: false,
  tabSize: 2,
  value: '',
  mode: 'htmlmixed',
  theme: 'monokai'
});

myCode.setSize("100%", "100%");

function startSandbox(){

  
  document.getElementById("output").style.display = "block";
  document.getElementById("output").style.zIndex = 9999;
  document.getElementById("output").style.width = "99%";
  document.getElementById("output").style.height = "100%";
  document.getElementById("output").style.position = "absolute";
  document.getElementById("output").style.border = "solid 10px #272822"
  document.getElementById("output").style.left = 0;
  document.getElementById("output").style.touchAction = "manipulation";
  var code = document.getElementsByTagName("textbox")[0].innerText.replace(/(\r\n|\n|\r)/gm, "");
  console.log(code)
  $("#output").contents().find("body").html(code);
  if($("#output").contents().find("body").css("background-color") == "rgba(0, 0, 0, 0)"){ // if background color of the iframe isnt defined, make it white
    document.getElementById("output").style.backgroundColor = "#ffffff";
  }
}
