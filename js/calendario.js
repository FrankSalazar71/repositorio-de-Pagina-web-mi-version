document.addEventListener("DOMContentLoaded", function() {
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");
    const monthYear = document.getElementById("monthYear");
    const calendarDates = document.getElementById("calendarDates");
    const currentDateElement = document.getElementById("currentDate");
    const currentTimeElement = document.getElementById("currentTime");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function updateCalendar() {
        currentDate = new Date(currentYear, currentMonth, 1);
        monthYear.textContent = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' }).format(currentDate);

        calendarDates.innerHTML = '';

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyDate = document.createElement("div");
            calendarDates.appendChild(emptyDate);
        }

        for (let i = 1; i <= lastDay; i++) {
            const dateElement = document.createElement("div");
            dateElement.textContent = i;
            calendarDates.appendChild(dateElement);
        }

        // Resaltar el día actual
        const today = new Date();
        if (today.getMonth() === currentMonth && today.getFullYear() === currentYear) {
            const todayDateElement = calendarDates.querySelector(`div:nth-child(${today.getDate() + firstDay})`);
            todayDateElement.classList.add('current-day');
        }

        // Actualizar fecha y hora actual debajo del calendario
        currentDateElement.textContent = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }).format(today);
        updateClock(); // Actualizar la hora
    }

    function updateClock() {
        const now = new Date();
        currentTimeElement.textContent = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    prevMonthBtn.addEventListener("click", function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    nextMonthBtn.addEventListener("click", function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    // Actualizar la hora cada segundo
    setInterval(updateClock, 1000);

    updateCalendar();
});
