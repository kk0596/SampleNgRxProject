import { createAction, props } from "@ngrx/store";

 export const increment = createAction('increment'); //name should be unique
 export const decrement = createAction('decrement');
 export const reset = createAction('reset');


 export const customIncrement = createAction( 'customValue', props<{count:number}>() );