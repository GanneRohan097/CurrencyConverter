let crate={};
async function addcountries(){
    let res=await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    let data=await res.json();
    crate=data.rates;
    for(let con in data.rates){
        let option1=document.createElement('option');
        let option2=document.createElement('option');
        option1.value=con;
        option1.textContent=con;
        option2.value=con;
        option2.textContent=con;
        document.getElementById('from-country').appendChild(option1)
        document.getElementById('to-country').appendChild(option2)
    }
}
addcountries();
function save() {
    let from=document.getElementById('from-country').value;
     let to=document.getElementById('to-country').value;
      let amount=Number(document.getElementById('inputamount').value);
      console.log(from,to,amount);
      let usrate=amount/crate[from];
      let result=usrate*crate[to];
      document.getElementById('ConvertedAmount').innerText=result.toFixed(3);
}