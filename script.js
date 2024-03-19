let apiId =  "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

let input_text = document.querySelector("#search");
let btn = document.querySelector(".btn");
let show = document.querySelector(".container");
let addMore = document.querySelector(".load_more");

let page =1;
let search ="";
// console.log(input_text , btn);

 async function searchimage(){
    
     search = input_text.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${apiId}`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);

    if(page === 1){
        show.innerHTML ="";
    }

     let results = data.results;
     
     let html ="";

    results.map((result)=>{
        html = `
         <div class="cont" > 
            <img class="img" src="${result.urls.small}">
            <p class="dis" >${result.alt_description}</p>
         </div>
        `
        show.innerHTML += html;
    })
     page ++;
    if(page>1){
        addMore.style.display="block";
    }
    
}

btn.addEventListener('click' ,(event)=>{
    event.preventDefault();
    page=1;
    searchimage()
});


addMore.addEventListener('click',()=>{
    searchimage();
})