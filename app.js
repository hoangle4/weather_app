const ui = new UI();

const storage = new Storage();
const getlocation_data = storage.get_location_data();
let api_config = api_key;
const loc = new Location(getlocation_data.zipCode, api_config);

document.getElementById('w-change-btn').addEventListener('click',  (e) => {
      const zip_code = document.getElementById('zip-code').value;
      const loc_id = document.getElementById('loc-id').textContent;
 
      weather.change_weather(loc_id);
      get_weather();
      storage.set_location_data(zip_code, loc_id);
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
            })
            .catch(err => console.log(err));


      }


const weather = new Weather(getlocation_data.locId, api_key);


// Change Weather 
document.addEventListener('DOMContentLoaded', get_weather);

      function get_weather() {
            weather.get_weather()
            .then(results => {
                  ui.paint(results);
            })
            .catch(err => console.log(err));

      }



