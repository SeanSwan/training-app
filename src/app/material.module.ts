import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [
      MatButtonModule, 
      MatToolbarModule
    ],
    exports: [
      MatButtonModule, 
      MatToolbarModule
    ],
   
  })
  export class MaterialModule { }