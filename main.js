const divleft = document.querySelector("#left");
const divright = document.querySelector("#right");
// const divwayright = document.querySelector("#wayright");
async function peeps() {
    try {
        const result = await fetch('https://swapi.co/api/people/');
        const data = await result.json();

        const people =
            `<ul>${
                (data.results).map(key => `<li data-action='yo'>${key.name}</li>`).join('')
                }
                </ul>`;

        divleft.innerHTML = people;

        divleft.addEventListener("click", ev => {
            console.log(ev.target);

            const action = ev.target.getAttribute("yo");
            divright.innerHTML = data.results[0].name;

            // if (action === "yo")
            //     divright.innerHTML = ev.target;
            // console.log(arr2);

            // console.log(ev.target.action);
            // for (let i = 0; i < arr.length; i++) {
            //     if (arr[i] === ev.target) {
            //         arr2.push(arr[i]);
            //     }
            // }
            // divright.innerHTML = action;
            // const html = `<ul><${side}</h3><h3 class = '${isZero && "zero"}'>${amount}</h3></center>`;
        });
    } catch (error) {
        console.log(error);
    }
}
peeps();