let list = JSON.parse(localStorage.getItem("items")) || [];
innerhtmltext = "";
document.querySelector(".addbox").addEventListener("click", () => {
  add();
});

function save() {
  innerhtmltext = "";
  let counter = 0;
  list.forEach((obj, index) => {
    let htmltext = `
    <div class="rmtext">${obj.text}</div>
     <div class="rmdate">${obj.date}</div>
     <button class="removebox">Delete</button>
     `;
    counter++;
    innerhtmltext += htmltext;
  });

  document.querySelector(".showdiv").innerHTML = innerhtmltext;
  localStorage.setItem("items", JSON.stringify(list));

  document.querySelectorAll(".removebox").forEach((deleteobj, index) => {
    deleteobj.addEventListener("click", () => {
      list.splice(index, 1);
      save();
    });
  });
}
save();

function add() {
  let textbox = document.querySelector(".textbox");
  let datebox = document.querySelector(".datebox");

  let text = textbox.value;
  let date = datebox.value;
  if(!text){
    return alert("The text should not be empty!");
  }
  if(!date){
    return alert("The Date should be valid!");
  }
  
  textbox.value = "";
  datebox.value = "";
  list.push({ text, date });

  save();
}
