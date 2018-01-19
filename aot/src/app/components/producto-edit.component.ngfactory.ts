/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../src/app/components/producto-edit.component';
import * as i2 from '@angular/forms';
import * as i3 from '@angular/common';
import * as i4 from '../../../../src/app/services/producto.service';
import * as i5 from '@angular/http';
import * as i6 from '@angular/router';
const styles_ProductoEditComponent:any[] = ([] as any[]);
export const RenderType_ProductoEditComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ProductoEditComponent,data:{}});
function View_ProductoEditComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class',
      'label label-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['El nombre es obligatorio.']))],
      (null as any),(null as any));
}
function View_ProductoEditComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class',
      'label label-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['La descripcion es obligatoria.']))],
      (null as any),(null as any));
}
function View_ProductoEditComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class',
      'label label-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['El precio es obligatorio.']))],
      (null as any),(null as any));
}
function View_ProductoEditComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n		'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      0,'img',[['width','60px']],[[8,'src',4]],(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n	']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = i0.ɵinlineInterpolate(1,'http://ejemplo.dev/uploads/',_co.producto.imagen,
        '');
    _ck(_v,2,0,currVal_0);
  });
}
export function View_ProductoEditComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['',''])),(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),0,'hr',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n\n'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),63,'form',[['class',
      'col-lg-6'],['id','form-producto'],['novalidate','']],[[2,'ng-untouched',(null as any)],
      [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
          (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
      [2,'ng-pending',(null as any)]],[[(null as any),'ngSubmit'],[(null as any),'submit'],
      [(null as any),'reset']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:i1.ProductoEditComponent = _v.component;
    if (('submit' === en)) {
      const pd_0:any = ((<any>i0.ɵnov(_v,7).onSubmit($event)) !== false);
      ad = (pd_0 && ad);
    }
    if (('reset' === en)) {
      const pd_1:any = ((<any>i0.ɵnov(_v,7).onReset()) !== false);
      ad = (pd_1 && ad);
    }
    if (('ngSubmit' === en)) {
      const pd_2:any = ((<any>_co.onSubmit()) !== false);
      ad = (pd_2 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.ɵbf,([] as any[]),
      (null as any),(null as any)),i0.ɵdid(16384,[['formProducto',4]],0,i2.NgForm,
      [[8,(null as any)],[8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),i0.ɵprd(2048,
      (null as any),i2.ControlContainer,(null as any),[i2.NgForm]),i0.ɵdid(16384,(null as any),
      0,i2.NgControlStatusGroup,[i2.ControlContainer],(null as any),(null as any)),
      (_l()(),i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          4,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n		Nombre\n		'])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ProductoEditComponent_1)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n	'])),(_l()(),
          i0.ɵted((null as any),['	\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          7,'input',[['class','form-control'],['name','nombre'],['required',''],['type',
              'text']],[[1,'required',0],[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'ngModelChange'],[(null as any),
              'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ProductoEditComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,18)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,18).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,18)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,18)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.producto.nombre = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(16384,(null as any),0,i2.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i2.RequiredValidator]),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i2.DefaultValueAccessor]),i0.ɵdid(671744,[['nombre',4]],0,i2.NgModel,
          [[2,i2.ControlContainer],[2,i2.NG_VALIDATORS],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,
          (null as any),i2.NgControl,(null as any),[i2.NgModel]),i0.ɵdid(16384,(null as any),
          0,i2.NgControlStatus,[i2.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),['	\n\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          4,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n		Descripción\n		'])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ProductoEditComponent_2)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n	'])),(_l()(),
          i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          7,'textarea',[['class','form-control'],['name','descripcion'],['required',
              '']],[[1,'required',0],[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'ngModelChange'],[(null as any),
              'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ProductoEditComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,33)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,33).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,33)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,33)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.producto.descripcion = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(16384,(null as any),0,i2.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i2.RequiredValidator]),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i2.DefaultValueAccessor]),i0.ɵdid(671744,[['descripcion',4]],0,i2.NgModel,
          [[2,i2.ControlContainer],[2,i2.NG_VALIDATORS],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,
          (null as any),i2.NgControl,(null as any),[i2.NgModel]),i0.ɵdid(16384,(null as any),
          0,i2.NgControlStatus,[i2.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),['\n\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          4,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n		Precio\n		'])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ProductoEditComponent_3)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n	'])),(_l()(),
          i0.ɵted((null as any),['\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          8,'input',[['class','form-control'],['name','precio'],['pattern','[0-9]+'],
              ['required',''],['type','text']],[[1,'required',0],[1,'pattern',0],[2,
              'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',
              (null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],
              [2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],[[(null as any),
              'ngModelChange'],[(null as any),'input'],[(null as any),'blur'],[(null as any),
              'compositionstart'],[(null as any),'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ProductoEditComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,48)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,48).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,48)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,48)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.producto.precio = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(16384,(null as any),0,i2.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i0.ɵdid(540672,(null as any),0,
          i2.PatternValidator,([] as any[]),{pattern:[0,'pattern']},(null as any)),
      i0.ɵprd(1024,(null as any),i2.NG_VALIDATORS,(p0_0:any,p1_0:any) => {
        return [p0_0,p1_0];
      },[i2.RequiredValidator,i2.PatternValidator]),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i2.DefaultValueAccessor]),i0.ɵdid(671744,[['precio',4]],0,i2.NgModel,
          [[2,i2.ControlContainer],[2,i2.NG_VALIDATORS],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,
          (null as any),i2.NgControl,(null as any),[i2.NgModel]),i0.ɵdid(16384,(null as any),
          0,i2.NgControlStatus,[i2.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),['\n\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'label',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Imagen'])),(_l()(),i0.ɵted((null as any),
          ['\n	'])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),
          View_ProductoEditComponent_4)),i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,
          i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'input',[['class',
          'form-control'],['type','file']],(null as any),[[(null as any),'change']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ProductoEditComponent = _v.component;
            if (('change' === en)) {
              const pd_0:any = ((<any>_co.fileChangeEvent($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['	\n	'])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),0,'br',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n	'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'input',[['class',
          'btn btn-success'],['type','submit']],[[8,'value',0],[8,'disabled',0]],(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i1.ProductoEditComponent = _v.component;
    const currVal_8:boolean = (!i0.ɵnov(_v,22).valid && i0.ɵnov(_v,22).touched);
    _ck(_v,14,0,currVal_8);
    const currVal_17:any = '';
    _ck(_v,19,0,currVal_17);
    const currVal_18:any = 'nombre';
    const currVal_19:any = _co.producto.nombre;
    _ck(_v,22,0,currVal_18,currVal_19);
    const currVal_20:boolean = (!i0.ɵnov(_v,37).valid && i0.ɵnov(_v,37).touched);
    _ck(_v,29,0,currVal_20);
    const currVal_29:any = '';
    _ck(_v,34,0,currVal_29);
    const currVal_30:any = 'descripcion';
    const currVal_31:any = _co.producto.descripcion;
    _ck(_v,37,0,currVal_30,currVal_31);
    const currVal_32:boolean = (!i0.ɵnov(_v,53).valid && i0.ɵnov(_v,53).touched);
    _ck(_v,44,0,currVal_32);
    const currVal_42:any = '';
    _ck(_v,49,0,currVal_42);
    const currVal_43:any = '[0-9]+';
    _ck(_v,50,0,currVal_43);
    const currVal_44:any = 'precio';
    const currVal_45:any = _co.producto.precio;
    _ck(_v,53,0,currVal_44,currVal_45);
    const currVal_46:any = _co.is_edit;
    _ck(_v,61,0,currVal_46);
  },(_ck,_v) => {
    var _co:i1.ProductoEditComponent = _v.component;
    const currVal_0:any = _co.titulo;
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = i0.ɵnov(_v,9).ngClassUntouched;
    const currVal_2:any = i0.ɵnov(_v,9).ngClassTouched;
    const currVal_3:any = i0.ɵnov(_v,9).ngClassPristine;
    const currVal_4:any = i0.ɵnov(_v,9).ngClassDirty;
    const currVal_5:any = i0.ɵnov(_v,9).ngClassValid;
    const currVal_6:any = i0.ɵnov(_v,9).ngClassInvalid;
    const currVal_7:any = i0.ɵnov(_v,9).ngClassPending;
    _ck(_v,5,0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
    const currVal_9:any = (i0.ɵnov(_v,19).required? '': (null as any));
    const currVal_10:any = i0.ɵnov(_v,24).ngClassUntouched;
    const currVal_11:any = i0.ɵnov(_v,24).ngClassTouched;
    const currVal_12:any = i0.ɵnov(_v,24).ngClassPristine;
    const currVal_13:any = i0.ɵnov(_v,24).ngClassDirty;
    const currVal_14:any = i0.ɵnov(_v,24).ngClassValid;
    const currVal_15:any = i0.ɵnov(_v,24).ngClassInvalid;
    const currVal_16:any = i0.ɵnov(_v,24).ngClassPending;
    _ck(_v,17,0,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15,
        currVal_16);
    const currVal_21:any = (i0.ɵnov(_v,34).required? '': (null as any));
    const currVal_22:any = i0.ɵnov(_v,39).ngClassUntouched;
    const currVal_23:any = i0.ɵnov(_v,39).ngClassTouched;
    const currVal_24:any = i0.ɵnov(_v,39).ngClassPristine;
    const currVal_25:any = i0.ɵnov(_v,39).ngClassDirty;
    const currVal_26:any = i0.ɵnov(_v,39).ngClassValid;
    const currVal_27:any = i0.ɵnov(_v,39).ngClassInvalid;
    const currVal_28:any = i0.ɵnov(_v,39).ngClassPending;
    _ck(_v,32,0,currVal_21,currVal_22,currVal_23,currVal_24,currVal_25,currVal_26,
        currVal_27,currVal_28);
    const currVal_33:any = (i0.ɵnov(_v,49).required? '': (null as any));
    const currVal_34:any = (i0.ɵnov(_v,50).pattern? i0.ɵnov(_v,50).pattern: (null as any));
    const currVal_35:any = i0.ɵnov(_v,55).ngClassUntouched;
    const currVal_36:any = i0.ɵnov(_v,55).ngClassTouched;
    const currVal_37:any = i0.ɵnov(_v,55).ngClassPristine;
    const currVal_38:any = i0.ɵnov(_v,55).ngClassDirty;
    const currVal_39:any = i0.ɵnov(_v,55).ngClassValid;
    const currVal_40:any = i0.ɵnov(_v,55).ngClassInvalid;
    const currVal_41:any = i0.ɵnov(_v,55).ngClassPending;
    _ck(_v,47,0,currVal_33,currVal_34,currVal_35,currVal_36,currVal_37,currVal_38,
        currVal_39,currVal_40,currVal_41);
    const currVal_47:any = i0.ɵinlineInterpolate(1,'',_co.titulo,'');
    const currVal_48:boolean = !i0.ɵnov(_v,7).form.valid;
    _ck(_v,67,0,currVal_47,currVal_48);
  });
}
export function View_ProductoEditComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'producto-edit',
      ([] as any[]),(null as any),(null as any),(null as any),View_ProductoEditComponent_0,
      RenderType_ProductoEditComponent)),i0.ɵprd(512,(null as any),i4.ProductoService,
      i4.ProductoService,[i5.Http]),i0.ɵdid(114688,(null as any),0,i1.ProductoEditComponent,
      [i6.ActivatedRoute,i6.Router,i4.ProductoService],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,2,0);
      },(null as any));
}
export const ProductoEditComponentNgFactory:i0.ComponentFactory<i1.ProductoEditComponent> = i0.ɵccf('producto-edit',
    i1.ProductoEditComponent,View_ProductoEditComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3Jlc3RyYWRhei9hbmd1bGFyLXdlYnBhY2svd2VicGFjay1hbmd1bGFyNC9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdG8tZWRpdC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvcmVzdHJhZGF6L2FuZ3VsYXItd2VicGFjay93ZWJwYWNrLWFuZ3VsYXI0L3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0by1lZGl0LmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL3Jlc3RyYWRhei9hbmd1bGFyLXdlYnBhY2svd2VicGFjay1hbmd1bGFyNC9zcmMvYXBwL3ZpZXdzL3Byb2R1Y3RvLWFkZC5odG1sIiwibmc6Ly8vVXNlcnMvcmVzdHJhZGF6L2FuZ3VsYXItd2VicGFjay93ZWJwYWNrLWFuZ3VsYXI0L3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0by1lZGl0LmNvbXBvbmVudC50cy5Qcm9kdWN0b0VkaXRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aDM+e3sgdGl0dWxvIH19PC9oMz5cbjxociAvPlxuXG48Zm9ybSAjZm9ybVByb2R1Y3RvPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KCk7XCIgY2xhc3M9XCJjb2wtbGctNlwiIGlkPVwiZm9ybS1wcm9kdWN0b1wiPlxuXHQ8bGFiZWw+XG5cdFx0Tm9tYnJlXG5cdFx0PHNwYW4gKm5nSWY9XCIhbm9tYnJlLnZhbGlkICYmIG5vbWJyZS50b3VjaGVkXCIgY2xhc3M9XCJsYWJlbCBsYWJlbC1kYW5nZXJcIj5FbCBub21icmUgZXMgb2JsaWdhdG9yaW8uPC9zcGFuPlxuXHQ8L2xhYmVsPlx0XG5cdDxpbnB1dCB0eXBlPVwidGV4dFwiICNub21icmU9XCJuZ01vZGVsXCIgbmFtZT1cIm5vbWJyZVwiIFsobmdNb2RlbCldPVwicHJvZHVjdG8ubm9tYnJlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCAvPlx0XG5cblx0PGxhYmVsPlxuXHRcdERlc2NyaXBjacOzblxuXHRcdDxzcGFuICpuZ0lmPVwiIWRlc2NyaXBjaW9uLnZhbGlkICYmIGRlc2NyaXBjaW9uLnRvdWNoZWRcIiBjbGFzcz1cImxhYmVsIGxhYmVsLWRhbmdlclwiPkxhIGRlc2NyaXBjaW9uIGVzIG9ibGlnYXRvcmlhLjwvc3Bhbj5cblx0PC9sYWJlbD5cblx0PHRleHRhcmVhICNkZXNjcmlwY2lvbj1cIm5nTW9kZWxcIiBuYW1lPVwiZGVzY3JpcGNpb25cIiBbKG5nTW9kZWwpXT1cInByb2R1Y3RvLmRlc2NyaXBjaW9uXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuXG5cdDxsYWJlbD5cblx0XHRQcmVjaW9cblx0XHQ8c3BhbiAqbmdJZj1cIiFwcmVjaW8udmFsaWQgJiYgcHJlY2lvLnRvdWNoZWRcIiBjbGFzcz1cImxhYmVsIGxhYmVsLWRhbmdlclwiPkVsIHByZWNpbyBlcyBvYmxpZ2F0b3Jpby48L3NwYW4+XG5cdDwvbGFiZWw+XG5cdDxpbnB1dCB0eXBlPVwidGV4dFwiICNwcmVjaW89XCJuZ01vZGVsXCIgbmFtZT1cInByZWNpb1wiIFsobmdNb2RlbCldPVwicHJvZHVjdG8ucHJlY2lvXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBwYXR0ZXJuPVwiWzAtOV0rXCIvPlxuXG5cdDxsYWJlbD5JbWFnZW48L2xhYmVsPlxuXHQ8ZGl2ICpuZ0lmPVwiaXNfZWRpdFwiPlxuXHRcdDxpbWcgc3JjPVwiaHR0cDovL2VqZW1wbG8uZGV2L3VwbG9hZHMve3twcm9kdWN0by5pbWFnZW59fVwiIHdpZHRoPVwiNjBweFwiIC8+XG5cdDwvZGl2PlxuXHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudCk7XCIvPlx0XG5cdDxiciAvPlxuXHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwie3t0aXR1bG99fVwiIFtkaXNhYmxlZF09XCIhZm9ybVByb2R1Y3RvLmZvcm0udmFsaWRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlxuPC9mb3JtPiIsIjxwcm9kdWN0by1lZGl0PjwvcHJvZHVjdG8tZWRpdD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ01FO01BQUE7TUFBQSxnQkFBeUU7Ozs7b0JBTXpFO01BQUE7TUFBQSxnQkFBbUY7Ozs7b0JBTW5GO01BQUE7TUFBQSxnQkFBeUU7Ozs7b0JBSzFFO01BQUEsd0VBQXFCO2FBQUEsMEJBQ3BCO01BQUE7TUFBQSxnQkFBeUU7OztJQUFwRTtRQUFBO0lBQUwsV0FBSyxTQUFMOzs7O29CQXhCRjtNQUFBLHdFQUFJO2FBQUEseUJBQWlCLHVDQUNyQjthQUFBO1VBQUEsNENBQU07TUFBQSxXQUVOO01BQUE7TUFBQTtVQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtJQUFBO0lBQTZCO01BQUE7TUFBQTtJQUFBO0lBQTdCO0VBQUEsdUNBQUE7TUFBQSxvQ0FBQTtNQUFBLGtGQUFBO01BQUEsb0VBQUE7TUFBQTtNQUEwRix3Q0FDekY7VUFBQTtVQUFBLGdCQUFPLG1EQUVOO2lCQUFBO2FBQUE7VUFBQSx3QkFBeUcsd0NBQ2xHO2lCQUFBLDBCQUNSO1VBQUE7Y0FBQTtjQUFBO2NBQUE7a0JBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQW1EO2NBQUE7Y0FBQTtZQUFBO1lBQW5EO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1VBQUEsZ0RBQUE7VUFBQTtZQUFBO1VBQUE7VUFBQTtZQUFBO1VBQUEsb0NBQUE7VUFBQTtVQUFBLHFFQUFBO1VBQUEsOERBQUE7VUFBQSxpRUFBaUg7aUJBQUEsNEJBRWpIO1VBQUE7VUFBQSxnQkFBTztNQUVOO2FBQUE7VUFBQSx3QkFBd0gsd0NBQ2pIO2lCQUFBLHlCQUNSO1VBQUE7Y0FBQTtjQUFBO2NBQUE7a0JBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQW9EO2NBQUE7Y0FBQTtZQUFBO1lBQXBEO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1VBQUEsZ0RBQUE7VUFBQTtZQUFBO1VBQUE7VUFBQTtZQUFBO1VBQUEsb0NBQUE7VUFBQTtVQUFBLHFFQUFBO1VBQUEsOERBQUE7VUFBQSxpRUFBZ0k7aUJBQUEsMkJBRWhJO1VBQUE7VUFBQSxnQkFBTyxtREFFTjtpQkFBQTthQUFBO1VBQUEsd0JBQXlHLHdDQUNsRztpQkFBQSx5QkFDUjtVQUFBO2NBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQW1EO2NBQUE7Y0FBQTtZQUFBO1lBQW5EO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1VBQUEsZ0RBQUE7OEJBQUE7YUFBQTtRQUFBO01BQUE7VUFBQTtZQUFBO1VBQUEsb0NBQUE7VUFBQTtVQUFBLHFFQUFBO1VBQUEsOERBQUE7VUFBQSxpRUFBaUk7aUJBQUEsMkJBRWpJO1VBQUE7VUFBQSxnQkFBTywyQ0FBYztVQUFBLFVBQ3JCO1VBQUEsc0NBQUE7d0JBQUEsbUNBRU07VUFBQSxVQUNOO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBd0M7Y0FBQTtjQUFBO1lBQUE7WUFBeEM7VUFBQSxnQ0FBNkU7TUFDN0U7VUFBQSwwREFBTTtVQUFBLFVBQ047VUFBQTtVQUFBLDRDQUFzRztVQUFBOztJQXRCL0Y7SUFBTixZQUFNLFNBQU47SUFFcUc7SUFBdEcsWUFBc0csVUFBdEc7SUFBcUM7SUFBYztJQUFuRCxZQUFxQyxXQUFjLFVBQW5EO0lBSU87SUFBTixZQUFNLFVBQU47SUFFMkc7SUFBNUcsWUFBNEcsVUFBNUc7SUFBaUM7SUFBbUI7SUFBcEQsWUFBaUMsV0FBbUIsVUFBcEQ7SUFJTztJQUFOLFlBQU0sVUFBTjtJQUVxRztJQUF0RyxZQUFzRyxVQUF0RztJQUErRztJQUEvRyxZQUErRyxVQUEvRztJQUFxQztJQUFjO0lBQW5ELFlBQXFDLFdBQWMsVUFBbkQ7SUFHSztJQUFMLFlBQUssVUFBTDs7O0lBdkJHO0lBQUE7SUFHSjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFdBQUEscUVBQUE7SUFLQztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsWUFBQSxVQUFBO1FBQUEsVUFBQTtJQU1BO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBLFdBQUE7UUFBQSxxQkFBQTtJQU1BO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUEsV0FBQSxXQUFBO1FBQUEsZ0NBQUE7SUFRcUI7SUFBbUI7SUFBeEMsWUFBcUIsV0FBbUIsVUFBeEM7Ozs7b0JDNUJEO01BQUE7c0NBQUE7eUJBQUEsa0JBQUE7TUFBQTs7UUFBQTs7OzsifQ==