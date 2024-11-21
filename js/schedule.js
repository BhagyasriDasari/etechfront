document.addEventListener('DOMContentLoaded', function() {
    // Example schedule data
    const schedule = [
        { date: '2024-11-22', time: '10:00 AM', description: 'Meeting with John' },
        { date: '2024-11-23', time: '2:00 PM', description: 'Conference Call' }
    ];

    const scheduleList = document.getElementById('scheduleList');

    schedule.forEach(item => {
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('schedule-item');
        scheduleItem.innerHTML = `
            <p><strong>${item.date}</strong> at ${item.time}</p>
            <p>${item.description}</p>
        `;
        scheduleList.appendChild(scheduleItem);
    });
});
