
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
   
  swal("Item added to cart!").then(() => {
  location.reload();
});
    
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
    document.getElementById("counter").textContent=status;
    console.log(status)
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


 //paypal payment
      paypal.Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '0.01'
              }
            }]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }
      }).render('#paypal-button-container'); // Display payment options on your web page