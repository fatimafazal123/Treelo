var currentDate = new Date();

function renderCalendar() {
    var monthYear = document.getElementById("month-year");
    var daysContainer = document.getElementById("days");
    daysContainer.innerHTML = "";

    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    monthYear.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    var firstDayOfMonth = new Date(year, month, 1).getDay();
    var lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    for (var i = 0; i < firstDayOfMonth; i++) {
        var emptyDiv = document.createElement("div");
        emptyDiv.className = "day empty";
        daysContainer.appendChild(emptyDiv);
    }

    for (var date = 1; date <= lastDateOfMonth; date++) {
        var dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = date;
        daysContainer.appendChild(dayDiv);
    }
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    renderCalendar();
}


renderCalendar();
