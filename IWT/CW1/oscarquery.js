const form = document.querySelector('.searchQuery');

/* fetching data from the JSON file and using a for loop to add the data to the 
'Won' selector and using a list to make sure the year values are not repeated. */

fetch('oscars.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let yearlist = [];
        let yearSelect = document.querySelector('#yearSelect')
        for (let item in data) {
            if (yearlist.includes((data[item].Year)) === false) {
                yearlist.push((data[item].Year));
                yearhtml = `<option value="${(data[item].Year)}">${(data[item].Year)}</option>`;
                yearSelect.innerHTML += yearhtml;
            }
        }
    })
.catch(function (err) {
    console.log(err);
});

// Event listener to retrieve form inputs as well as renaming inputs

form.addEventListener('submit', event => {
    event.preventDefault();
    inputYear = form.year.value + form.yearSelect.value;
    inputCat = form.cat.value;
    inputNom = form.nominee.value;
    inputInfo = form.info.value;
    inputWon = form.won.value;
    inputNomInfo = form.nomineeOrinfo.value;

    // If statements for error checking with a pop up alert message

    const errormssg = document.querySelector('.errormssgwrap');
    const mssg = document.querySelector('.mssg');
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
        errormssg.style.display = 'none';
    });
    errormssg.addEventListener('click', () => {
        errormssg.style.display = 'none';
    });
    
    if ((Boolean(inputNom) || (Boolean(inputInfo))) && Boolean(inputNomInfo)) {
        errormssg.style.display = 'block';
        mssg.innerHTML = '<p>Please use either the Nominee and Other information fields or the Nominee/Other Info field</p>';
    } else if (Boolean(form.year.value) && Boolean(form.yearSelect.value)) { 
        errormssg.style.display = 'block';
        mssg.innerHTML = '<p>Please enter a year value or use the year picker only</p>';
    }else {

        fetch('oscars.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                // Reset table for the new output

                let table = document.getElementById('oscarout');
                let resultReturn = document.getElementById('resultReturn');
                let counter = 0;
                let tblhtml = '';
                table.innerHTML = '';

                /* Loop through each object from the JSON file with nested 
                if statements to check if it fits the search parameters. */

                for (let objct in data) {
                    let dataEntry = data[objct];
                    if (dataEntry.Year.includes(inputYear)) {
                        if (dataEntry.Won.includes(inputWon)) {
                            if (dataEntry.Category.includes(inputCat)) {
                                if (dataEntry.Nominee.includes(inputNom)) {
                                    if (dataEntry.Info.includes(inputInfo)) {
                                        if (dataEntry.Info.includes(inputNomInfo) || dataEntry.Nominee.includes(inputNomInfo)) {

                                            /* Creates each row with data from the JSON object and 
                                            appends it to a formatted string to be addded later*/

                                            tblhtml += `<tr>
                                                            <td>${data[objct].Year}</td>
                                                            <td>${data[objct].Category}</td>
                                                            <td>${data[objct].Nominee}</td>
                                                            <td>${data[objct].Info}</td>
                                                            <td>${data[objct].Won}</td>
                                                    </tr>`;
                                            counter += 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                // Finally adds the results and counter to the table

                resultReturn.innerText = `${counter} Results returned`;
                table.innerHTML = tblhtml;
            })
        .catch(function (err) {
            console.log(err);
        });
    }

});
