const searchInput = () =>{
    let myInput = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('mytable');
    let tr =myTable.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if(td){
            let tdValue = td.textContent || td.innerHTML;
            if(tdValue.toUpperCase().indexOf(myInput) > -1){
                tr[i].style.display= '';
            }else{
                tr[i].style.display = 'none';
            }
        }
    }
}
