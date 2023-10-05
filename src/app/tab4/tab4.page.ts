import { Component} from '@angular/core';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{


  estrelasSelecionadas: number=0;

  constructor(private httpService: HttpService) { }

  setRating(rating: number){
    this.estrelasSelecionadas = rating;
  }

  avaliarCozinha() {
    const avaliacaoData = {
       "numero_de_estrelas": this.estrelasSelecionadas,
       "id_do_usuario": localStorage.getItem('user'),
     };
     this.httpService.enviarAvaliacaoCozinha(avaliacaoData).subscribe();
} 

}
