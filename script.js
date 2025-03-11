let elemnt = document.getElementById('btnAddToBucket'); // получение доступа к кнопке по id

let items = {
   item0: { id: 1, title: 'яблоко', cost: 45},    
   item1: {id: 2, title: 'молоко', cost: 43}
};

elemnt.addEventListener('click', (event) =>{
    let idInObj
    for(let el in items){

        idInObj = items[el].id;
    }

    let title = prompt('enter title')
    let cost = prompt('eneter cost')

    
    console.log(title)
    console.log(cost)

    let newItem = {id: idInObj + 1, title: title, cost: cost}
    items.item2 = newItem;

    console.log(items)
    
} );