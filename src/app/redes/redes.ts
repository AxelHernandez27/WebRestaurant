import { Component } from '@angular/core';

@Component({
  selector: 'app-redes',
  imports: [],
  templateUrl: './redes.html',
  styleUrl: './redes.css'
})
export class Redes {

    ngOnInit(): void {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
      }, 500);
    });
  }


}
