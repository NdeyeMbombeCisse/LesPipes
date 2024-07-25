import { Component } from '@angular/core';
import { Produit, ProduitComponent } from './produit/produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProduitComponent, DetailProduitComponent,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectProduit?: Produit;

  onProduitSelect(produit:Produit):void{
    this.selectProduit = produit;
  }
 
}
