import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GlobalService } from '../global.service';
import { Observable } from 'rxjs';
import { APIConstant } from '../../constants/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiStartPoint: String = environment.apiurl;

  constructor(private globalhttp: GlobalService) { }

  login(obj:any):Observable<any>{
      return this.globalhttp.post(APIConstant.login.login,obj )
  }
  
}
