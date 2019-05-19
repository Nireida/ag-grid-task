import { NgModule }                          from "@angular/core";
import { BrowserModule }                     from "@angular/platform-browser";
import { FormsModule }                       from "@angular/forms";
import { HttpClientModule }                  from "@angular/common/http";
import { NgbModule }                         from '@ng-bootstrap/ng-bootstrap';
import { DatePipe, registerLocaleData }      from '@angular/common';
import { AgGridModule }                      from "ag-grid-angular";
import { AppComponent }                      from "./app.component";
import { CustomDateComponent }               from "./custom-date/custom-date-component.component";
import { NgZorroAntdModule, NZ_I18N, ru_RU } from 'ng-zorro-antd';
import { BrowserAnimationsModule }           from '@angular/platform-browser/animations';
import ru                                    from '@angular/common/locales/ru';

registerLocaleData(ru);



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([CustomDateComponent]),
    NgbModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, CustomDateComponent],
  bootstrap: [AppComponent],
  providers: [DatePipe, { provide: NZ_I18N, useValue: ru_RU }]
})
export class AppModule {
}