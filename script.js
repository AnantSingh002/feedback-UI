let container = document.getElementById('container');
let rating = document.querySelectorAll('.rating');
let btn = document.getElementById('btn');


let review = "";

rating.forEach((ratingEle) => {
     ratingEle.addEventListener('click',(e)=> {
          removeActive();
          review = e.target.innerText || e.target.parentNode.innerText ;
          e.target.classList.add("active");
          e.target.parentNode.classList.add("active");
     })
})

btn.addEventListener('click', () => {
    if (review !== "") {
        container.innerHTML = `
            <strong>Thank you!</strong>
            <br>
            <br>
            <strong>Feedback: ${review}</strong>
            <p>We'll use your feedback to improve our customer support.</p>
            `;
      }  
});

let removeActive = () => {
    rating.forEach((ratingEle) => {
         ratingEle.classList.remove('active');
    })
}