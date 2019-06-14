import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSelectModule, MatCheckboxModule, MatButtonToggleModule, MatCardModule,

  MatSidenavModule, MatMenuModule, MatToolbarModule,
  MatButtonModule,  MatTooltipModule, MatIconModule,
  MatTableModule, MatSortModule, MatPaginatorModule, MatListModule,
  MatFormFieldModule, MatInputModule, MatRadioModule, MatSlideToggleModule,
  MatProgressSpinnerModule, MatAutocompleteModule,
  MatSnackBarModule, MatDialogModule, MatFormFieldControl,

} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecodeComponent } from './decode/decode.component';
import { EncodeComponent } from './encode/encode.component';
import { DlPosOnDemComponent } from './dl-pos-on-dem/dl-pos-on-dem.component';
import { DlSetModeComponent } from './dl-set-mode/dl-set-mode.component';
import { DlReqConfComponent } from './dl-req-conf/dl-req-conf.component';
import { DlSosModeComponent } from './dl-sos-mode/dl-sos-mode.component';
import { DlSetParamComponent } from './dl-set-param/dl-set-param.component';
import { DlDebugCmdComponent } from './dl-debug-cmd/dl-debug-cmd.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DecodeComponent,
    EncodeComponent,
    DlPosOnDemComponent,
    DlSetModeComponent,
    DlReqConfComponent,
    DlSosModeComponent,
    DlSetParamComponent,
    DlDebugCmdComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,

    BrowserAnimationsModule,

    MatSelectModule, MatCheckboxModule, MatButtonToggleModule, MatCardModule,

    MatSidenavModule, MatMenuModule, MatToolbarModule,
    MatButtonModule,  MatTooltipModule, MatIconModule,
    MatTableModule, MatSortModule, MatPaginatorModule, MatListModule,
    MatFormFieldModule, MatInputModule, MatRadioModule, MatSlideToggleModule,
    MatProgressSpinnerModule, MatAutocompleteModule,
    MatSnackBarModule, MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
