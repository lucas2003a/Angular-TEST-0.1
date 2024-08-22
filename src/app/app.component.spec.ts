import { TestBed } from '@angular/core/testing';                // => Es una utilidad proporcionada por Angular para crear un entorno de pruebas
import { RouterTestingModule } from '@angular/router/testing';  // => Es un módulo de prueba para simular el enrutamiento.
//Se usa aquí para probar el componente que podría depender del enrutamiento.

import { AppComponent } from './app.component';                 // => Es el componente que se está probando.

describe('AppComponent', () => {

  //Configuración antes de cada prueba
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  //Test 1: Verifica que el componente se crea correctamente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //Test 2: Verifica que el título se 'AppAng'
  it(`should have as title 'AppAng'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AppAng');
  });

  //Test 3: Verifica que el título se renderiza en la vista
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AppAng app is running!');
  });
});


//Jasmine es un framework de pruebas unitarias para JavaScript.
//Proporciona una estructura para escribir pruebas y aserciones en tu código.

//TestBed es una parte del framework de pruebas de Angular (específicamente parte de @angular/core/testing).
//Es una utilidad que ayuda a configurar y crear un entorno para probar componentes, servicios, y otros elementos de Angular.
