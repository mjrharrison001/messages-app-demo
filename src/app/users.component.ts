import { Component, OnInit }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { UsersService }    from './users.service';

@Component({
  selector: 'users-page',
  template: `
              <h2>Users</h2>
              <div class="row">
              <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-20x"></i>
              <div class="col-md-12">
                <table class="table table-bordered">
                <tr><th>Name</th><th>Email</th><th>Edit</th><th>Delete</th></tr>
                <tr *ngFor="let user of users">
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td><a><i class="glyphicon glyphicon-edit"></i></a></td>
                  <td><a><i class="glyphicon glyphicon-remove"></i></a></td>
                </tr>
                </table>
              </div>
              </div>
            `
})
export class UsersComponent implements OnInit {
  isLoading = true;
  users = [];

  constructor(private _usersService : UsersService){
  }

  ngOnInit(){
    this._usersService.getUsers()
      .subscribe(res => {
        console.log(res);
        this.users = res;
      },
      null,
      () => {this.isLoading = false}
      );
  }
}
