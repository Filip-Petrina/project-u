import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		loadChildren: '@homepage/homepage.module#HomepageModule',
		data: { show_title: false, title_text: '' }
	},
	{
		path: 'contact-us',
		loadChildren: '@contact-us/contact-us.module#ContactUsModule',
		data: { show_title: true, title_text: 'Contact Us' }
	},
	{ path: '**', redirectTo: 'homepage' },
];



@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
