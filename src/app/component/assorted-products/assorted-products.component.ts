import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-assorted-products',
  templateUrl: './assorted-products.component.html',
  styleUrls: ['./assorted-products.component.scss']
})
export class AssortedProductsComponent implements OnInit {

  public assortedList : any ;
  public filterCategory : any
  searchKey:string ="";



  constructor(private api : ApiService, private cartService : CartService) {

  }

  ngOnInit(): void {
    this.api.getAssortedProducts()
    .subscribe(res=>{
      this.assortedList = res;
      this.filterCategory = res;
      this.assortedList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.assortedList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.assortedList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  
  }

}
