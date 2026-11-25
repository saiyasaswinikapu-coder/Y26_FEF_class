let name = "SAI";
const age = 18;

document.getElementById("StudentName").textContent = "Name :" + name;

document.getElementById("StudentAge").textContent = "Age :" + age;
//useing inner html//
// document.getElementBYId("result").innerHTML = "Name" + name + "<br>Age:" + age;//

document.getElementBYId("result").innerHTML = "Name" + name + "<br>Age:" + age;

document.write("Name :" + name + "<br>");
document.write("Age:" + age);

function greeting()
{
    alert("hello everyone");
}
greeting();