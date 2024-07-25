import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DetailProduitComponent  } from './detail-produit/detail-produit.component';


export const routes: Routes = [

    { path: 'produits', component: ProduitComponent },
     { path: 'produits/:titre', component: DetailProduitComponent },
  { path: '', redirectTo: '/produits', pathMatch: 'full' }


];
