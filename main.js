const weatherAPI = 'http://api.weatherapi.com/v1/current.json?key=bdc91930a25245e4a6511205221510&aqi=no';

const keyword = document.querySelector('.keyword');
const btnSearch = document.querySelector('.search-btn');
const bodys = document.querySelector('.bo');


btnSearch.addEventListener('click',function(){
  fetch(`${weatherAPI}&q= ${keyword.value}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let card = '';
    card = showDetail(data);
    bodys.innerHTML = card;
    
  })
});


function showDetail(data){
  return `<div class = "row mt-2" >
    <div class="col-md-9">
      <h5 class="card-header">${data.location.name}, ${data.location.region}, ${data.location.country}, ${data.location.tz_id}</h5>
  <div class="card mt-3">
      <img src="2.png" class="pngg" alt="">
  <div class="card-body text-center">
    <h5 class="card-title">Temperature ${data.current.temp_c}°C</h5>
    <h3 class="card-text">${data.current.condition.text}</h3>
     <p>${data.current.last_updated}</p>

    
  </div>
</div>
</div>
</div>`;
};
