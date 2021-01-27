
      // Phone Item add event handler

      function addItem(addPhone, phoneQuantity){
      document.getElementById("addPhone").addEventListener("click", function(){
         const phone = document.getElementById("phoneQuantity").value;
         const newPhone = parseInt(phone) +1;
         document.getElementById("phoneQuantity").value = newPhone;

      })
   }

   addItem(addPhone, phoneQuantity);

   // Phone item remove handler

   function removeItem(removePhone, phoneQuantity){
      document.getElementById("removePhone").addEventListener("click", function(){
         const phoneItem = document.getElementById("phoneQuantity").value;
         const phoneValue = parseInt(phoneItem) - 1;
         const resetItem = document.getElementById("phoneQuantity").value = phoneValue;
         if(resetItem == -1){
         document.getElementById("phoneQuantity").value = 0;
      }
      })
   }

   removeItem(removeItem, phoneQuantity);

      
      // Price  add handler for phone

      function priceAddCalculation(addPhone, phonePrice){
         document.getElementById("addPhone").addEventListener("click", function(){
            const phonePrice = document.getElementById("phonePrice").innerText;
            const newPhonePrice = parseInt(phonePrice)+1219;
            document.getElementById("phonePrice").innerText = newPhonePrice;
         })
      }
      priceAddCalculation(addPhone, phonePrice);

// price remove handler for phone
function priceRemoveCalculation(removePhone, phonePrice){
   document.getElementById("removePhone").addEventListener("click", function(){
      const removePhonePrice = document.getElementById("phonePrice").innerText;
      const newRemovePhonePrice = parseInt(removePhonePrice) -1219;
      const resetItemPrice = document.getElementById("phonePrice").innerText = newRemovePhonePrice;
      if(resetItemPrice == -1219) {
         document.getElementById("phonePrice").innerText = 0;
      }
   })
}
priceRemoveCalculation(removePhone, phonePrice);
       
     

   
         


