fetch('products.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    console.log(data);
    let productTableRow = document.getElementById("products");
    let count=0;
    //Itetare over data 
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i].productName + "  " + data[i].productPrice);
        let productname = data[i].productName;
        let prodRow = document.createElement('tr');
        let prodCell = document.createElement('td');
        let prodPriceCell = document.createElement('td');
        let addButtonCell = document.createElement('td');
        let removeButtonCell = document.createElement('td');
        prodCell.innerHTML = data[i].productName;
        prodPriceCell.innerHTML = data[i].productPrice;
        addButtonCell.innerHTML = "<button id='add'>+</button>";
        removeButtonCell.innerHTML = "<button>-</button>";
        
        addButtonCell.addEventListener("click",function(){
            console.log(data[i].productName+ "  "+ data[i].productPrice+"   "+(++count));
          });
        prodRow.appendChild(prodCell);
        prodRow.appendChild(prodPriceCell);
        prodRow.appendChild(addButtonCell);
        prodRow.appendChild(removeButtonCell);
        productTableRow.appendChild(prodRow);

        

    }

    
}

function addToBill() {
    console.log("productname");
}