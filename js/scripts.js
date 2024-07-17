//Ini js//
function updateResult(){
    let weightValue = document.querySelector("#input-berat-badan").value;
    console.log(weightValue);
    //jika weightvalue tidak sama dengan null dan wajib weightValue tidak sama dengan ""//
    if(weightValue != null && weightValue !=""){
        document.querySelector("#bmi-result").innerHTML=weightValue;

    }else{
        alert("inputan anda kosong!")
    }
    
}

