
var update=0;
var one=1;

function addCounter(){ 
 var status = localStorage.getItem("counter");
 var updateStatus=  parseInt(status);
if (status ==null ){
localStorage.setItem("counter", one);
}else{
    update=updateStatus + 1;
    localStorage.setItem("counter", update)
}
   
  swal("Item added to cart!");
}
function removeCounter(){
    var status = localStorage.getItem("counter");
    var updateStatus=  parseInt(status);
    if (status ==null || 0 ){
localStorage.setItem("counter", update);
}else{
    update=updateStatus - 14;
    localStorage.setItem("counter", update)
}
}

function loadCounter(){
     var status = localStorage.getItem("counter");
    document.getElementById("counter1").textContent=status;
    document.getElementById("counter2").textContent=status;
    limit();
    var soap="soap";
    localStorage.setItem("update", soap);
}

function removeAll(num){
    var status = localStorage.getItem("counter");
    var updateStatus=  parseInt(status);
    if (status ==null || 0 ){
localStorage.setItem("counter", update);
}else{
    update=updateStatus - num;
    localStorage.setItem("counter", update)
}
}
function load(){
           limit();
          total();
          name();
          quantity();
          price();
          sku();
         // currency();
    }

    function total(){
    var subtotal= cartLS.total();
    localStorage.setItem("subtotal",subtotal)
    var total1=parseFloat(subtotal);
    var total2=total1 + 3.75;
    var total3 = total2.toString();
localStorage.setItem("total",total3)
}

function name(){
  var items= cartLS.list()
    const result = items.filter(x => x.id > 0 ).map(x => x.name)
    for(var i=0; i<result.length;i++){
    localStorage.setItem("name"+i+"",result[i] )
    }
}

function quantity(){
   var items= cartLS.list()
    const result = items.filter(x => x.id > 0 ).map(x => x.quantity)
    for(var i=0; i<result.length;i++){
    localStorage.setItem("quantity"+i+"",result[i] )
    }
}
function price(){
  var items= cartLS.list()
    const result = items.filter(x => x.id > 0 ).map(x => x.price)
    for(var i=0; i<result.length;i++){
    localStorage.setItem("price"+i+"",result[i] )
    }
}

function sku(){
   var items= cartLS.list()
    const result = items.filter(x => x.id > 0 ).map(x => x.id)
    for(var i=0; i<result.length;i++){
    localStorage.setItem("sku"+i+"",result[i]+1 )
    }
}

function choose(){
   var items= cartLS.list()
    const result = items.filter(x => x.id > 0 ).map(x => x.id)
   switch (result.length) {
  case 1:
    window.location.href='checkout1.html';
    break;
  case 2:
    window.location.href='checkout2.html';
    break;
  case 3:
    window.location.href='checkout3.html';
    break;
  case 4:
    window.location.href='checkout4.html';
    break;
  case 5:
    window.location.href='checkout5.html';
    break;
  case 6:
    window.location.href='checkout6.html';
    break;
  case 7:
    window.location.href='checkout7.html';
    break;
  case 8:
    window.location.href='checkout8.html';
    break;
  case 9:
    window.location.href='checkout9.html';
    break;
  case 10:
    window.location.href='checkout10.html';
  break;
  default:
    limit();
}
}
function limit(){
    var items= cartLS.list()
    const result = items.filter(x => x.id > 0 ).map(x => x.id)
    if(result.length>10){
        swal("only 10 different items are allow per transaction");
    }
}
