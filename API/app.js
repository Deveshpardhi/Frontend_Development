let btn = document.querySelectorAll("button");

btn.forEach(button => {
    button.addEventListener("click", async () => {
        let link = await getFactsDog();
        //console.log(fact);
        let img=document.querySelector("#dg");
        img.setAttribute("src",link);
        console.log(link);
    });
});

let url1 = "https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random"
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("Error -", e);
        return "Not found";
    }
}

async function getFactsDog() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("Error -", e);
        return "Not found";
    }
}
