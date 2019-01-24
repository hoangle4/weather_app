class Storage {
      constructor() {
            this.zipCode;
            this.locId;
            this.defaultZipCode = '97015';
            this.defaultLocId = '40798_PC';
      }

      get_location_data() {
            if(localStorage.getItem('Zip Code') === null) {
                  this.zipCode = this.defaultZipCode;
            } else {
                  this.zipCode = localStorage.getItem('Zip Code');
            }

            if(localStorage.getItem('Loc Id') === null) {
                  this.locId = this.defaultLocId;
            } else {
                  this.locId = localStorage.getItem('Loc Id');
            }

            return {
                  locId: this.locId,
                  zipCode: this.zipCode
            }
      }

      set_location_data(zip,id) {
            localStorage.setItem('Zip Code', zip);
            localStorage.setItem('Loc Id', id);
      }
}