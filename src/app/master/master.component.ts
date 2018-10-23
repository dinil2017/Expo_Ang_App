import { CodeMaster } from './codemaster.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

import { MasterService } from './master.service';
import { SysParam } from './sysparam.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  sysparams = [];
  codeMasters = [];

  modalRef: BsModalRef;

  sysParamModalForm: NgForm;
  codeMasterModalForm: NgForm;

  masterType: string;
  editedMaster: any = {};
  editedId: number;
  editMode: boolean = false;
  editedCodVal: any;
  codValId: number;

  myForm: FormGroup;

  selectedCodeMStr: CodeMaster;

  newCode: string;

  alerts: any[] = [];

  constructor(
    private masterService: MasterService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.masterService.getSystemParams().subscribe(
      (data: SysParam[]) => {
        console.log('got sys param in  master component ngOnInit:' + data);
        this.sysparams = data != undefined ? data : []}
    );
    this.masterService.getCodeMasters().subscribe(
      (data: CodeMaster[]) => {
        console.log('got code master param in  master component ngOnInit:' + data);
        this.codeMasters = data != undefined ? data : []}
    );
  }

  onEdit(
    id: number,
    template: TemplateRef<any>,
    mstType: string,
    codValId: number = null
  ) {
    if (mstType == 'SYSPARAM') {
      this.editedMaster = Object.assign({}, this.sysparams[id]);
    } else if (mstType == 'CODE') {
      this.selectedCodeMStr = Object.assign({}, this.codeMasters[id]);
      this.myForm = this.formBuilder.group({
        newCodValues: this.formBuilder.array([])
      });
    } else if (mstType == 'CODE_VAL') {
      this.editedMaster = Object.assign({}, this.codeMasters[id]);
      this.editedCodVal = this.editedMaster.codeValues[codValId];
      this.codValId = codValId;
    } else {
      throw new Error('Undefined Master type');
    }
    this.masterType = mstType;
    this.editedId = id;
    this.editMode = true;
    this.modalRef = this.modalService.show(template);
  }

  onDelete(id: number, mstType: string, codValId: number = null) {
    if (mstType == 'SYSPARAM') {
      this.sysparams.splice(id, 1);
      this.masterService.saveOrUpdateSystemParameters(this.sysparams);
      this.addAlert('success', 'System Parameter deleted!!');
    } else if (mstType == 'CODE') {
      this.codeMasters.splice(id, 1);
      this.masterService.saveOrUpdateCodeMasters(this.codeMasters);
      this.addAlert('success', 'Code Master deleted!!');
    } else if (mstType == 'CODE_VAL') {
      this.codeMasters[id].codeValues.splice(codValId, 1);
      this.masterService.saveOrUpdateCodeMasters(this.codeMasters);
      this.addAlert('success', 'Code Value deleted!!');
    } else {
      throw new Error('Undefined Master type');
    }
  }

  onModalSubmit() {
    // TODO: invoke all subscribers on sysparam change
    if (this.masterType == 'SYSPARAM') {
      if (this.editMode) {
        this.sysparams[this.editedId] = this.editedMaster;
        this.masterService.saveOrUpdateSystemParameters(this.sysparams);
        this.addAlert('success', 'System parameter updated!!');
      } else {
        this.sysparams.push(this.editedMaster);
        this.masterService.saveOrUpdateSystemParameters(this.sysparams);
        this.addAlert('success', 'System parameter added!!');
      }
    } else if (this.masterType == 'CODE_VAL') {
      if (this.editMode) {
        this.editedMaster.codeValues[this.codValId] = this.editedCodVal;
        this.codeMasters[this.editedId] = this.editedMaster;
        this.masterService.saveOrUpdateCodeMasters(this.codeMasters);
        this.addAlert('success', 'Code Values updated!!');
      }
    } else {
      throw new Error('Undefined Master type');
    }
  }

  onNewMaster(mstType: string, template: TemplateRef<any>) {
    if (mstType == 'SYSPARAM') {
      this.editedMaster = new SysParam('', '');
    } else if (mstType == 'CODE') {
      this.newCode = '';
      this.myForm = this.formBuilder.group({
        newCodValues: this.formBuilder.array([])
      });
    } else if (mstType == 'CODE_VAL') {
      this.selectedCodeMStr = this.codeMasters[0];
      this.myForm = this.formBuilder.group({
        newCodValues: this.formBuilder.array([])
      });
    } else {
      throw new Error('Undefined Master type');
    }
    this.masterType = mstType;
    this.editMode = false;
    this.modalRef = this.modalService.show(template);
  }

  initNewCodeVal() {
    return this.formBuilder.group({
      cdval: ['', [Validators.required]]
    });
  }

  onChange(id: number) {
    this.selectedCodeMStr = this.codeMasters[id];
    this.editedId = id;
  }

  onAddCodeVal() {
    const control = <FormArray>this.myForm.controls['newCodValues'];
    control.push(this.initNewCodeVal());
  }

  saveCodeVal(myForm: FormGroup) {
    if (this.masterType == 'CODE' && !this.editMode) {
      this.selectedCodeMStr = new CodeMaster(this.newCode, []);
    }
    const control = <FormArray>this.myForm.controls['newCodValues'];
    control.value.forEach(codeval => {
      this.selectedCodeMStr.codeValues.push(codeval.cdval);
    });

    if (this.masterType == 'CODE' && !this.editMode) {
      this.codeMasters.push(this.selectedCodeMStr);
      this.masterService.saveOrUpdateCodeMasters(this.codeMasters);
      this.addAlert('success', 'Code Master added!!');
    } else if (
      this.masterType == 'CODE_VAL' ||
      (this.masterType == 'CODE' && this.editMode)
    ) {
      this.codeMasters[this.editedId] = this.selectedCodeMStr;
      this.masterService.saveOrUpdateCodeMasters(this.codeMasters);
      this.addAlert('success', 'Code Master/Value updated!!');
    }
  }

  addAlert(type: string, message: string, timeout: number = 5000): void {
    this.alerts.push({
      type: type,
      msg: message,
      timeout: timeout
    });
  }

  onAlertClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
