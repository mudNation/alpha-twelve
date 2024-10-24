const tableHeader = [
    {
        accessor: "event_name",
        type: "text",
    },
    {
        accessor: "date",
        type: "date",
    },
    {
        accessor: "speaker",
        type: "text",
    },
    {
        accessor: "status",
        type: "status",
    },
]


const defaultData = [
    {
        event_name: "Cloud Innovation Summit", 
        date: "2024-10-15",
        speaker: "Jane Doe",
        status: "completed"
    },
    {
        event_name: "Blockchain Revolution Conference", 
        date: "2024-11-05",
        speaker: "Dr. Peter Smith",
        status: "in_progress"
    },

    {
        event_name: "AI in Healthcare Symposium", 
        date: "2024-12-01",
        speaker: "Dr. Aisha Malik",
        status: "completed"
    },

    {
        event_name: "Future of Fintech Forum", 
        date: "2024-10-25",
        speaker: "John Lee",
        status: "completed"
    },

    {
        event_name: "Data Analytics in Business", 
        date: "2024-11-12",
        speaker: "Rachel Moore",
        status: "completed"
    },

    {
        event_name: "Sustainable Energy Expo", 
        date: "2024-09-28",
        speaker: "Prof. Alan Green",
        status: "completed"
    },

    {
        event_name: "Web3 Interfaces Workshop", 
        date: "2024-10-10",
        speaker: "Kevin Adams",
        status: "in_progress"
    },

    {
        event_name: "Cybersecurity for Startups", 
        date: "2024-11-19",
        speaker: "Emily Zhang",
        status: "completed"
    },

    {
        event_name: "Smart Cities Forum", 
        date: "2024-10-18",
        speaker: "Dr. Maria Hernandez",
        status: "in_progress"
    },

    {
        event_name: "Tech Safari Mixer", 
        date: "2024-09-30",
        speaker: "Guest Panel",
        status: "in_progress"
    },
]

let tableData = defaultData; 

let sortField = ""; 
let sortAsc = true; 


function tableStart(){
    addTableFields(); 
    addMobileTableFields(); 
}


function addTableFields(){
    const table = document.getElementById("table")
    
    for(let valueIndex = 0; valueIndex < tableData.length; valueIndex++){
        const row = createElement("tr", table);
        for(let headerIndex = 0; headerIndex < tableHeader.length; headerIndex++){
            const td = createElement("td", row); 
            if(tableHeader[headerIndex].type === "text" || tableHeader[headerIndex].type === "date" ){
                const element = createElement("p", td, "body-regular"); 
                element.textContent = tableData[valueIndex][tableHeader[headerIndex].accessor]
            }

            if(tableHeader[headerIndex].type === "status"){
                const status = tableData[valueIndex][tableHeader[headerIndex].accessor]
                getStatusPill(status, td);
            }
        }

        setTableRowClick(row, valueIndex)
    }
}

function setTableRowClick(row, index){
    row.addEventListener("click", function(){
        showModal(index)
    })
}


function showModal(index){

    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    const modalTitle = document.getElementById("modal-title"); 
    modalTitle.textContent = tableData[index].event_name; 

    const modalDate = document.getElementById("modal-date");
    modalDate.textContent = tableData[index].date

    const modalSpeaker = document.getElementById("modal-speaker")
    modalSpeaker.textContent = `1 Guest Speaker: ${tableData[index].speaker}`
}

