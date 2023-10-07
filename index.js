function addTask() {
  let left = document.getElementById("left");
  let a = document.getElementById("i1");
  let d = document.createElement("div");
  let b = document.createElement("span");
  b.innerText = a.value;
  a.value = " ";
  a.placeholder = " ";
  let chbtn = document.createElement("button");
  chbtn.innerText = "+";
  let crbtn = document.createElement("button");
  crbtn.innerText = "-";
  b.style.padding = "20%";
  d.style.padding = "0%";
  d.append(b, chbtn, crbtn);
  left.append(d);
  chbtn.addEventListener("click", () => {
    b.style.textDecoration = "line-through";
  });
  crbtn.addEventListener("click", () => {
    d.remove();
  });
}
document.getElementById("i1").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let a = document.getElementById("i1");
    if (a.value !== " ") {
      addTask();
    } else {
      alert("Enter some Text!");
    }
  }
});
