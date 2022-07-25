document.querySelector("form").addEventListener("submit",formsubmit);

function formsubmit(event){
  event.preventDefault();
  var cat=document.querySelector("#cat").value;
  var Title=document.querySelector("#Title").value;
  var des=document.querySelector("#desc").value;
  var price=document.querySelector("#price").value;
  console.log(cat,Title,des,price);
}