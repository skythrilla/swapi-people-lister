const divleft = document.querySelector("#left");
const divright = document.querySelector("#right");
const divwayright = document.querySelector("#wayright");
let str = "";
// const arr2 = [];
async function peeps() {
    try {
        const result = await fetch("https://swapi.co/api/people/");
        const data = await result.json();

        // `<ul>${data.results.map(key => arr.push(`<li>${key.name}</li>`))}
        //             </ul>`;
        // console.log(arr);
        const people = `<ul>${data.results
      .map(key => `<li>${key.name}</li>`)
      .join("")}</ul>`;
        divleft.innerHTML = people;
        //--------------------------------
        divleft.addEventListener("click", ev => {
            //   console.log(ev.target.getAttribute);

            str = ev.target.textContent;
            //   divleft.innerHTML = `<b>${ev.target.textContent}</b>`;
            //   ev.target = `<b>${ev.target.textContent}</b>`;

            for (let key in data.results) {
                if (data.results[key].name === str) {
                    divright.innerHTML = `<ul id='people'><li><b>name</li></b><li><b>height</li></b><li><b>mass</li></b><li><b>hair_color</li>
                    </b><li><b>skin_color</li></b><li><b>eye_color</li></b><li><b>birth_year</li></b><li><b>gender</li></b><li><b>homeworld</li>
                    </b><li><b>created</li></b><li><b>edited</li></b><li><b>url</li></b></ul>`;
                    divwayright.innerHTML = `<ul id='people'><li>${data.results[key].name}</li><li>${data.results[key].height}</li>
                    <li>${data.results[key].mass}</li><li>${data.results[key].hair_color}</li><li>${data.results[key].skin_color}</li>
                    <li>${data.results[key].eye_color}</li><li>${data.results[key].birth_year}</li><li>${data.results[key].gender}</li>
                    <li><a href="${data.results[key].homeworld}">${data.results[key].homeworld}</a></li><li>${data.results[key].created}</li><li>${data.results[key].edited}</li>
                    <li><a href="${data.results[key].url}">${data.results[key].url}</a></li></ul>`;

                    // console.log(data.results[key]);
                    //   console.log(data.results[key]);
                }
            }

            // const html = `<ul><${side}</h3><h3 class = '${isZero && "zero"}'>${amount}</h3></center>`;
        });
    } catch (error) {
        console.log(error);
    }
}
peeps();