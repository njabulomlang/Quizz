import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PoliticsPage } from '../pages/politics/politics';
import { NaturePage } from '../pages/nature/nature';
import { AutomotivePage } from '../pages/automotive/automotive';
import { SciencePage } from '../pages/science/science';
import { SportsPage } from '../pages/sports/sports';
import { QuizProvider } from '../providers/quiz/quiz';
import { IonicStorageModule } from '@ionic/storage';
import { ResultsPage } from '../pages/results/results';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PoliticsPage,
    NaturePage,
    AutomotivePage,
    SciencePage,
    SportsPage,
    ResultsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PoliticsPage,
    NaturePage,
    AutomotivePage,
    SciencePage,
    SportsPage,
    ResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuizProvider
  ]
})
export class AppModule {}
