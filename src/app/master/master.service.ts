export class MasterService {

    sysparams = [
        { param: 'BASE_CURRENCY', value: 'INR' },
        { param: 'COUNTRY', value: 'UAE' },
        { param: 'TIME_FORMAT', value: 'dd-MM-yyyy' },
        { param: 'MASK_CARD', value: 'true' },
        { param: 'SHOW_BALANCE', value: 'true' },
        { param: 'SHOW_CARD', value: 'true' },
    ];

    codeMasters = [
        { code: 'CURRENCY', codeValues: ['AED', 'INR', 'USD'] },
        { code: 'ACTIONS', codeValues: ['New', 'Edit'] }
    ];
    getSystemParams() {
        return this.sysparams;
    }
    getCodeMasters() {
        return this.codeMasters;
    }


}