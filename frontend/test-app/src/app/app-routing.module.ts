import { HomeComponent } from './home/home.component';

const routes: Routes = [
	  { path: 'home', component: HomeComponent },
	    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	  imports: [RouterModule.forRoot(routes)],
	    exports: [RouterModule]
})
