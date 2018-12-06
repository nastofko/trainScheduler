$(document).ready(function () {

    var rightNow = moment();
    displayTrains()
    
    console.log("CURRENT TIME IS: " + moment(rightNow).format("hh:mm:ss"));

    let trains = [];

    $("#add-train").on("click", function (event) {

        event.preventDefault();
        let train = {};
        train.name = $('#name-input').val().trim();
        train.destination = $('#destination-input').val().trim();
        train.time = $('#first-time-input').val().trim();
        train.frequency = $('#frequency-input').val().trim();
        if (!train.name && !train.destination && !train.frequency && !train.time) {
            return
        } else {
            trains.push(train);
            localStorage.setItem('trainArray', JSON.stringify(trains));
            $('#name-input').val('');
            $('#destination-input').val('');
            $('#first-time-input').val('');
            $('#frequency-input').val('');
            displayTrains();
        }
    });
    function displayTrains() {
        $('#input-table-body').empty();
        const display = JSON.parse(localStorage.getItem('trainArray'));
        for (let i = 0; i < display.length; i++) {
            let tableRow = $('<tr>');
            let tableName = $('<td>').text(display[i].name);
            let tableDestination = $('<td>').text(display[i].destination);
            let tableTime = $('<td>').text(display[i].time);
            let tableFrequency = $('<td>').text(display[i].frequency);
            tableRow.append(tableName, tableDestination, tableFrequency, tableTime);
            $('#input-table-body').append(tableRow);
        }
    }
});