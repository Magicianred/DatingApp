import { Component, OnInit } from '@angular/core';
import { Members } from '../../models/member';
import { MembersService } from "../../Services/members.service";

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  members: Members[];
  constructor( private memberService:MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

loadMembers(){
  this.memberService.getMembers().subscribe(
    members => {
      this.members = members;
    }
  )
}

}
