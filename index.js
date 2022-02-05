function fn1(){
  const str = document.getElementById("text1").value;
  const str1 = document.getElementById("text2").value;
  const regex = new RegExp(str1);
  console.log(regex.test(str));
  if(regex.test(str)){
    document.getElementById("result").value = "True";

  }else{
    document.getElementById("result").value = "False";

  }

}
