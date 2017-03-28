import { Person } from './persons';
import { Student } from './students';
import { PersonComponent } from '../person-form/person.component';

// export const Dictionary: { [nameEntity: string] : string } = {};
// Dictionary['Student'] = 'PersonComponent';
// Dictionary['Person'] = 'PersonComponent';



export class Dictionary {
    records: RecordDictionary[] = [];

    getRecords(): RecordDictionary[] {
        return this.records;
    }

    findComponent(nameEntity: string): string {
        for(let record of this.records) {
            if(record.nameEntity == nameEntity) {
                return record.nameComponent;
            }
        }
        return null;
    }

    getNamesEntity(): string[] {
        let names: string[] = [];
        for(let record of this.records) {
            names.push(record.nameEntity);
        }
        return names;
    }

    pushNewRecord(record: RecordDictionary) {
        this.records.push(record);
    }
}

export class RecordDictionary {
    // nameEntity: string;
    // nameComponent: string;
    constructor(public nameEntity: string, 
                public nameComponent: string) {}
}