var sear = location.search;
var i = sear.replace('?s=', '');
var postG = document.getElementById('postG');

async function fetchData() {
    try {
        var connect = await import("./API/connect.js");
        var { meals } = await connect.default(`https://www.themealdb.com/api/json/v1/1/search.php?s=${i}`);
        console.log(meals);

        meals.forEach(item => {
            var { strYoutube,strInstructions,strMealThumb, strMeal,strArea,strIngredient,strIngredient1,strIngredient2,strIngredient3,strIngredient4} = item;
            console.log(strIngredient,strIngredient1,strIngredient2,strIngredient3,strIngredient4);
            var preview = `
            <div class="col-3">
            <img class="img-fluid  w-100" src="${strMealThumb}" alt="">
           </div>
           <div class="col-9">
                            <h5 class="card-title"><span class="fw-bold text-info-emphasis">name:</span><br>${strMeal}</h5>
                            <p class="mt-2"><span class="fw-bold text-info-emphasis ">Area:</span><br> ${strArea}</p>
                            <p><span class="fw-bold text-info-emphasis">About:</span><br> ${strInstructions}</p>
                            <p class="m-auto">
                                <span class="fs-4 m-auto text-info-emphasis">Components:</span><br>
                                ${strIngredient1} , ${strIngredient2} , ${strIngredient3} , ${strIngredient4}
                            </p>
                           
                            
                            

                           <a href="${strYoutube}"  target="_blank" class="btn  btn-outline-info ">watch on youtybe</a>
                        </div>`;
            postG.insertAdjacentHTML("beforebegin", preview);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();
// =========================search===============================================

