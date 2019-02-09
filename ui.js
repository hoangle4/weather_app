class UI {
      constructor() {
            this.location = document.getElementById('w-location');
            this.desc = document.getElementById('w-desc');
            this.string = document.getElementById('w-string');
            this.icon = document.getElementById('w-icon');
            this.details = document.getElementById('w-details');
            this.humidity = document.getElementById('w-humidity');
            this.dewpoint = document.getElementById('w-dewpoint');
            this.feelsLike = document.getElementById('w-feels-like');
            this.wind = document.getElementById('w-wind');
            this.locId = document.getElementById('loc-id');

      }
      paint(weather) {
            const fileNum = weather.DailyForecasts[0].Day.Icon;
            const myVar = (fileNum < 10) ? String("0" + fileNum) : fileNum;
            
            this.string.textContent = weather.DailyForecasts[0].Day.ShortPhrase;

            this.desc.textContent = `
            ${this.desc.textContent = weather.Headline.Text}`;

            this.wind.textContent = `Wind Speed: ${weather.DailyForecasts[0].Day.Wind.Speed.Value} ${weather.DailyForecasts[0].Day.Wind.Speed.Unit} - Wind Gust: ${weather.DailyForecasts[0].Day.WindGust.Speed.Value} ${weather.DailyForecasts[0].Day.WindGust.Speed.Unit}`;

            this.feelsLike.textContent = `Feels Like -      
            High: ${weather.DailyForecasts[0].RealFeelTemperature.Maximum.Value} ${weather.DailyForecasts[0].RealFeelTemperature.Maximum.Unit} - Low: ${weather.DailyForecasts[0].RealFeelTemperature.Minimum.Value} ${weather.DailyForecasts[0].RealFeelTemperature.Minimum.Unit}
            `;

            this.dewpoint.textContent = `Temperature -      
            High: ${weather.DailyForecasts[0].Temperature.Maximum.Value} ${weather.DailyForecasts[0].Temperature.Maximum.Unit} - Low: ${weather.DailyForecasts[0].Temperature.Minimum.Value} ${weather.DailyForecasts[0].Temperature.Minimum.Unit}
            `;

            this.humidity.textContent = `Day Light: ${weather.DailyForecasts[0].HoursOfSun} hour(s)`;

            this.icon.setAttribute('src', `https://developer.accuweather.com/sites/default/files/${myVar}-s.png`);
      }
      paint_loc(loc) {
            this.location.textContent =`
            ${loc.ParentCity.EnglishName},${loc.AdministrativeArea.EnglishName}`; 

            this.locId.textContent = loc.Key;
      }
}