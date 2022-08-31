function downloadFile(filename, content) {
 
  const element = document.createElement('a');
  
 
  const blob = new Blob([content], { type: 'plain/text' });

   
  const fileUrl = URL.createObjectURL(blob);
  
  
  element.setAttribute('href', fileUrl); //file location
  element.setAttribute('download', filename); // file name
  element.style.display = 'none';
  
   
  document.body.appendChild(element);
  element.click();
  
  
  document.body.removeChild(element);
};

window.onload = () => {
  document.getElementById('export').
  addEventListener('click', e => {
    
    if(document.getElementById("file").value !== null) {
        
        var filename = document.getElementById("file").value+".txt";
    } else {
        var filename = "textfile.txt";
    }
    
  
    const content = document.getElementById('page').value;
    
 
    if (filename && content) {
      downloadFile(filename, content);
    }
  });
};

function saveText() {

    document.cookie = "name="+document.getElementById("file").value+"; expires=Thu, 18 Dec 3000 12:00:00 UTC";
    document.cookie = "text="+document.getElementById("page").value+"; expires=Thu, 18 Dec 3000 12:00:00 UTC";
    alert("Successfully saved!")


}

function loadText() {
    if($.cookie("text") !== undefined) {
        console.log("Data found. Loading it in...")
        document.getElementById("page").value = $.cookie("text")
        document.getElementById("file").value = $.cookie("name")
    }

}

window.onload = (event) => {
  loadText();
};


