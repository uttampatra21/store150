const searchFun = () => {
    const searchBox = document.getElementById('search-items').value.toUpperCase();

    const storeItems = document.getElementById('product-list');
    const product = document.querySelectorAll('.product');
    const productName = document.getElementsByTagName("h2");

    for(var i=0; i < productName.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];
        
        if(match){
            let textValue = match.textContent || match.innerHTML
        
            if(textValue.toLocaleUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
                
}