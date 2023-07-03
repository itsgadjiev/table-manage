const nameInput = document.querySelector('.name-input');
const surnameInput = document.querySelector('.surname-input');
const salaryInput = document.querySelector('.salary-input');
const addBtn = document.querySelector('.add-btn');
const tableInner = document.querySelector('.table-inner');
const datas = [];


function addToTable() {

    addBtn.addEventListener("click", () => {
        const inputElement = {
            name: `${nameInput.value}`,
            surname: `${surnameInput.value}`,
            salary: `${salaryInput.value}`


        }
        datas.push(inputElement);
        console.log(datas);
        nameInput.value = '';
        surnameInput.value = '';
        salaryInput.value = '';
        tableInner.innerHTML = '';

        for (let i = 0; i < datas.length; i++) {
            tableInner.innerHTML += `<tr>
            <th scope="row">${i + 1} </th>
            <td>${datas[i].name}</td>
            <td>${datas[i].surname}</td>
            <td>${datas[i].salary}</td>
           
        </tr>`

        }

    })

}
addToTable();
