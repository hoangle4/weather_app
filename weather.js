class Weather {
      constructor(zip, api) {
            this.apiKey = api;
            this.zipCode = zip;
      }

      async get_weather () {
            const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.zipCode}?apikey=${this.apiKey}&language=en-us&details=true&metric=true`);

            const response_result = await response.json();
            
            return response_result;


      }
      change_weather(zip) {
            this.zipCode = zip;
      }

}


class Location {
      constructor(zip,api) {
            this.apiKey = api;
            this.zipCode = zip;
      }

      async get_location () {
            const response = await fetch(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${this.apiKey}&q=${this.zipCode}`);

            const response_result = await response;
            
            return response_result.json();


      }     

      change_location(zip) {
            this.zipCode = zip;
      }

}
