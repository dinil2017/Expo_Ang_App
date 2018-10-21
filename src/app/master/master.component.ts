import { CodeMaster } from './codemaster.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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


  public myForm: FormGroup;

  selectedCodeMStr: CodeMaster;

  newCode: string;

  constructor(
    private masterService: MasterService,
    private modalService: BsModalService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.sysparams = this.masterService.getSystemParams();
    this.codeMasters = this.masterService.getCodeMasters();
  }

  onEdit(id: number, template: TemplateRef<any>, mstType: string, codValId: number = null) {
    if (mstType == 'SYSPARAM') {
      this.editedMaster = Object.assign({}, this.sysparams[id]);
    } else if (mstType == 'CODE') {
      this.selectedCodeMStr = Object.assign({}, this.codeMasters[id]);
      this.myForm = this._fb.group({
        newCodValues: this._fb.array([])
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
      this.masterService.deleteSysParamMaster(id);
    } else if (mstType == 'CODE') {
      this.masterService.deleteCodeMaster(id);
    } else if (mstType == 'CODE_VAL') {
      this.masterService.deleteCodeVal(id, codValId);
    } else {
      throw new Error('Undefined Master type');
    }
  }

  onModalSubmit() {
    // TODO: invoke all subscribers on sysparam change
    if (this.masterType == 'SYSPARAM') {
      if (this.editMode) {
        this.masterService.updateSysParamMaster(this.editedId, this.editedMaster);
      }
      else {
        this.masterService.addSysParamMaster(this.editedMaster);
      }
    }     
    else if (this.masterType == 'CODE_VAL') {
      if (this.editMode) {
        this.editedMaster.codeValues[this.codValId] = this.editedCodVal;
        this.masterService.updateCodeMaster(this.editedId, this.editedMaster);
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
      this.myForm = this._fb.group({
        newCodValues: this._fb.array([])
      });
    } else if (mstType == 'CODE_VAL') {
      this.selectedCodeMStr = this.codeMasters[0];
      this.myForm = this._fb.group({
        newCodValues: this._fb.array([])
      });
    } else {
      throw new Error('Undefined Master type');
    }
    this.masterType = mstType;
    this.editMode = false;
    this.modalRef = this.modalService.show(template);
  }

  initNewCodeVal() {
    return this._fb.group({
      cdval: ''
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
      console.log('on save' + codeval.cdval);
      this.selectedCodeMStr.codeValues.push(codeval.cdval);
    });

    if (this.masterType == 'CODE' && !this.editMode) {
      this.masterService.addCodeMaster(this.selectedCodeMStr);
    } else if (this.masterType == 'CODE_VAL' || (this.masterType == 'CODE' && this.editMode)) {
      this.masterService.updateCodeMaster(this.editedId, this.selectedCodeMStr);
    }
  }

}
