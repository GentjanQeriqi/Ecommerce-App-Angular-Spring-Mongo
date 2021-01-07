import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home',
    loadChildren: () =>  import('./components/home/home.module').then((m) => m.HomeModule), },

  { path: 'RPG',
    loadChildren: () => import('./components/rpg/rpg.module').then((m) => m.RpgModule),},

  { path: 'MMO',
    loadChildren: () => import('./components/mmo/mmo.module').then((m) => m.MmoModule),},

  { path: 'OpenWorld',
    loadChildren: () => import('./components/open-world/openWorld.module').then((m) => m.openWorldModule),},

  { path: 'FirstPerson',
    loadChildren: () => import('./components/first-person/firstPerson.module').then((m) => m.firstPersonModule),},

  { path: 'AddGames',
    loadChildren: () => import('./components/add-game/add-game.module').then((m) => m.AddGameModule),},

  { path: 'games',
    loadChildren: () => import('./components/games-list/gamesList.module').then((m) => m.gamesListModule),},


  { path: 'games/:id',
    loadChildren: () => import('./components/games-details/gamesDetails.module').then((m) => m.gamesDetailsModule),},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
