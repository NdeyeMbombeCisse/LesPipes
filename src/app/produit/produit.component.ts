import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');


export interface Produit{
  titre:string;
  prix:number;
}

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {

  produits:Produit[]=[];


  addproduit(
    titre:string,
    prix:number, form:NgForm): void{
      // ajouter le titre et le prix a la derniee place du tableau
      this.produits.push({
        titre,
        prix,
       
      });

      // reinitialiser le formulaire apres ajout
      form.reset();
    }

onSubmit(form: NgForm): void {
  console.log(form);
}

  ngOnInit(): void {
    
  }
  @Output() produitselectionne = new EventEmitter<Produit>
  select(produi:Produit): void{
    this.produitselectionne.emit(produi)
  }

}



