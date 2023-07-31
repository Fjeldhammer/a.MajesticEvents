const events = [
        // groups of items in the array - aka objects - also called key value pairs
    {
        event: "Galway Gala",
        city: "New York",
        state: "NY",
        attendance: 240000,
        date: "04/17/2017",
    },
    {
        event: "Galway Gala",
        city: "New York",
        state: "NY",
        attendance: 250000,
        date: "04/17/2018",
    },
    {
        event: "Galway Gala",
        city: "New York",
        state: "NY",
        attendance: 257000,
        date: "04/17/2019",
    },
    {
        event: "SAG Stomp",
        city: "Los Angeles",
        state: "CA",
        attendance: 130000,
        date: "06/20/2017",
    },
    {
        event: "SAG Stomp",
        city: "Los Angeles",
        state: "CA",
        attendance: 140000,
        date: "06/20/2018",
    },
    {
        event: "SAG Stomp",
        city: "Los Angeles",
        state: "CA",
        attendance: 150000,
        date: "06/20/2019",
    },
    {
        event: "Haute Nights",
        city: "Kernersville",
        state: "NC",
        attendance: 40000,
        date: "07/15/2017",
    },
    {
        event: "Haute Nights",
        city: "Kernersville",
        state: "NC",
        attendance: 45000,
        date: "07/15/2018",
    },
    {
        event: "Haute Nights",
        city: "Kernersville",
        state: "NC",
        attendance: 50000,
        date: "07/15/2019",
    },
    {
        event: "Carnivoral",
        city: "Chicago",
        state: "IL",
        attendance: 40000,
        date: "10/10/2017",
    },
    {
        event: "Carnivoral",
        city: "Chicago",
        state: "IL",
        attendance: 45000,
        date: "10/10/2018",
    },
    {
        event: "Carnivoral",
        city: "Chicago",
        state: "IL",
        attendance: 50000,
        date: "10/10/2019",
    },
];

function getEvents() {
    return events;
}

function buildDropDown() {

    // get the current events
    let currentEvents = getEvents();

    // get a list of unique cities
    let eventCities = currentEvents.map(event => event.city);
        //  long version of 1st step above ^
            // let eventCities = currentEvents.map(function(event) {
            //     return event.city
            // });

    let distinctCities = new Set(eventCities);
    let dropdownChoices = ['All', ...distinctCities];  // spread operator (...) - shortcut to list the rest of items in array

    const cityDropdown = document.getElementById('city-dropdown');
    const dropdownItemTemplate =document.getElementById('dropdown-template');

    // with each unique city:
    dropdownChoices.forEach(choice => {

        // - copy the dropdown template items (content)
        let dropdownItemCopy = dropdownItemTemplate.content.cloneNode(true);

        // - change that copy's text
        let aTag = dropdownItemCopy.querySelector('a');
        aTag.innerText = choice;

        // - put it in the dropdown
        cityDropdown.appendChild(dropdownItemCopy);
    });

    displayEvents(currentEvents);
    displayStats(currentEvents);
}

function displayEvents(events) {

    // find the table on the page
    const eventsTable = document.getElementById('events-table');

    // find the table row template
    const eventTemplate = document.getElementById('table-row-template');

    //clear out the table
    eventsTable.innerHTML = '';

    //for each event:
    for(let index = 0; index < events.length; index += 1) {
        // -- get one event
        let event = events[index];

        // -- clone the template
        let tableRow = eventTemplate.content.cloneNode(true);

        // -- get each property of an event
        // -- insert each property into the cloned template
        let eventNameCell = tableRow.querySelector('[data-id="event"]');
        eventNameCell.innerText = event.event;

        tableRow.querySelector('[data-id="city"]').innerText = event.city;
        tableRow.querySelector('[data-id="state"]').innerText = event.state;
        tableRow.querySelector('[data-id="attendance"]').innerText = event.attendance;
        tableRow.querySelector('[data-id="date"]').innerText = event.date;

        // -- insert the event data into table
        eventsTable.appendChild(tableRow);
    }
}

function displayStats(events) {

    let total = 0;
    let max = 0;
    let min = events[0].attendance;

    for(let index = 0; index < events.length; index++) {
        let event = events[index];

        total += event.attendance;

        if (event.attendance > max) {
            max = event.attendance;
        }

        if (event.attendance < min) {
            min = event.attendance;
        }
    }

    let average = total / events.length;

    document.getElementById('total-attendance').innerHTML = total.toLocaleString();
    document.getElementById('avg-attendance').innerHTML = Math.round(average).toLocaleString();
    document.getElementById('max-attended').innerHTML = max.toLocaleString();
    document.getElementById('min-attended').innerHTML = min.toLocaleString();

}

function filterEvents(dropdownItemClicked) {
    let cityName = dropdownItemClicked.innerText;

    let allEvents = getEvents();


    
}

















//'for each loop' below does same thing as 'for loop' in function displayEvents
// events.forEach(event => {

//     let tableRow = eventTemplate.content.cloneNode(true);

//     // -- get each property of an event
//     // -- insert each property into the cloned template
//          let eventNameCell = tableRow.querySelector('[data-id="event"]');
//          eventNameCell.innerText = event.event;

//          tableRow.querySelector('[data-id="city"]').innerText = event.city;
//          tableRow.querySelector('[data-id="state"]').innerText = event.state;
//          tableRow.querySelector('[data-id="attendance"]').innerText = event.attendance;
//          tableRow.querySelector('[data-id="date"]').innerText = event.date;

//     // -- insert the event data into table
//          eventsTable.appendChild(tableRow);

// })



