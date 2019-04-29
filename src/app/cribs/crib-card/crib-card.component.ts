import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { lb } from 'lightbox2';
import { Crib } from '@sly/interfaces/crib';
import { CribService } from '@sly/services/crib.service';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input('crib') crib: Crib;
  constructor(private router:Router,private route:ActivatedRoute,private cribService:CribService) { }


  cribs:Crib;
  ngOnInit() {
    let _id=this.route.snapshot.params['id'];
    this.cribService.getOneCrib(_id)
    .subscribe(crib=>this.crib=crib);
  }

    
  cribDelete(){
    this.cribService.cribDelete(this.cribs.id)
    .subscribe(data=>{
      this.router.navigate(['/']);
    })
  }
  

}
