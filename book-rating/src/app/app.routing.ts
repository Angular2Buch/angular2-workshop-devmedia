import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book/:isbn', component: BookDetailComponent }
  // { path: '*', component: NotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);
