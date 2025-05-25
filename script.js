function showAdminSection(){
  const adminLogin = document.getElementById("admin-login").style.display = "block";
}



document.getElementById('admin-form').addEventListener('submit' , function(event){
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('pswd').value;

  // console.log(username);
  // console.log(password);
  
  const storedUsername = "admin";
  const storedPassword = "password";

  const userMsg = document.getElementById('user-messages');
  
  if(username == storedUsername && password == storedPassword){
    alert("Welcome...! U are Successfully Logged In");
    const adminLogin = document.getElementById("admin-login").style.display = "none";
    const userMsg = document.getElementById('user-messages').style.display = "block"
    
    //Call the function to display user message 
    displayStoredMsg();
  }else{
    alert("Failed!! Credentials dont match");
  }
});

//Contact me section responses

document.getElementById('contactMe').addEventListener('submit' , function(event){
   event.preventDefault();
  const name = document.getElementById('yourName').value;
  const email = document.getElementById('yourEmail').value; 
  const message = document.getElementById('message').value;
  
//   This is a Json for which is used to communicate data from frontend to backend and vice versa
  const response ={name , email , message , date : new Date().toISOString()};
  // console.log(new Date());
  console.log(response);
  
//   Create refference to your dummy dataBase
  
//   This will get all messages in console 
  const DummyDataBase = JSON.parse(localStorage.getItem('DummyDataBase')) || [ ]; //JSON.parse converts JSON structure to JS Object
  
  DummyDataBase.push(response);  //here data is pushed in our variable DummyDataBase
  console.log(DummyDataBase);
//   JSON.stringify will convert JS Object to JSON 
  localStorage.setItem('DummyDataBase' , JSON.stringify(DummyDataBase)); //this is where data goes from JS to localstorage (our temp database)
  
  alert("Thankyou For Your Message , W'll get in touch with you ASAP");
  this.reset();
});

const ThemeBtn = document.getElementById("toggle-btn");
ThemeBtn.addEventListener('click' , function(){
  document.body.classList.toggle("dark-mode");
});

//When u write correct username and passwords , all the user messages must be visible on the page itself

function displayStoredMsg(){
  const responseContainer = document.getElementById("all-messages");
  const DummyDataBase = JSON.parse(localStorage.getItem("DummyDataBase")) || [ ];
  
  //To get msg from DB , we will have to loop through list(DB) and put in the div
  
  DummyDataBase.forEach(response=>{
    const responseElem = document.createElement('div');
    
    responseElem.innerHTML = `
    <p> Name : ${response.name}</p>
    <p> Email : ${response.email}</p>
    <p> Message : ${response.message}</p>
    <p> Date : ${response.date}</p>
    <hr>
    `
    responseContainer.append(responseElem);
  })
}

