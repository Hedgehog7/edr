import { DICTIONARYCOLL, DICTIONARY, Dictionary, RecordDictionary, DictionaryCollections, RecordDictionaryColleactions } from '../data/all-test-data';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dictionary',
    templateUrl: 'dictionary.component.html',
    styleUrls: ['dictionary.component.css']
})
export class DictionaryComponent {
    exampleDictionary: Dictionary = DICTIONARY;
    newRecord: RecordDictionary = new RecordDictionary('','');
    dictionaryColl: DictionaryCollections = DICTIONARYCOLL;

    delete (record: RecordDictionary) {
        let records: RecordDictionary[] = this.exampleDictionary.getRecords();
        records.splice(records.indexOf(record), 1);
    }

    deleteRecColl (record: RecordDictionaryColleactions) {
        let records: RecordDictionaryColleactions[] = this.dictionaryColl.getRecords();
        records.splice(records.indexOf(record), 1);
    }

    addNewRecord(record: RecordDictionary) {
        console.log((record.nameComponent != '') + ' && '
                     + (record.nameEntity != '') + ' : '
                     + record.nameComponent != '' && record.nameEntity != '');
        if(record.nameComponent != '' && record.nameEntity != '') {
            this.exampleDictionary.pushNewRecord(this.newRecord);
            this.newRecord = new RecordDictionary('','');
        }
    }
}