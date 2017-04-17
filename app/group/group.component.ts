import { Group } from '../data/group';
import { Component, Input } from '@angular/core';


/**
 * ��������� ����������� ����� �� ������� ����������� ���������
 */
@Component({
    moduleId: module.id,
    selector: 'group',
    templateUrl: 'group.component.html',
    styleUrls: ['group.component.css']
})
export class GroupComponent {
    @Input() group: Group;
}