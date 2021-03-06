/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '../../../../src/app/components/producto-detail.component';
import * as i3 from '../../../../src/app/services/producto.service';
import * as i4 from '@angular/http';
import * as i5 from '@angular/router';
const styles_ProductoDetailComponent:any[] = ([] as any[]);
export const RenderType_ProductoDetailComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ProductoDetailComponent,data:{}});
function View_ProductoDetailComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['Cargando producto...'])),(_l()(),
      i0.ɵted((null as any),['\n']))],(null as any),(null as any));
}
function View_ProductoDetailComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),5,'div',[['class',
      'col-lg-4']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n		'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n		'])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),0,'img',[['class','producto_imagen']],[[8,'src',
              4]],(null as any),(null as any),(null as any),(null as any))),(_l()(),
          i0.ɵted((null as any),['\n	']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = i0.ɵinlineInterpolate(1,'http://ejemplo.dev/uploads/',_co.producto.imagen,
        '');
    _ck(_v,4,0,currVal_0);
  });
}
function View_ProductoDetailComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),17,'div',[['class',
      'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_ProductoDetailComponent_3)),i0.ɵdid(16384,
          (null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),11,'div',[['class','col-lg-8']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n		'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),['\n		'])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),2,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',' €'])),(_l()(),i0.ɵted((null as any),['\n		'])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),
          i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.producto.imagen;
        _ck(_v,3,0,currVal_0);
      },(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_1:any = _co.producto.nombre;
        _ck(_v,8,0,currVal_1);
        const currVal_2:any = _co.producto.precio;
        _ck(_v,12,0,currVal_2);
        const currVal_3:any = _co.producto.descripcion;
        _ck(_v,15,0,currVal_3);
      });
}
export function View_ProductoDetailComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_ProductoDetailComponent_1)),i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n\n'])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_ProductoDetailComponent_2)),i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any))],(_ck,_v) => {
    var _co:i2.ProductoDetailComponent = _v.component;
    const currVal_0:boolean = !_co.producto;
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = _co.producto;
    _ck(_v,4,0,currVal_1);
  },(null as any));
}
export function View_ProductoDetailComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'producto-detail',
      ([] as any[]),(null as any),(null as any),(null as any),View_ProductoDetailComponent_0,
      RenderType_ProductoDetailComponent)),i0.ɵprd(512,(null as any),i3.ProductoService,
      i3.ProductoService,[i4.Http]),i0.ɵdid(114688,(null as any),0,i2.ProductoDetailComponent,
      [i5.ActivatedRoute,i5.Router,i3.ProductoService],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,2,0);
      },(null as any));
}
export const ProductoDetailComponentNgFactory:i0.ComponentFactory<i2.ProductoDetailComponent> = i0.ɵccf('producto-detail',
    i2.ProductoDetailComponent,View_ProductoDetailComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3Jlc3RyYWRhei9hbmd1bGFyLXdlYnBhY2svd2VicGFjay1hbmd1bGFyNC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdG8tZGV0YWlsLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9yZXN0cmFkYXovYW5ndWxhci13ZWJwYWNrL3dlYnBhY2stYW5ndWxhcjQvc3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RvLWRldGFpbC5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9yZXN0cmFkYXovYW5ndWxhci13ZWJwYWNrL3dlYnBhY2stYW5ndWxhcjQvc3JjL2FwcC92aWV3cy9wcm9kdWN0by1kZXRhaWwuaHRtbCIsIm5nOi8vL1VzZXJzL3Jlc3RyYWRhei9hbmd1bGFyLXdlYnBhY2svd2VicGFjay1hbmd1bGFyNC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdG8tZGV0YWlsLmNvbXBvbmVudC50cy5Qcm9kdWN0b0RldGFpbENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgKm5nSWY9XCIhcHJvZHVjdG9cIj5cblx0PGgzPkNhcmdhbmRvIHByb2R1Y3RvLi4uPC9oMz5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJwcm9kdWN0b1wiPlxuXHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTRcIiAqbmdJZj1cInByb2R1Y3RvLmltYWdlblwiPlxuXHRcdDxici8+XG5cdFx0PGltZyBzcmM9XCJodHRwOi8vZWplbXBsby5kZXYvdXBsb2Fkcy97e3Byb2R1Y3RvLmltYWdlbn19XCIgY2xhc3M9XCJwcm9kdWN0b19pbWFnZW5cIiAvPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImNvbC1sZy04XCI+XG5cdFx0PGgzPnt7cHJvZHVjdG8ubm9tYnJlfX08L2gzPlxuXHRcdDxwPjxzdHJvbmc+e3twcm9kdWN0by5wcmVjaW99fSDigqw8L3N0cm9uZz48L3A+XG5cdFx0PHA+e3twcm9kdWN0by5kZXNjcmlwY2lvbn19PC9wPlxuXHQ8L2Rpdj5cbjwvZGl2PiIsIjxwcm9kdWN0by1kZXRhaWw+PC9wcm9kdWN0by1kZXRhaWw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUEsd0VBQXVCO2FBQUEseUJBQ3RCO01BQUE7TUFBQSxnQkFBSSx5REFBeUI7YUFBQTs7O29CQUk3QjtNQUFBO01BQThDLHlDQUM3QztVQUFBO1VBQUEsZ0JBQUsseUNBQ0w7VUFBQTtjQUFBLDhEQUFvRjtpQkFBQTs7SUFBL0U7UUFBQTtJQUFMLFdBQUssU0FBTDs7OztvQkFIRjtNQUFBO01BQWtDLHdDQUNqQztVQUFBLHNFQUFBO1VBQUE7VUFBQSxlQUdNLHdDQUNOO1VBQUE7VUFBQSwwREFBc0I7VUFBQSxXQUNyQjtVQUFBO01BQUksd0NBQXdCO01BQzVCO1VBQUEsMERBQUc7VUFBQTtVQUFBLDRDQUFRO1VBQUEsWUFBa0MseUNBQzdDO1VBQUE7VUFBQSw4QkFBRyx3Q0FBNEI7aUJBQUEseUJBQzFCOzs7UUFSZ0I7UUFBdEIsV0FBc0IsU0FBdEI7OztRQUtLO1FBQUE7UUFDTztRQUFBO1FBQ1I7UUFBQTs7OztvQkFaTDtNQUFBLHdDQUFBO29CQUFBLG1DQUVNO01BQUEsV0FFTjtNQUFBLHdDQUFBO29CQUFBOztJQUpLO0lBQUwsV0FBSyxTQUFMO0lBSWlCO0lBQWpCLFdBQWlCLFNBQWpCOzs7O29CQ0pBO01BQUE7d0NBQUE7eUJBQUEsa0JBQUE7TUFBQTs7UUFBQTs7OzsifQ==
