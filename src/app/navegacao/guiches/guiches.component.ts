import { Component, OnInit } from '@angular/core';
import { Guiches } from 'src/app/service/guiches';
import { GuichesService } from 'src/app/service/guiches.service';

@Component({
  selector: 'app-guiches',
  templateUrl: './guiches.component.html',
  styles: [
  ]
})
export class GuichesComponent implements OnInit {

  constructor(private guicheService: GuichesService) {}

  public guiches: Guiches[] = [];

  ngOnInit(): void {
      this.guicheService.obterGuiches()
        .subscribe(
          guiches => {
            this.guiches = guiches;
            console.log(guiches);
          },
          error => console.log(error)
        );
    
  }


}
