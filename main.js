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

  textbox.value = "";
  datebox.value = "";
  list.push({ text, date });

  save();
}
