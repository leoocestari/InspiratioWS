import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent {
  fileTitle: string = '';
  fileContent: string = '';

  @Output() fileCreated = new EventEmitter<{ name: string, content: string }>();

  saveFile() {
    if (this.fileTitle && this.fileContent) {
      const newFile = {
        name: `${this.fileTitle}.txt`,
        content: this.fileContent
      };
      this.fileCreated.emit(newFile);
      this.fileTitle = '';
      this.fileContent = '';
    }
  }
}
