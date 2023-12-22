import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule} from '@angular/material/paginator';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardPokemonComponent,
    DetailPokemonComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
