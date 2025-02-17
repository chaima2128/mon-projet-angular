import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));
  }

  goToNext() {
    this.router.navigate(['/residence', this.residenceId + 1]);
  }
  goToAddResidence() {
    this.router.navigate(['/add-residence']);
  }
  
  goToUpdateResidence() {
    this.router.navigate(['/update-residence', this.residenceId]);
  }
  
}
