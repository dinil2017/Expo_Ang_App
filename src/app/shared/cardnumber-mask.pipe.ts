import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'cardNumMask', pure: true })
export class CardNumMaskPipe implements PipeTransform {
    transform(value: any) {
        if (value == null || value === '' || value !== value) return value;
        try {
            return this.maskValue(value);
        } catch (error) {
            console.log(error);
        }
    }

    maskValue(value) {
        return value.slice(0, 4)
            + '********'
            + value.slice(12, 16);
    }
}