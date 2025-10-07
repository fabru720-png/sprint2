import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mayor-menor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mayor-menor.html',
  styleUrls: ['./mayor-menor.css']
})
export class MayorMenor implements OnInit {
  mazo: number[] = [];
  cartaActual!: number;
  cartaSiguiente!: number | null;
  puntos: number = 0;

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.mazo = Array.from({ length: 13 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
    this.cartaActual = this.mazo.pop()!;
    this.cartaSiguiente = this.mazo.pop() || null;
    this.puntos = 0;
  }

  jugar(opcion: "mayor" | "menor") {
    if (this.cartaSiguiente == null) {
      alert("🎯 Juego terminado! Reiniciando...");
      this.iniciarJuego();
      return;
    }

    const acierto =
      (opcion === "mayor" && this.cartaSiguiente > this.cartaActual) ||
      (opcion === "menor" && this.cartaSiguiente < this.cartaActual);

    if (acierto) {
      this.puntos++;
    } else {
      alert("❌ Fallaste!");
      this.puntos = 0;
    }

    this.cartaActual = this.cartaSiguiente;
    this.cartaSiguiente = this.mazo.pop() || null;
  }
}
