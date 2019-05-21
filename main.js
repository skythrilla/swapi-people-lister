const divleft = document.querySelector("#left");
const divright = document.querySelector("#right");
// const divwayright = document.querySelector("#wayright");
const arr = [];
const arr2 = [];
async function peeps() {
    try {
        const result = await fetch('https://swapi.co/api/people/');
        const data = await result.json();

        const people =
            `<ul>${
                (data.results).map(key => arr.push(`<li>${key.name}</li>`))
                }
                </ul>`;
        console.log(arr);

        divleft.innerHTML = arr.join('');

        divleft.addEventListener("click", ev => {

            console.log(ev.target);
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === ev.target) {
                    arr2.push(arr[i]);
                }
                // console.log(arr[i]);
            }
            // console.log(selection);

            divright.innerHTML = ev.target;
            // const html = `<ul><${side}</h3><h3 class = '${isZero && "zero"}'>${amount}</h3></center>`;
        });
    } catch (error) {
        console.log(error);
    }
}
peeps();