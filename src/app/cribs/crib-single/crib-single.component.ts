import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Crib } from '@sly/interfaces/crib';
import { CribService } from '@sly/services/crib.service';


@Component({
  selector: 'app-crib-single',
  templateUrl: './crib-single.component.html',
  styleUrls: ['./crib-single.component.css']
})
export class CribSingleComponent implements OnInit {

  crib:Crib;
  constructor(private router:Router,private route:ActivatedRoute, private cribService:CribService) { }

  ngOnInit() {
    let _id = this.route.snapshot.params["id"];
    this.cribService.getOneCrib(_id)
    .subscribe(crib=>this.crib=crib);

    }

    cribDelete(){
      this.cribService.cribDelete(this.crib._id)
      .subscribe(data=>{
        this.router.navigate(['/cribs']);
      })
  
  }
}
