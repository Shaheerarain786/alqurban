import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
const routes:Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(home => home.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(products => products.ProductsModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(about => about.AboutModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(contact => contact.ContactModule)
      }
    ]
  }
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    UiModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
