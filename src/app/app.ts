	import {Component, NgFor, NgSelectOption, bootstrap} from 'angular2/angular2';
	import {Http, HTTP_PROVIDERS} from 'angular2/http';
	
	@Component({
		selector: 'my-app',
        viewProviders: [HTTP_PROVIDERS],
		templateUrl: 'City.html',
        directives: [NgFor, NgSelectOption]
	})
	class WifiComponent {
	
		hrequest: Http;
		cities: Object;
		wifilocations: Object;

		constructor(http: Http) {
  
		http.get('http://www.findfreewifi.co.za/publicjson/getcities')			
			.subscribe(res => {
				this.cities = res.json().data;
			});
			this.hrequest = http; 
	  }
	
  
	displayNearBy(obj: Object) {
    
        var link = 'http://www.findfreewifi.co.za/publicjson/Locations?cityName=' + obj.Name;
        this.hrequest.get(link).subscribe(res => {
            this.wifilocations = res.json().data;
        }); 

    }

}
bootstrap(WifiComponent);

	
	
	    