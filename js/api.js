
import connect from "./API/connect.js";
var {categories}= await connect('https://www.themealdb.com/api/json/v1/1/categories.php')
 console.log(categories);
        
        for (const item of categories) {
          var{strCategory,strCategoryThumb,strCategoryDescription}=item;
          console.log(strCategory,strCategoryThumb)
            var preview = ``;
            document.getElementById('post').insertAdjacentHTML('afterbegin',` <div class="card col-2" style="width: 18rem;">
            <img src="${strCategoryThumb}" class="card-img-top w-100 " alt="...">
            <div class="card-body">
              <h5 class="card-title">${strCategory}</h5>
              <a href="menu.html?c=${strCategory}" class="btn btn-info text-center"> all gatogry of here</a>
            </div>
          </div>`);
           
        }
       