import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ahorcado.html',
  styleUrls: ['./ahorcado.css']
})
export class Ahorcado implements OnInit {
  palabras: string[] = ["ANGULAR", "JAVASCRIPT", "TYPESCRIPT", "FIREBASE", "COMPONENTE"];
  palabraSecreta: string = "";
  palabraActual: string[] = [];
  letras: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letraUsada: string[] = [];
  intentosRestantes: number = 6;

  ngOnInit() {
    this.reiniciarJuego();
  }

  reiniciarJuego() {
    this.palabraSecreta = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraActual = Array(this.palabraSecreta.length).fill("_");
    this.letraUsada = [];
    this.intentosRestantes = 6;
  }

  adivinar(letra: string) {
    letra = letra.toUpperCase();
    if (this.letraUsada.includes(letra) || this.intentosRestantes <= 0) return;

    this.letraUsada.push(letra);

    if (this.palabraSecreta.includes(letra)) {
      for (let i = 0; i < this.palabraSecreta.length; i++) {
        if (this.palabraSecreta[i] === letra) {
          this.palabraActual[i] = letra;
        }
      }
    } else {
      this.intentosRestantes--;
    }

    this.verificarJuego();
  }

  verificarJuego() {
    if (!this.palabraActual.includes("_")) {
      alert("🎉 ¡Ganaste el Ahorcado!");
      this.reiniciarJuego();
    }

    if (this.intentosRestantes <= 0) {
      alert(`💀 Perdiste! La palabra era: ${this.palabraSecreta}`);
      this.reiniciarJuego();
    }
  }
}
