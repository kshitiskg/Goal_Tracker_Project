import { Injectable } from '@angular/core';
import {APIConstant} from '../../constants/APIconstant'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../global.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiStartPoint: String = environment.apiurl;

  constructor(private globalhttp:GlobalService) { }

  getAllCategory(): Observable<any> {
    return this.globalhttp.get( APIConstant.catagoriesEndPoint.GetAllCategories);
  }

  addBulkCategory(obj:any): Observable<any> {
    return this.globalhttp.post( APIConstant.catagoriesEndPoint.AddBulkCategories,obj);
  }

  deleteCategoryById(): Observable<any> {
    return this.globalhttp.get( APIConstant.catagoriesEndPoint.DeleteCategoryById);
  }
}