function closeModal(){
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function addMobileTableFields() {
    const table = document.getElementById("mobile-table"); 
    table.innerHTML = "";

    for(let valueIndex = 0; valueIndex < tableData.length; valueIndex++){
        const element = createElement("div", table, "");

        const elementTop = createElement("div", element, "flex-between pointer padding-all-16")

        const elementTopLeft = createElement("div", elementTop, "flex-center");
        
        const image = createElement("img", elementTopLeft, "mobile-table-chev", `table-chev-${valueIndex}`)
        image.src = "assets/icons/mob-right-chev.svg";

        const eventName = createElement("p", elementTopLeft, "body-regular ml-24")
        eventName.textContent = tableData[valueIndex].event_name; 

        getStatusPill(tableData[valueIndex].status, elementTop)


        const elementBottom = createElement("div", element, "flex-between padding-all-16 background-grey hidden", `table-bottom-${valueIndex}`)
        const speaker = createElement("p", elementBottom, "body-regular")
        speaker.textContent = tableData[valueIndex].speaker

        const date = createElement("p", elementBottom, "body-regular");
        date.textContent = tableData[valueIndex].date; 

        setMobileTableClick(elementTop, valueIndex, image)
    }
}



function setMobileTableClick(element, index, image){
    element.addEventListener("click", function(){
        mobileClickHandler(element, index, image)
    })
}

function mobileClickHandler(element, index){
    console.log(element); 

    const image = document.getElementById(`table-chev-${index}`); 
    const elementBottom = document.getElementById(`table-bottom-${index}`)
    

    const display = elementBottom.style.display; 

    if(display !== "flex"){

        if(darkMode){
            image.src = "assets/icons/white-down-chev.svg";
        }else{
            image.src = "assets/icons/down-chev.svg";
        }

        elementBottom.style.display = "flex"
    }else{
        if(darkMode){
            image.src = "assets/icons/white-right-chev.svg";

        }else{
            image.src = "assets/icons/mob-right-chev.svg";
        }
        elementBottom.style.display = "none"
    }

    console.log(display, "====style display")
}

function setImagSrc(image, display){

    if(display !== "flex"){

        if(darkMode){
            image.src = "assets/icons/white-down-chev.svg";
        }else{
            image.src = "assets/icons/down-chev.svg";
        }

        elementBottom.style.display = "flex"
    }else{
        if(darkMode){
            image.src = "assets/icons/white-right-chev.svg";

        }else{
            image.src = "assets/icons/mob-right-chev.svg";
        }
        elementBottom.style.display = "none"
    }
}


function getStatusPill(status, parent){
    const element = createElement("div", parent, `pill ${status === "completed" ? 'completed-pill' : 'in-progress-pill'} flex-center`); 
    const dot = createElement("div", element, `${status === "completed" ? 'completed-pill-dot' : 'in-progress-pill-dot'} pill-dot`); 
    const span = createElement("span", element, `${status === "completed" ? 'text-completed' : "text-progress"} body-small ml-8`); 
    span.textContent = status === "completed" ? "Completed" : "In Progress"
}

function createElement(type = "div", parent, className, id){
    const element = document.createElement(type);
    if(parent){
        parent.appendChild(element)
    }

    if(className){
        element.classList = className;
    }

    if(id){
        element.id = id;
    }

    return element; 
}

function filter(){
    tableData = defaultData; 

    const emptyTable = document.getElementById("empty-result")

    search(); 
    filterStatus(); 
    sortData(); 


    resetTable(); 

    if(darkMode){
        switchTableColor();
    }

    if(tableData.length === 0){
        emptyTable.style.display = "block"
    }else{
        emptyTable.style.display = "none"
    }
}

function switchTableColor(){
    const p1s = document.getElementsByTagName("p"); 
    const ths = document.getElementsByTagName("th");
    const table = document.getElementsByClassName("table")

    textLoop(p1s); 
    textLoop(ths);
    backgroundLoop(ths, "th-dark-surface");
    backgroundLoop(table)
}

function resetTable(){
    clearTable(); 
    tableStart(); 
}


function search(){
    const searchInput = document.getElementById("search-input"); 
    console.log(searchInput.value);

    tableData = tableData.filter((data) => data.event_name.toLowerCase().includes(searchInput.value.toLowerCase()))
}

function filterStatus(){
    const statusInput = document.getElementById("status-input");

    tableData = tableData.filter((data) => statusInput.value === "" ? true : data.status.toLocaleLowerCase() === statusInput.value.toLowerCase())
}

function setSortField(field){

    if(sortField === field){
        sortAsc = !sortAsc
    }else{
        sortAsc = true; 
    }


    sortField = field; 


    sortData();
    resetTable(); 
}

function sortData(){
    if(!sortField){
        return; 
    }

    if(sortField === "event_name" || sortField === "speaker" || sortField === "status"){
        tableData = tableData.sort(function(a, b){
            if(sortAsc){
                return a[sortField].localeCompare(b[sortField])
            }else{
                return b[sortField].localeCompare(a[sortField])
            }
            
        })
    }

    if(sortField === "date"){
        
        tableData = tableData.sort(function(a, b){
            const dateA = new Date(a.date); 
            const dateB = new Date(b.date); 

            if(sortAsc){
                return dateA.getTime() - dateB.getTime(); 
            }else{
                return dateB.getTime() - dateA.getTime(); 
            }
            
        })
    }
}

function clearTable(){
    const table = document.getElementById("table"); 
    table.innerHTML = `
        <tr class="table-header">
            <th class="title-extra-small text-secondary" onclick="setSortField('event_name')">Event Name</th>
            <th class="title-extra-small text-secondary" onclick="setSortField('date')">Date</th>
            <th class="title-extra-small text-secondary" onclick="setSortField('speaker')">Speaker</th>
            <th class="title-extra-small text-secondary" onclick="setSortField('status')">Status</th>
        </tr>
    `
}