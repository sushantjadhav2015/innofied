import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ImageCroppedEvent,
  ImageCropperComponent,
  ImageCropperModule,
} from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  standalone: true,
  imports: [CommonModule, ImageCropperModule],
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css'],
})
export class ImageCroppercomponent {
  @ViewChild(ImageCropperComponent) cropper!: ImageCropperComponent;
  imgChangeEvt: any = '';
  cropImgPreview: any = '';
  cropInProgress: boolean = true;
  showCropper: boolean = false;

  onFileChange(event: any): void {
    this.imgChangeEvt = event;
    this.showCropper = true;
  }

  cropImg(e: ImageCroppedEvent) {
    if (e.objectUrl && this.cropInProgress) {
      const imgElement = new Image();
      imgElement.src = e.objectUrl;
      imgElement.style.display = 'none';

      imgElement.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (context) {
          canvas.width = imgElement.width;
          canvas.height = imgElement.height;
          context.drawImage(
            imgElement,
            0,
            0,
            imgElement.width,
            imgElement.height
          );

          const base64Image = canvas.toDataURL('image/jpeg');
          this.cropImgPreview = base64Image;
          imgElement.remove();
        }
      };
    } else if (!e.objectUrl) {
      console.error('Cropped image data is missing or invalid.', e);
    }
  }

  imgLoad() {
    // display cropper tool
  }

  initCropper() {
    // init cropper
  }

  imgFailed() {
    // error msg
  }
  recrop() {
    this.showCropper = !this.showCropper;
    if (this.showCropper) {
      this.cropper.crop();
    }
  }
  cancelCrop() {}
}
