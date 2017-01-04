import { Injectable } from '@angular/core';
import { IPlate } from '../../components/plate/plate';

@Injectable()
export class PlateService {
    searchPlates():IPlate[]{
        return [{"id":27,"plateNumber":"a","state":{"name":"AMERICAN SAMOA","abbreviation":"AS"},"user":{"id":25,"username":"test",firstName:"",lastName:"",email:"",pword:"",vpword:""},"createdDateTime":"2016-10-12T20:08:19.749Z"},{"id":28,"plateNumber":"bbba","state":{"name":"ARIZONA","abbreviation":"AZ"},"user":{"id":25,"username":"test2",firstName:"",lastName:"",email:"",pword:"",vpword:""},"createdDateTime":"2016-10-12T20:08:19.749Z"}];
    };
    getMyPlates():IPlate[]{
        return [{"id":27,"plateNumber":"adddddd","state":{"name":"AMERICAN SAMOA","abbreviation":"AS"},"user":{"id":25,"username":"test",firstName:"",lastName:"",email:"",pword:"",vpword:""},"createdDateTime":"2016-10-12T20:08:19.749Z"},{"id":28,"plateNumber":"xxxx","state":{"name":"ARIZONA","abbreviation":"AZ"},"user":{"id":25,"username":"test2",firstName:"",lastName:"",email:"",pword:"",vpword:""},"createdDateTime":"2016-10-12T20:08:19.749Z"}];
    };
}