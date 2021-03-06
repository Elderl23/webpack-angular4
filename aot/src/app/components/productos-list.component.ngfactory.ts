/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from '@angular/common';
import * as i3 from '../../../../src/app/components/productos-list.component';
import * as i4 from '../../../../src/app/services/producto.service';
import * as i5 from '@angular/http';
const styles_ProductosListComponent:any[] = ([] as any[]);
export const RenderType_ProductosListComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ProductosListComponent,data:{}});
function View_ProductosListComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n	Cargando listado de productos...\n']))],(null as any),
      (null as any));
}
function View_ProductosListComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',[['class',
      'imagen_container']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n					'])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),0,'img',[['class','producto_imagen']],[[8,'src',
          4]],(null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n				']))],(null as any),(_ck,_v) => {
    const currVal_0:any = i0.ɵinlineInterpolate(1,'http://ejemplo.dev/uploads/',(<any>_v.parent).context.$implicit.imagen,
        '');
    _ck(_v,2,0,currVal_0);
  });
}
function View_ProductosListComponent_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n					'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      0,'div',[['class','producto_relleno']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n				']))],(null as any),
      (null as any));
}
function View_ProductosListComponent_6(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),14,'div',[['class',
      'botones']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n					'])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),3,'a',[['class','btn btn-md btn-primary']],[[1,'target',0],
              [8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,3).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),['Ver'])),(_l()(),
          i0.ɵted((null as any),['\n					'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          3,'a',[['class','btn btn-md btn-warning']],[[1,'target',0],[8,'href',4]],
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,8).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i1.RouterLinkWithHref,
          [i1.Router,i1.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i0.ɵpad(2),(_l()(),i0.ɵted((null as any),['Editar'])),(_l()(),
          i0.ɵted((null as any),['\n					'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'a',[['class','btn btn-md btn-danger']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.borrarConfirm((<any>_v.parent).context.$implicit.id)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Borrar'])),
      (_l()(),i0.ɵted((null as any),['\n				']))],(_ck,_v) => {
    const currVal_2:any = _ck(_v,4,0,'/producto',(<any>_v.parent).context.$implicit.id);
    _ck(_v,3,0,currVal_2);
    const currVal_5:any = _ck(_v,9,0,'/editar-producto',(<any>_v.parent).context.$implicit.id);
    _ck(_v,8,0,currVal_5);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,3).target;
    const currVal_1:any = i0.ɵnov(_v,3).href;
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_3:any = i0.ɵnov(_v,8).target;
    const currVal_4:any = i0.ɵnov(_v,8).href;
    _ck(_v,7,0,currVal_3,currVal_4);
  });
}
function View_ProductosListComponent_7(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'div',[['class',
      'seguro']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n					'])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'a',[['class','btn btn-md btn-danger']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onDeleteProducto((<any>_v.parent).context.$implicit.id)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Quiero eliminarlo'])),
      (_l()(),i0.ɵted((null as any),['\n					'])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'a',[['class','btn btn-md btn-warning']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.cancelarConfirm()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Cancelar'])),
      (_l()(),i0.ɵted((null as any),['\n				']))],(null as any),(null as any));
}
function View_ProductosListComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),24,'div',[['class',
      'col-lg-3']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n			'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          21,'div',[['class','thumbnail']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n				'])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ProductosListComponent_4)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n				'])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ProductosListComponent_5)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n				'])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),0,'div',[['class','caption']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n				'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),['\n				'])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',' €'])),(_l()(),i0.ɵted((null as any),['\n				'])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_ProductosListComponent_6)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n				'])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ProductosListComponent_7)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n			'])),(_l()(),
          i0.ɵted((null as any),['\n		']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _v.context.$implicit.imagen;
    _ck(_v,5,0,currVal_0);
    const currVal_1:boolean = !_v.context.$implicit.imagen;
    _ck(_v,8,0,currVal_1);
    const currVal_4:any = (_co.confirmado != _v.context.$implicit.id);
    _ck(_v,19,0,currVal_4);
    const currVal_5:any = (_co.confirmado == _v.context.$implicit.id);
    _ck(_v,22,0,currVal_5);
  },(_ck,_v) => {
    const currVal_2:any = _v.context.$implicit.nombre;
    _ck(_v,13,0,currVal_2);
    const currVal_3:any = _v.context.$implicit.precio;
    _ck(_v,16,0,currVal_3);
  });
}
function View_ProductosListComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      4,'div',[['class','row']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n		'])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_ProductosListComponent_3)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n	'])),(_l()(),i0.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.productos;
    _ck(_v,5,0,currVal_0);
  },(null as any));
}
export function View_ProductosListComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'h2',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),0,'hr',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n\n'])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_ProductosListComponent_1)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n\n'])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_ProductosListComponent_2)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any))],(_ck,_v) => {
    var _co:i3.ProductosListComponent = _v.component;
    const currVal_1:boolean = !_co.productos;
    _ck(_v,6,0,currVal_1);
    const currVal_2:any = _co.productos;
    _ck(_v,9,0,currVal_2);
  },(_ck,_v) => {
    var _co:i3.ProductosListComponent = _v.component;
    const currVal_0:any = _co.titulo;
    _ck(_v,1,0,currVal_0);
  });
}
export function View_ProductosListComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'productos-list',
      ([] as any[]),(null as any),(null as any),(null as any),View_ProductosListComponent_0,
      RenderType_ProductosListComponent)),i0.ɵprd(512,(null as any),i4.ProductoService,
      i4.ProductoService,[i5.Http]),i0.ɵdid(114688,(null as any),0,i3.ProductosListComponent,
      [i1.ActivatedRoute,i1.Router,i4.ProductoService],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,2,0);
      },(null as any));
}
export const ProductosListComponentNgFactory:i0.ComponentFactory<i3.ProductosListComponent> = i0.ɵccf('productos-list',
    i3.ProductosListComponent,View_ProductosListComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3Jlc3RyYWRhei9hbmd1bGFyLXdlYnBhY2svd2VicGFjay1hbmd1bGFyNC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdG9zLWxpc3QuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL3Jlc3RyYWRhei9hbmd1bGFyLXdlYnBhY2svd2VicGFjay1hbmd1bGFyNC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdG9zLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvcmVzdHJhZGF6L2FuZ3VsYXItd2VicGFjay93ZWJwYWNrLWFuZ3VsYXI0L3NyYy9hcHAvdmlld3MvcHJvZHVjdG9zLWxpc3QuaHRtbCIsIm5nOi8vL1VzZXJzL3Jlc3RyYWRhei9hbmd1bGFyLXdlYnBhY2svd2VicGFjay1hbmd1bGFyNC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdG9zLWxpc3QuY29tcG9uZW50LnRzLlByb2R1Y3Rvc0xpc3RDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aDI+e3sgdGl0dWxvIH19PC9oMj5cbjxociAvPlxuXG48ZGl2ICpuZ0lmPVwiIXByb2R1Y3Rvc1wiPlxuXHRDYXJnYW5kbyBsaXN0YWRvIGRlIHByb2R1Y3Rvcy4uLlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJwcm9kdWN0b3NcIj5cblx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctM1wiICpuZ0Zvcj1cImxldCBwcm9kdWN0byBvZiBwcm9kdWN0b3NcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0aHVtYm5haWxcIj5cblx0XHRcdFx0PGRpdiAqbmdJZj1cInByb2R1Y3RvLmltYWdlblwiIGNsYXNzPVwiaW1hZ2VuX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiaHR0cDovL2VqZW1wbG8uZGV2L3VwbG9hZHMve3twcm9kdWN0by5pbWFnZW59fVwiIGNsYXNzPVwicHJvZHVjdG9faW1hZ2VuXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgKm5nSWY9XCIhcHJvZHVjdG8uaW1hZ2VuXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb2R1Y3RvX3JlbGxlbm9cIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+PC9kaXY+XG5cdFx0XHRcdDxoMz57e3Byb2R1Y3RvLm5vbWJyZX19PC9oMz5cblx0XHRcdFx0PHA+e3twcm9kdWN0by5wcmVjaW99fSDigqw8L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJib3RvbmVzXCIgKm5nSWY9XCJjb25maXJtYWRvICE9IHByb2R1Y3RvLmlkXCI+XG5cdFx0XHRcdFx0PGEgW3JvdXRlckxpbmtdPVwiWycvcHJvZHVjdG8nLCBwcm9kdWN0by5pZF1cIiBjbGFzcz1cImJ0biBidG4tbWQgYnRuLXByaW1hcnlcIj5WZXI8L2E+XG5cdFx0XHRcdFx0PGEgW3JvdXRlckxpbmtdPVwiWycvZWRpdGFyLXByb2R1Y3RvJywgcHJvZHVjdG8uaWRdXCIgY2xhc3M9XCJidG4gYnRuLW1kIGJ0bi13YXJuaW5nXCI+RWRpdGFyPC9hPlxuXHRcdFx0XHRcdDxhIChjbGljayk9XCJib3JyYXJDb25maXJtKHByb2R1Y3RvLmlkKTtcIiBjbGFzcz1cImJ0biBidG4tbWQgYnRuLWRhbmdlclwiPkJvcnJhcjwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzZWd1cm9cIiAqbmdJZj1cImNvbmZpcm1hZG8gPT0gcHJvZHVjdG8uaWRcIj5cblx0XHRcdFx0XHQ8YSAoY2xpY2spPVwib25EZWxldGVQcm9kdWN0byhwcm9kdWN0by5pZCk7XCIgY2xhc3M9XCJidG4gYnRuLW1kIGJ0bi1kYW5nZXJcIj5RdWllcm8gZWxpbWluYXJsbzwvYT5cblx0XHRcdFx0XHQ8YSAoY2xpY2spPVwiY2FuY2VsYXJDb25maXJtKCk7XCIgY2xhc3M9XCJidG4gYnRuLW1kIGJ0bi13YXJuaW5nXCI+Q2FuY2VsYXI8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+IiwiPHByb2R1Y3Rvcy1saXN0PjwvcHJvZHVjdG9zLWxpc3Q+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0dBO01BQUEsd0VBQXdCO2FBQUE7Ozs7b0JBUXBCO01BQUE7TUFBQSxnQkFBc0QsNENBQ3JEO01BQUE7VUFBQSw4REFBb0Y7TUFBQTtJQUEvRTtRQUFBO0lBQUwsV0FBSyxTQUFMOzs7O29CQUVEO01BQUEsd0VBQThCO2FBQUEsNkJBQzdCO01BQUE7TUFBQSw4QkFBb0M7Ozs7b0JBS3JDO01BQUE7TUFBdUQsNENBQ3REO1VBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBRyxJQUF5RSx3Q0FBTztpQkFBQSw2QkFDbkY7VUFBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2tCQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFHLElBQWdGLDJDQUFVO2lCQUFBLDZCQUM3RjtVQUFBO2NBQUE7WUFBQTtZQUFBO1lBQUc7Y0FBQTtjQUFBO1lBQUE7WUFBSDtVQUFBLGdDQUF1RTtNQUFVO0lBRjlFO0lBQUgsV0FBRyxTQUFIO0lBQ0c7SUFBSCxXQUFHLFNBQUg7O0lBREE7SUFBQTtJQUFBLFdBQUEsbUJBQUE7SUFDQTtJQUFBO0lBQUEsV0FBQSxtQkFBQTs7OztvQkFHRDtNQUFBO01BQXNELDRDQUNyRDtVQUFBO2NBQUE7WUFBQTtZQUFBO1lBQUc7Y0FBQTtjQUFBO1lBQUE7WUFBSDtVQUFBLGdDQUEwRTtNQUFxQiw0Q0FDL0Y7VUFBQTtjQUFBO1lBQUE7WUFBQTtZQUFHO2NBQUE7Y0FBQTtZQUFBO1lBQUg7VUFBQSxnQ0FBK0Q7TUFBWTs7O29CQWxCOUU7TUFBQTtNQUF5RCwwQ0FDeEQ7VUFBQTtVQUFBLDhCQUF1QjtNQUN0QjthQUFBO1VBQUEsd0JBRU0sMkNBQ047aUJBQUE7YUFBQTtVQUFBLHdCQUVNLDJDQUNOO2lCQUFBO2NBQUEsMERBQTJCO1VBQUEsYUFDM0I7VUFBQTtNQUFJLHdDQUF3QjtNQUM1QjtVQUFBLDBEQUFHO1VBQUEsWUFBeUIsMkNBQzVCO1VBQUE7YUFBQTtVQUFBLHdCQUlNLDJDQUNOO2lCQUFBO2FBQUE7VUFBQSx3QkFHTSwwQ0FDRDtpQkFBQTs7SUFsQkE7SUFBTCxXQUFLLFNBQUw7SUFHSztJQUFMLFdBQUssU0FBTDtJQU1xQjtJQUFyQixZQUFxQixTQUFyQjtJQUtvQjtJQUFwQixZQUFvQixTQUFwQjs7SUFQSTtJQUFBO0lBQ0Q7SUFBQTs7OztvQkFaUDtNQUFBLHdFQUF1QjthQUFBLHlCQUN0QjtNQUFBO01BQUEsZ0JBQWlCLHlDQUNoQjtNQUFBO2FBQUE7NEJBQUEseUNBcUJNO1VBQUEsVUFDRDs7SUF0QmlCO0lBQXRCLFdBQXNCLFNBQXRCOzs7O29CQVRGO01BQUEsd0VBQUk7YUFBQSx5QkFBaUIsdUNBQ3JCO2FBQUE7VUFBQSw0Q0FBTTtNQUFBLFdBRU47TUFBQSx1Q0FBQTtvQkFBQSxtQ0FFTTtNQUFBLFdBRU47TUFBQSx1Q0FBQTtvQkFBQTs7SUFKSztJQUFMLFdBQUssU0FBTDtJQUlLO0lBQUwsV0FBSyxTQUFMOzs7SUFQSTtJQUFBOzs7O29CQ0FKO01BQUE7dUNBQUE7eUJBQUEsa0JBQUE7TUFBQTs7UUFBQTs7OzsifQ==
