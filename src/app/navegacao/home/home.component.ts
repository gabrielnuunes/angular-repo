import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/seguranca/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    this.gerarToken();
  }
  
  gerarToken(){
    
    this.authService.obterToken()
    .subscribe(
        auth => {
            localStorage.setItem('token', auth['tokenType'] + ' ' + auth['accessToken']);
            console.log('teste')
        },
        error => console.log(error)
    );
  
  }
  
  emitirSenha(){
    console.log("Emitiu senha!")
  }

  
}
