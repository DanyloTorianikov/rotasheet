import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutsModule } from './modules/layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsRegistrarService } from './services/icons-registrar.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    IconsRegistrarService,
    { provide: APP_INITIALIZER, useFactory: initializeAppSteps, deps: [IconsRegistrarService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeAppSteps(iconsRegistrarService: IconsRegistrarService) {
  return (): Promise<void> => iconsRegistrarService.registerIcons();
}