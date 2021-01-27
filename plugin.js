// Phone Increase handler
// document.getElementById("phoneIncrease").addEventListener("click", function() { 
//     phoneProductChangeHandler(true);
// })

// // Phone Decrease handler
// document.getElementById("phoneDecrease").addEventListener("click", function(){
//     phoneProductChangeHandler(false);
    
// })
// Phone product change handler function
function phoneProductChangeHandler(isIncrease){
    const phoneInput = document.getElementById("phoneCount");
    const phoneInputCount = parseInt(phoneInput.value);

    // const phoneNewInputCount = (phoneInputCount - 1);
    let phoneNewInputCount = phoneInputCount;
    if(isIncrease == true){
        phoneNewInputCount = (phoneInputCount +1);
    }
    if(isIncrease == false && phoneInputCount > 0){
        phoneNewInputCount = (phoneInputCount - 1);
    }
    phoneInput.value = phoneNewInputCount;
    const phoneTotal = phoneNewInputCount *1219;
    document.getElementById("phoneTotal").innerText = "$" + phoneTotal;

    
}



//  case increase handler
// document.getElementById("caseIncrease").addEventListener("click", function () {
//     const caseInput = document.getElementById("caseCount");
//     const caseInputCount = parseInt(caseInput.value);
//     const caseNewInputCount = (caseInputCount + 1);
//     caseInput.value = caseNewInputCount;
//     const caseTotal = caseNewInputCount * 59;
//     document.getElementById("caseTotal").innerText = "$" + caseTotal;


// })

//  Case Decrease handler
// document.getElementById("caseDecrease").addEventListener("click", function () {
//     const caseInput = document.getElementById("caseCount");
//     const caseInputCount = parseInt(caseInput.value);
//     const caseNewInputCount = (caseInputCount - 1);
//     caseInput.value = caseNewInputCount;
//     const caseTotal = caseNewInputCount * 59;
//     document.getElementById("caseTotal").innerText = "$" + caseTotal;
// })


// Case increase handler

// document.getElementById("caseIncrease").addEventListener("click", function () {
//     caseProductChangeHandler(true);
// });

// Case Decrease handler

// document.getElementById("caseDecrease").addEventListener("click", function () {
//     caseProductChangeHandler(false);
// });

// Product item change handler function

function caseProductChangeHandler(isIncrease){
    const caseInput = document.getElementById("caseCount");
    const caseInputCount = parseInt(caseInput.value);

    let caseNewInputCount = caseInputCount;
    if(isIncrease == true){
        caseNewInputCount = caseInputCount + 1 ;
    }
    if (isIncrease == false && caseInputCount >0){
        caseNewInputCount = caseInputCount - 1 ;
    }
    caseInput.value = caseNewInputCount;
    const caseTotal = caseNewInputCount * 59;
    document.getElementById("caseTotal").innerText = "$" + caseTotal;
}