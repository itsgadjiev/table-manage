const nameInput = document.querySelector('.name-input');
const surnameInput = document.querySelector('.surname-input');
const salaryInput = document.querySelector('.salary-input');
const addBtn = document.querySelector('.add-btn');
const tableInner = document.querySelector('.table-inner');
const nameFilterInput = document.querySelector('.name-filter');
const surnameFilterInput = document.querySelector('.surname-filter');
const salaryMinFilterInput = document.querySelector('.salary-min-filter');
const salaryMaxFilterInput = document.querySelector('.salary-max-filter');
const salaryFilters = document.querySelectorAll('.salary-filter');


const datas = [];


function addToTable() {
    addBtn.addEventListener("click", () => {
        const inputElement = {
            name: `${nameInput.value}`,
            surname: `${surnameInput.value}`,
            salary: `${salaryInput.value}`

        }
        datas.push(inputElement);

        nameInput.value = '';
        surnameInput.value = '';
        salaryInput.value = '';
        tableInner.innerHTML = '';

        datas.forEach((element, idx) => {
            tableInner.innerHTML += `<tr>
            <th scope="row">${idx + 1} </th>
            <td>${element.name}</td>
            <td>${element.surname}</td>
            <td>${element.salary}</td>
        </tr>`
        });


        nameFilterInput.addEventListener('change', () => {
            const filterData = nameFilterInput.value.toLowerCase();
            const filteredData = datas.filter(element => {
                const name = element.name.toLowerCase();
                return name.includes(filterData);
            });

            tableInner.innerHTML = '';

            filteredData.forEach((element, idx) => {
                tableInner.innerHTML += `<tr>
                <th scope="row">${idx + 1}</th>
                <td>${element.name}</td>
                <td>${element.surname}</td>
                <td>${element.salary}</td>
              </tr>`;
            });
        });


        surnameFilterInput.addEventListener('change', () => {
            const filterData = surnameFilterInput.value.toLowerCase();
            const filteredSurnameData = datas.filter(element => {
                const surname = element.surname.toLowerCase();
                return surname.includes(filterData);
            })
            tableInner.innerHTML = '';

            filteredSurnameData.forEach((element, idx) => {
                tableInner.innerHTML += `<tr>
                <th scope="row">${idx + 1}</th>
                <td>${element.name}</td>
                <td>${element.surname}</td>
                <td>${element.salary}</td>
              </tr>`;
            });
        })

        salaryFilters.forEach(element => {
            element.addEventListener('change', () => {
                if (salaryMinFilterInput.value && salaryMaxFilterInput.value) {
                    const filteredSalaryData = datas.filter(element => {
                        return Number(element.salary) >= Number(salaryMinFilterInput.value) && Number(element.salary) <= Number(salaryMaxFilterInput.value);
                    })

                    tableInner.innerHTML = '';

                    filteredSalaryData.forEach((element, idx) => {
                        tableInner.innerHTML += `<tr>
                        <th scope="row">${idx + 1}</th>
                        <td>${element.name}</td>
                        <td>${element.surname}</td>
                        <td>${element.salary}</td>
                      </tr>`;
                    });
                }
                else if (salaryMinFilterInput.value) {
                    const filteredSalaryData = datas.filter(element => {
                        return Number(element.salary) >= Number(salaryMinFilterInput.value);
                    })

                    tableInner.innerHTML = '';

                    filteredSalaryData.forEach((element, idx) => {
                        tableInner.innerHTML += `<tr>
                        <th scope="row">${idx + 1}</th>
                        <td>${element.name}</td>
                        <td>${element.surname}</td>
                        <td>${element.salary}</td>
                      </tr>`;
                    });
                }
                else if (salaryMaxFilterInput.value) {
                    const filteredSalaryData = datas.filter(element => {
                        return Number(element.salary) <= Number(salaryMaxFilterInput.value);
                    })

                    tableInner.innerHTML = '';

                    filteredSalaryData.forEach((element, idx) => {
                        tableInner.innerHTML += `<tr>
                        <th scope="row">${idx + 1}</th>
                        <td>${element.name}</td>
                        <td>${element.surname}</td>
                        <td>${element.salary}</td>
                      </tr>`;
                    });
                }
                else {
                    tableInner.innerHTML = '';
                    datas.forEach((element, idx) => {
                        tableInner.innerHTML += `<tr>
                        <th scope="row">${idx + 1} </th>
                        <td>${element.name}</td>
                        <td>${element.surname}</td>
                        <td>${element.salary}</td>
                    </tr>`
                    });
                }
            })
        })
    })
}

console.log(datas);


addToTable();

