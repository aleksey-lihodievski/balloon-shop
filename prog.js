let n=0;
items = document.getElementsByClassName('items');
function itemsOnClick(i){
    n++;
    if(n%2 == 1){
        items[i].getElementById(`info${i}`).style.top="0";
    }
    else{
        items[i].getElementById(`info${i}`).style.top="101%";     
    }
    n++
};
