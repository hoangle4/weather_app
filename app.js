const ui = new UI();
const loc = new Location();


document.addEventListener('DOMContentLoaded', get_location)

document.getElementById('w-change-btn').addEventListener('click',  (e) => {

      const loc_id = document.getElementById('loc-id').textContent;
 
      weather.change_weather(loc_id);
      console.log(loc_id);
      get_weather();
      
      $('#locModal').modal('hide');
      
});

document.getElementById('zip-code').addEventListener('keyup',  (e) => {
      
      const zip_code = document.getElementById('zip-code').value;
      loc.change_location(zip_code);
      get_location();
});
      function get_location() {
            loc.get_location()
            .then(results => {
                  ui.paint_loc(results[0]);
                  console.log(results[0]);
            })
            .catch(err => console.log(err));


      }


const weather = new Weather('97015');

// weather.change_weather('97116');
// Change Weather 
document.addEventListener('DOMContentLoaded', get_weather)

      function get_weather() {
            weather.get_weather()
            .then(results => {
                  ui.paint(results);
                  console.log(results);
            })
            .catch(err => console.log(err));

      }



