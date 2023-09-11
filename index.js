

 
const opendetals = document.querySelector(".userutput"); 
let usersOutput = document.querySelector(".people");
const users = {
  khan: "khan",
  omar: "omar",
  gul: "gul",
  imran: "imran"
};
usersOutput.style.display ="none"
const btn = document.querySelector(".search1");
document.addEventListener("keyup", function(event) {
 if(event.key === "Enter") {
  myfunction2()
 }
}) 

const checkif = document.querySelector(".search").addEventListener("keydown", function(event) {
      console.log(event.key)
      usersOutput.style.display ="block"
      opendetals.classList.remove("hidden")
      if(event.key.startsWith(event.key)) {
        for(const [value, key] of Object.entries(users)) {
         
          if(key.startsWith(event.key)) {
            console.log(key)
         
           usersOutput.insertAdjacentHTML("afterbegin", ` <p>${key} </p>`);
            console.log(firstletter)
          } else if (event.key === 'Backspace') {
           usersOutput.textContent = " ";
           usersOutput.style.display ="none"
           opendetals.classList.add("hidden")
           }
        }
      }
 })

const myfunction2 = function() {
   opendetals.classList.remove("hidden")
   const usersinput = document.querySelector(".search").value.trim().toLowerCase();

  //object
   usersOutput.textContent = "";
  if (!usersinput) {
    usersOutput.style.display ="block"
    usersOutput.insertAdjacentHTML("afterbegin", ` <p>${"No input"} </p>`);
    usersinput = document.querySelector(".search").value = "";
  } else if (users[usersinput]) {
      
    usersOutput.style.display ="block"
    usersOutput.insertAdjacentHTML("afterbegin", ` <p>${users[usersinput]} </p>`);
    usersinput = document.querySelector(".search").value = "";
  } else {
     usersOutput.style.display ="block"
    usersOutput.insertAdjacentHTML("afterbegin", ` <p>${"No resault"} </p>`);
    usersinput = document.querySelector(".search").value = "";
  }
}
btn.addEventListener("click", myfunction2)
const total = document.querySelector(".total"); 
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal"); 
const myfunction = function() {
   modal.classList.toggle("hidden"); 
}
total.addEventListener("click", myfunction)
closeModal.addEventListener("click", function() {
 modal.classList.add("hidden"); 
  console.log("it works")
})
document.addEventListener("keydown", function (event) {
  if(event.key === "Escape" && !modal.classList.contains("hidden")) {
      myfunction();
  }
})
const showProduct = document.querySelector(".showProduct"); 
const arr = {
  fistname: "imran", 
  catrgories: ["imran" , 'khan', 'jan'],
  mainStarter: ["nasir1", "nasir", "mom"],
  order(categoriesindex, mainindex) {
    // const [...all] = this.catrgories; 
    // console.log(all)
    return [this.catrgories[categoriesindex], this.mainStarter[mainindex]]; 
  }
}
// gives both the element and the index of element 
console.log(arr.order(1,1));
/*
const myfunction3 = function({firsname, lastname, email, address}) {
  return `order resived ${firsname} ${lastname} email ${email}  address ${address}`
 }

const inputvalue = document.querySelector(".inputvalue")
const inputs = document.querySelectorAll(".inputs");
const [firsname, lastname,email, address] = inputs
 inputvalue.addEventListener("click", function() {
  
  if(!firsname.value && !lastname.value && !email.value && !address.value) {
    console.log("no inputs")
  }else {
    const resault1 = myfunction3({firsname: firsname.value, lastname: lastname.value, email: email.value, address: address.value})
    console.log(resault1)
    firsname.value ="";
  }
})
*/
// myfunction3(...newarr)
 const productname = document.querySelector("#productname"); 
 const productAction = document.querySelector(".productAction")
 const imageElement = document.querySelector(".imges");
 const showparentRemovehidden = document.querySelector(".showparent");
 const apple = {
  nameProduct: ["Oranges","Price 22$", "Return time:  30 Dayes"], 
  imageSrc: ["imges/imge--3.png"],
  
  order: function () {
    showparentRemovehidden.classList.remove("hidden")
    const img = document.querySelector(".imgeOfproduct").src = this.imageSrc;
    for (const [i, el] of this.nameProduct.entries()) {
      productname.insertAdjacentHTML("beforebegin" , ` <p>${i + 1}: ${el} </p>`) 

    }
  },
  takeAction:productAction.addEventListener("click", function() {
    apple.order(); 
  
  })
}

const rest = new Map(); 
rest.set('open', 9).set('close', 22).set(true, 'we are open').set(false, 'we are closed')
const time = 23; 
console.log(rest.get(time > rest.get('open')) && rest.get(time < rest.get('close')))

const names = "imran is good person"; 
const changename = names.slice(5); 

console.log(changename)
console.log(new String ('imran'))