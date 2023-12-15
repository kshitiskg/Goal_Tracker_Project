import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GlobalService } from '../global.service';
import { APIConstant } from '../../constants/APIconstant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiStartPoint: String = environment.apiurl;

  constructor(private globalhttp:GlobalService) { }

  getAllUsers(): Observable<any> {
    return this.globalhttp.get( APIConstant.userEndPoint.getAllUsers);
  }

  getUserByUserId(): Observable<any> {
    return this.globalhttp.get( APIConstant.userEndPoint.getUserById);
  }

  createNewUser(obj:any): Observable<any> {
    return this.globalhttp.post(APIConstant.userEndPoint.createNewUser,obj);
  }

  updateUser(obj:any): Observable<any> {
    return this.globalhttp.put( APIConstant.userEndPoint.updateUser,obj);
  }

  deleteUserByUserId(): Observable<any> {
    return this.globalhttp.get( APIConstant.userEndPoint.deleteUserById);
  }

}
