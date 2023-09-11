import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  user!: { id: string, name: string };
  constructor(private router: Router, private route: ActivatedRoute) {

  }
  onCategoriesClick() {
    // this.router.navigateByUrl('/caterories');
    this.router.navigate(['/caterories']);
  }
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.route.params.subscribe((data:Params)=>{
      this.user = {
        id:data['id'],
        name:data['name']
      }
    })
  }
  getRamaDetails(){
    this.router.navigate(['/users',2,'Rama'],{queryParams:{page:1,search:'leela'},fragment:'load'})
  }
 
}
