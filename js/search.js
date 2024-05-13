import connect from "./API/connect.js";
var {categories}= await connect('https://www.themealdb.com/api/json/v1/1/categories.php')
 console.log(categories);
 var image = document.getElementById('image');
async function  search(search) {
     
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
          search
      );
  
  
      news = await response.json();
      
        console.log(news.meals);
      
      var container =" ";
  for(let i=0 ; i<news.meals.length ; i++){
    
     container += `
      <div class="col-6">
      <img class="img-fluid  w-100" src="${news.meals[i].strMealThumb}" alt="">
     </div>
     <div class="col-6">
                      <h5 class="card-title"><span class="fw-bold text-info-emphasis">name:</span><br>${news.meals[i].strMeal}</h5>
                      <p class="mt-2"><span class="fw-bold text-info-emphasis ">Area:</span><br> ${news.meals[i].strArea}</p>
                      <p><span class="fw-bold text-info-emphasis">About:</span><br> ${news.meals[i].strInstructions.substr(0,300)}</p>
                      <p class="m-auto">
                          <span class="fs-4 m-auto text-info-emphasis">Components:</span><br>
                          ${news.meals[i].strIngredient1} , ${news.meals[i].strIngredient2} , ${news.meals[i].strIngredient3} , ${news.meals[i].strIngredient4}
                      </p>
                     
                      
                      

                     <a href="${news.meals[i].strYoutube}"  target="_blank" class="btn  btn-outline-info mt-2 mb-2">watch on youtybe</a>
                  </div>

     `;
    }
   


    postSearch.innerHTML= container;
  
  }
  
  var co=" ";
  for (const item of categories) {
  
   co += `
  
  <div class="swiper-slide text-center"><img class="img-fluid w-50"  src="${item.strCategoryThumb}" alt=""></div>
  
  ...
`;
image.innerHTML=co;
  }
  console.log(co);
 