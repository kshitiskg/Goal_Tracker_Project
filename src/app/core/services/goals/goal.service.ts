import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConstant } from '../../constants/APIconstant';
import { GlobalService } from '../global.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  apiStartPoint: String = environment.apiurl;

  constructor(private globalhttp: GlobalService) {}

  getAllGoal(): Observable<any> {
    return this.globalhttp.get(
        APIConstant.goalEndPoint.GetAllGoals
    );
  }

  getAllGoalsCreatedByUser(): Observable<any> {
    return this.globalhttp.get(
        APIConstant.goalEndPoint.GetAllGoalsCreatedByUser
    );
  }

  getAllGoalById(): Observable<any> {
    return this.globalhttp.get(
        APIConstant.goalEndPoint.getGoalById
    );
  }

  createNewGoal(obj: any): Observable<any> {
    return this.globalhttp.post(
        APIConstant.goalEndPoint.createNewGoal,
      obj
    );
  }

  updateGoal(obj: any): Observable<any> {
    return this.globalhttp.put(
        APIConstant.goalEndPoint.UpdateGoal,
      obj
    );
  }

  deleteGoalById(): Observable<any> {
    return this.globalhttp.get(
        APIConstant.goalEndPoint.DeleteGoalById
    );
  }
}
