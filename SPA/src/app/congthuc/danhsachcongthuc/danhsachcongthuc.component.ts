import { Congthuc } from './../../models/congthuc';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhsachcongthuc',
  templateUrl: './danhsachcongthuc.component.html',
  styleUrls: ['./danhsachcongthuc.component.css'],
})
export class DanhsachcongthucComponent implements OnInit {
  danhSachCongThuc: Congthuc[] = [
    new Congthuc(
      'Xúc xích',
      'Món ăn dạng hình trụ làm từ lợn hoặc bò',
      '/assets/image/sausage_PNG5194.png'
    ),
    new Congthuc(
      'Kebab',
      'Bánh mì kiểu Thổ Nhĩ Kỳ do Việt Nam sản xuất',
      '/assets/image/kebab_PNG54.png'
    ),
    new Congthuc(
      'bimbim',
      'Đồ ăn vặt làm từ bột và muối cùng với hương liệu',
      '/assets/image/kfc_food_PNG34.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
