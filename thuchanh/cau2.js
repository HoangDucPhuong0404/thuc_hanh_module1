
function checknumber() {
    let arr = [1, 2, 5, 6, 8, 9, 4];
    let number = document.getElementById("textbox").value;
    console.log(checkNumberinArr(number,arr))
    if(checkNumberinArr(number,arr) != false){
        alert(`vi tri ${number} `);
    }
    else {
        alert(`${number} khong nam trong mang ${arr.join(' - ')}`);
    }
}
    function checkNumberinArr(number,arr) {
        for (let i = 0; i < arr.length; i++) {
            if (number == arr[i]) {
                return i;
                break;
            }
            else {
                return false;
                break;
            }
            
        }
    }
   