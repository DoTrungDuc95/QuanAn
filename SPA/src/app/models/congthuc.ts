export interface ICongthuc {
    tenCongThuc: string;
    mota: string;
    anh: string; 
}

export class Congthuc implements ICongthuc{
    tenCongThuc: string;
    mota: string;
    anh: string;

    constructor(ten: string, mota: string, anh: string){
        this.tenCongThuc = ten;
        this.mota = mota;
        this.anh = anh;
    }
}
