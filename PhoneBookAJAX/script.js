let table;

let tableExample = {
    1: {
        first_name: "Alexander",
        last_name: "Smirnov",
        number: "89119727982"
    },

    2: {
        first_name: "Taya",
        last_name: "Penskaya",
        number: "89110938070"
    },

    3: {
        first_name: "Mark",
        last_name: "Filippov",
        number: "89992053903"
    },

    4: {
        first_name: "Maksim",
        last_name: "Yavich",
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
        let currentlastName = document.createElement("div");
        let currentNumber = document.createElement("div");
        let currentDeleteBtn = document.createElement("button");

        currentRow.className = "table-row";
        currentId.className = "id";
        currentFirstName.className = "first-name";
        currentlastName.className = "last-name";
        currentNumber.className = "number";
        currentDeleteBtn.className = "delete";

        currentId.innerHTML = tableKeys[i];
        currentFirstName.innerHTML = table[tableKeys[i]].first_name;
        currentlastName.innerHTML = table[tableKeys[i]].last_name;
        currentNumber.innerHTML = table[tableKeys[i]].number;
        currentDeleteBtn.innerHTML = "✘";

        currentRow.appendChild(currentId);
        currentRow.appendChild(currentFirstName);
        currentRow.appendChild(currentlastName);
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

    document.cookie = "phone_book=" + JSON.stringify(table);
    database_management("sychronize");
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deletePersonFromTable(id) {
    await sleep(1);
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
}

let addPersonToTable = (first_name, last_name, number) => {
    if (first_name !== "" && last_name !== "" && number !== "") {
        let tableKeys = Object.keys(table);
        table[tableKeys.length + 1] = {
            first_name: first_name,
            last_name: last_name,
            number: number
        };

        refreshDOMTable();
    }
};

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function getCookie(name) {
    let matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)"
        )
    );
    return matches ? JSON.parse(matches[1]) : undefined;
}

function database_management(action) {
    $.ajax({
        url: "database/database_management.php",
        type: "POST",
        dataType: "text",
        data: "action=" + action
    });
}

let init = () => {
    if (getCookie("phone_book") == undefined) {
        table = tableExample;
    } else {
        table = getCookie("phone_book");
    }

    let newPersonSubmitBtn = document.getElementById("new-person-submit");
    newPersonSubmitBtn.addEventListener("click", key => {
        let newPersonFirstName = document.getElementById("new-first-name")
            .value;
        let newPersonlastName = document.getElementById("new-last-name").value;
        let newPersonNumber = document.getElementById("new-number").value;

        addPersonToTable(
            newPersonFirstName,
            newPersonlastName,
            newPersonNumber
        );

        document.getElementById("new-first-name").value = "";
        document.getElementById("new-last-name").value = "";
        document.getElementById("new-number").value = "";
    });

    let clearCacheBtn = document.getElementById("clear-cache");
    clearCacheBtn.addEventListener("click", key => {
        deleteAllCookies();
        init();
    });

    $("#create-table").click(function() {
        database_management("create");
    });

    $("#delete-table").click(function() {
        database_management("delete");
    });

    refreshDOMTable();
};

init();
