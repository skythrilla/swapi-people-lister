const divleft = document.querySelector("#left");
const divright = document.querySelector("#right");
const divwayright = document.querySelector("#wayright");
const plus = document.querySelector("#inc");
const minus = document.querySelector("#dec");
let str = "";
let count = 0;

async function peeps() {
    try {
        var data = await Promise.all([
            fetch('https://swapi.co/api/people/').then((response) => response.json()),
            fetch('https://swapi.co/api/people/?page=2').then((response) => response.json()),
            fetch('https://swapi.co/api/people/?page=3').then((response) => response.json()),
            fetch('https://swapi.co/api/people/?page=4').then((response) => response.json()),
            fetch('https://swapi.co/api/people/?page=5').then((response) => response.json()),
            fetch('https://swapi.co/api/people/?page=6').then((response) => response.json()),
            fetch('https://swapi.co/api/people/?page=7').then((response) => response.json()),
            fetch('https://swapi.co/api/people/?page=8').then((response) => response.json()),
            fetch('https://swapi.co/api/people/?page=9').then((response) => response.json())
        ]);

        const people = `<ul>${data[count].results
      .map(key => `<li>${key.name}</li>`)
      .join("")}</ul>`;
        divleft.innerHTML = people;

        plus.addEventListener("click", ev => {
            console.log(count);
            count++;
            const people = `<ul>${data[count].results
          .map(key => `<li>${key.name}</li>`)
          .join("")}</ul>`;
            divleft.innerHTML = people;
        });

        minus.addEventListener("click", ev => {
            count--;
            console.log(count);
            const people = `<ul>${data[count].results
          .map(key => `<li>${key.name}</li>`)
          .join("")}</ul>`;
            divleft.innerHTML = people;
        });

        //--------------------------------
        divleft.addEventListener("click", ev => {
            str = ev.target.textContent;
            console.log(ev.target);

            for (let key in data[count].results) {
                if (data[count].results[key].name === str) {
                    divright.innerHTML = `<ul id='people'><li><b>name</li></b><li><b>height</li></b><li><b>mass</li></b><li><b>hair_color</li>
                    </b><li><b>skin_color</li></b><li><b>eye_color</li></b><li><b>birth_year</li></b><li><b>gender</li></b><li><b>homeworld</li>
                    </b><li><b>created</li></b><li><b>edited</li></b><li><b>url</li></b></ul>`;
                    divwayright.innerHTML = `<ul id='people'><li>${data[count].results[key].name}</li><li>${data[count].results[key].height}</li>
                    <li>${data[count].results[key].mass}</li><li>${data[count].results[key].hair_color}</li><li>${data[count].results[key].skin_color}</li>
                    <li>${data[count].results[key].eye_color}</li><li>${data[count].results[key].birth_year}</li><li>${data[count].results[key].gender}</li>
                    <li><a href="${data[count].results[key].homeworld}">${data[count].results[key].homeworld}</a></li><li>${data[count].results[key].created}</li><li>${data[count].results[key].edited}</li>
                    <li><a href="${data[count].results[key].url}">${data[count].results[key].url}</a></li></ul>`;
                }
            }
            // const html = `<ul><${side}</h3><h3 class = '${isZero && "zero"}'>${amount}</h3></center>`;
        });
    } catch (error) {
        console.log(error);
    }
}
peeps();