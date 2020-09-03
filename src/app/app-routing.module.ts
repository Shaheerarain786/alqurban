import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

  const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./main/main.module').then(m => m.MainModule)
    }
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
