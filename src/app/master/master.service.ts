import { AppSettings } from './../shared/app-settings';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


import { SysParam } from './sysparam.model';
import { CodeMaster } from './codemaster.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MasterService {
  sysparams;
  codeMasters;

  constructor(private http: HttpClient) { }

  getSystemParams() {
    return this.http.get(AppSettings.DB_URL + AppSettings.SYS_PARAM_MST);
  }

  saveOrUpdateSystemParameters(sysparams: SysParam[]) {
    console.log('saving system param in database');
    const response = this.http.put(
      AppSettings.DB_URL + AppSettings.SYS_PARAM_MST,
      sysparams
    );
    this.logResponse(response);
  }

  getCodeMasters() {
    return this.http.get(AppSettings.DB_URL + AppSettings.CODE_MST);
  }

  saveOrUpdateCodeMasters(codeMasters: CodeMaster[]) {
    console.log('saving code master in database');
    const response = this.http.put(
      AppSettings.DB_URL + AppSettings.CODE_MST,
      codeMasters
    );
    this.logResponse(response);
  }

  logResponse(response: Observable<any>) {
    response.subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }

  getCodeMaster(code: string): Observable<CodeMaster> {

    return this.http.get(AppSettings.DB_URL + AppSettings.CODE_MST, {
      observe: 'body',
      responseType: 'json'
    }).pipe(map(
      (codemstrs: CodeMaster[]) => {        
        for (let codemstr of codemstrs) {
          if (codemstr.code == code) {
            return codemstr;
          }
        }
      }
    )
    );
  }

  getSystemParam(param: string): Observable<SysParam> {
    return this.http.get(AppSettings.DB_URL + AppSettings.SYS_PARAM_MST, {
      observe: 'body',
      responseType: 'json'
    }).pipe(map(
      (sysparams: SysParam[]) => {        
        for (let sysparam of sysparams) {
          if (sysparam.param == param) {
            return sysparam;
          }
        }
      }
    )
    );
  }
}
