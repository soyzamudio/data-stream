import { PubnubService } from './../../services/pubnub.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuOptions = environment.sidemenu;
  darkMode = false;

  constructor(private pns: PubnubService, private renderer2: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
  }

  clean() {
    this.pns.cleanData();
  }

  toggleDarkMode() {
    const htmlTag = this.el.nativeElement.ownerDocument.all[0];
    if (htmlTag?.attributes?.theme?.value === 'dark-mode') {
      this.darkMode = false;
      this.renderer2.removeAttribute(htmlTag, 'theme');
    } else {
      this.darkMode = true;
      this.renderer2.setAttribute(htmlTag, 'theme', 'dark-mode');
    }
  }

}
