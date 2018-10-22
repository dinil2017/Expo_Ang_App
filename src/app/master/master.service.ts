import { SysParam } from './sysparam.model';
import { CodeMaster } from './codemaster.model';
export class MasterService {

  sysparams = [
    new SysParam('BASE_CURRENCY', 'INR'),
    new SysParam('COUNTRY', 'UAE'),
    new SysParam('TIME_FORMAT', 'dd-MM-yyyy'),
    new SysParam('MASK_CARD', 'true'),
    new SysParam('SHOW_BALANCE', 'true'),
    new SysParam('SHOW_CARD', 'true')
  ];

  codeMasters = [
    new CodeMaster('CURRENCY', ['AED', 'INR', 'USD']),
    new CodeMaster('ACTIONS', ['New', 'Edit'])
  ];
  getSystemParams() {
    return this.sysparams;
  }
  getCodeMasters() {
    return this.codeMasters;
  }

  updateSysParamMaster(id: number, sysParam: SysParam) {
    this.sysparams[id] = sysParam;
  }

  addSysParamMaster(sysParam: SysParam) {
    this.sysparams.push(sysParam);
  }

  deleteSysParamMaster(index: number) {
    this.sysparams.splice(index, 1);
  }

  updateCodeMaster(id: number, codeMaster: CodeMaster) {
    this.codeMasters[id] = codeMaster;
  }

  addCodeMaster(codeMaster: CodeMaster) {
    this.codeMasters.push(codeMaster);
  }

  deleteCodeMaster(index: number) {
    this.codeMasters.splice(index, 1);
  }

  deleteCodeVal(index: number, codValIndex: number) {
    this.codeMasters[index].codeValues.splice(codValIndex, 1);
  }

  getCodeMaster(code: string): CodeMaster {
    for (let codeMstr of this.codeMasters) {
      if (code === codeMstr.code) {
        return codeMstr;
      }
    }
    return null;
  }

  getSystemParam(param: string): any {
    for (let sysparam of this.sysparams) {
      if (param === sysparam.param) {
        return sysparam;
      }
    }
    return null;
  }
}
