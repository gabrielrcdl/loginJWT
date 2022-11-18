
const jwt = require("jsonwebtoken");

const user = {
  name: "Rafa",
  id: "20",
  username: "rafinha@123.com",
  password: "12345",
};

const secret = "3456wufjiswdredfdfdftfkrwo";


function createToken() {
  // Recebe o payload a carga de dados e um segredo
  const token = jwt.sign({ id: user.id, username: user.username }, secret, {expiresIn: 60,});
  console.log(token);
}

function testeToken(token) {

try{
  const validData = jwt.verify(token, secret);
  console.log(validData);
}
catch(error){   
    console.log(error)
 }
}
testeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJyYWZpbmhhQDEyMy5jb20iLCJpYXQiOjE2Njg3ODg2MDQsImV4cCI6MTY2ODc4ODY2NH0.sjJOVkGBgTInfnSfZx_TQVDgVNYugABLYTd0kFhnSYQ")