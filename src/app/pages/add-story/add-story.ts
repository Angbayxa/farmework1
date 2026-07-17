import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-add-story",
  imports: [ReactiveFormsModule],
  templateUrl: "./add-story.html",
  styleUrl: "./add-story.css",
})
export class AddStory {
  addForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.addForm = this.fb.group({
  
      title: "",
      content: "",
      view: 0,
      phatHanh: "",
      theLoai: "",
    });
  }

   submitForm() {
  //  alert(JSON.stringify(this.addForm.value));
   this.http.post("http://localhost:3000/stories", this.addForm.value).subscribe({
    next: () => {
      alert("Thêm thành công");
    },
    error: () => {
      alert("Thêm thất bại");
    },
   });
  }
}