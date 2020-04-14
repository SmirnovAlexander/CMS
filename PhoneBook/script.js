let table;
let tableExample = {
    1: {
        first_name: "Alexander",
        second_name: "Smirnov",
        number: "89119727982"
    },

    2: {
        first_name: "Taya",
        second_name: "Penskaya",
        number: "89110938070"
    },

    3: {
        first_name: "Mark",
        second_name: "Filippov",
        number: "89992053903"
    },

    4: {
        first_name: "Maksim",
        second_name: "Yavich",
        number: "89218702398"
    }
};

let refreshDOMTable = () => {
    let tableKeys = Object.keys(table);
    let oldTableBody = document.getElementById("table-body");
    let tableContainer = document.getElementById("table-container");

    tableContainer.removeChild(oldTableBody);

    let newTableBody = document.createElement("span");
    newTableBody.id = "table-body";
    tableContainer.appendChild(newTableBody);

    for (let i = 0; i < tableKeys.length; i++) {
        let currentRow = document.createElement("div");
        let currentId = document.createElement("div");
        let currentFirstName = document.createElement("div");
        let currentSecondName = document.createElement("div");
        let currentNumber = document.createElement("div");
        let currentDeleteBtn = document.createElement("div");

        currentRow.className = "table-row";
        currentId.className = "id";
        currentFirstName.className = "first-name";
        currentSecondName.className = "second-name";
        currentNumber.className = "number";
        currentDeleteBtn.className = "delete";

        currentId.innerHTML = tableKeys[i];
        currentFirstName.innerHTML = table[tableKeys[i]].first_name;
        currentSecondName.innerHTML = table[tableKeys[i]].second_name;
        currentNumber.innerHTML = table[tableKeys[i]].number;
        currentDeleteBtn.innerHTML = '<input type="button" value="&#10008;">';

        currentRow.appendChild(currentId);
        currentRow.appendChild(currentFirstName);
        currentRow.appendChild(currentSecondName);
        currentRow.appendChild(currentNumber);
        currentRow.appendChild(currentDeleteBtn);

        newTableBody.appendChild(currentRow);
    }

    let deleteBtns = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteBtns.length; ++i) {
        deleteBtns[i].addEventListener("click", () => {
            let idToDelete = deleteBtns[i].parentNode.children[0].innerHTML;
            deletePersonFromTable(idToDelete);
        });
    }
};

let deletePersonFromTable = id => {
    let tempTable = {};
    let tableKeys = Object.keys(table);
    for (let i = 0; i < tableKeys.length; ++i) {
        if (id > tableKeys[i]) {
            tempTable[tableKeys[i]] = table[tableKeys[i]];
        } else if (id < tableKeys[i]) {
            tempTable[tableKeys[i] - 1] = table[tableKeys[i]];
        }
    }
    table = tempTable;
    refreshDOMTable();
};

let addPersonToTable = (first_name, second_name, number) => {
    if (first_name !== "" && second_name !== "" && number !== "") {
        let tableKeys = Object.keys(table);
        table[tableKeys.length + 1] = {
            first_name: first_name,
            second_name: second_name,
            number: number
        };

        refreshDOMTable();
    }
};

let init = () => {
    table = tableExample;
    let newPersonSubmitBtn = document.getElementById("new-person-submit");
    newPersonSubmitBtn.addEventListener("click", key => {
        let newPersonFirstName = document.getElementById("new-first-name")
            .value;
        let newPersonSecondName = document.getElementById("new-second-name")
            .value;
        let newPersonNumber = document.getElementById("new-number").value;

        addPersonToTable(
            newPersonFirstName,
            newPersonSecondName,
            newPersonNumber
        );

        document.getElementById("new-first-name").value = "";
        document.getElementById("new-second-name").value = "";
        document.getElementById("new-number").value = "";
    });

    refreshDOMTable();
};

init();
