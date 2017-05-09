import { SOMEPERSONS } from '../data/data-test';
import { DataService } from '../services/data.service';
import { EntityType } from '../test/entity';
import { Component, Input } from '@angular/core';
import { incrId } from '../data/id-incr';

@Component({
    moduleId: module.id,
    selector: 'universal-list',
    templateUrl: 'universal-list.component.html',
    styleUrls: ['universal-list.component.css']
})
export class UniversalListComponent {
    @Input() entityArray: EntityType[];
    idList: string = incrId().toString();

    // constructor(private dataService: DataService) {}

    delete(entity: EntityType) {
        let index = this.entityArray.indexOf(entity);
        if(index > -1) {
            this.entityArray.splice(index, 1);
        }
    }

    closePopup(){
        var popup = document.getElementById('' + this.idList + 'popup2');
        popup.style.display = "none";
        popup.style.top = "-100%";
        popup.style.left = "50%";
        var overlay2 = document.getElementById('' + this.idList + 'win2');        
        overlay2.style.display = "none";
        for(let entity of this.entityArray) {
            let el = document.getElementById('' + this.idList + this.entityArray.indexOf(entity));
            el.style.display = "none";
            el = document.getElementById('edit' + this.idList + this.entityArray.indexOf(entity));
            el.style.display = "none";
        }
    }

    viewdiv(id: string, obj: any) {
        // console.log(obj);
        var el = document.getElementById(id);
        // console.log('' + this.idList + 'popup2');
        var popup = document.getElementById('' + this.idList + 'popup2');
        var overlay2 = document.getElementById('' + this.idList + 'win2');
        if(popup.style.display = "none") {
            popup.style.display = "block";
            overlay2.style.display = "block";
            popup.style.top = "10%";
            popup.style.left = "25%";
        } else {
            popup.style.display = "none";
            popup.style.top = "-100%";
            popup.style.left = "50%";
            overlay2.style.display = "none";
        }
        
        if (el.style.display == "block") {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }
    }
}