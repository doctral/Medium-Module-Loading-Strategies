import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreloadingStrategy implements PreloadingStrategy{

    // loadModule could be any function name here
    preload(route: Route, loadModule: Function): Observable<any> {
        return route.data && route.data.applyPreload ? loadModule() : of(null);
    }
}