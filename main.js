const divleft = document.querySelector("#left");
const divright = document.querySelector("#right");
// const divwayright = document.querySelector("#wayright");
let selection = '';
async function peeps() {
    try {
        const result = await fetch('https://swapi.co/api/people/');
        const data = await result.json();

        const people =
            `
                <ul>${
                (data.results).map(key => `<li>${key.name}</li>`).join('')
                }
                </ul>`;

        divleft.innerHTML = people;
        // let choice=${key.name};
        // divleft.innerHTML = data.results[0].name;
        // console.log(data.results);

        divleft.addEventListener("click", ev => {
            // const action = ev.target.document.getElementsByTagName("divleft");
            // console.log(action);
            // divleft.innerHTML = people;
            selection = ev.target;
            console.log(selection);
            console.log(ev.target);
            console.log(people[3]);

            for (let i = 0; i < people.length; i++) {
                if (selection === people[i]) {
                    selection = people[i];
                    console.log(people[i]);
                }
            }
            // console.log(selection);

            // const html = `
            //     <ul>${
            //     (data.results).map(key => `<li>${key}</li>`).join('')
            //     }
            //     </ul>`;

            // const obj = data.results[0];
            // const html =
            divright.innerHTML = selection;

            // divwayright.innerHTML = 'hellllllo';
            // const html = `<ul><${side}</h3><h3 class = '${isZero && "zero"}'>${amount}</h3></center>`;
        });
    } catch (error) {
        console.log(error);
    }
}
peeps();