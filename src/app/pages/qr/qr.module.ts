import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { QRPageRoutingModule } from './qr-routing.module';

import { QRPage } from './qr.page';
import { QRCodeModule } from 'angularx-qrcode';  // Cambiar por angularx-qrcode

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRPageRoutingModule,
    QRCodeModule  // Usar QRCodeModule de angularx-qrcode
  ],
  declarations: [QRPage]
})
export class QRPageModule {}
