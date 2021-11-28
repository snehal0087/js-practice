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


    //Itetare over data 
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].productName + "  " + data[i].productPrice);

       let prodRow = document.createElement('tr');
         let prodCell = document.createElement('td');
         let prodPriceCell = document.createElement('td');
         let addButtonCell = document.createElement('td');
         let removeButtonCell = document.createElement('td');
         prodCell.innerHTML = data[i].productName;
         prodPriceCell.innerHTML = data[i].productPrice;
       //  addButtonCell.innerHTML = "+";
        // removeButtonCell.innerHTML = "-";
         prodRow.appendChild(prodCell);
         prodRow.appendChild(prodPriceCell);
         prodRow.appendChild(addButtonCell);
         prodRow.appendChild(removeButtonCell);
        productTableRow.appendChild(prodRow);

    }

}