import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, Mensaje } from '../../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.html',
  styleUrls: ['./chat.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Chat implements OnInit {
  mensajes: Mensaje[] = [];
  nuevoMensaje: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.obtenerMensajes((mensajes) => {
      this.mensajes = mensajes;
    });
  }

  enviarMensaje() {
    if (this.nuevoMensaje.trim()) {
      this.chatService.enviarMensaje(this.nuevoMensaje);
      this.nuevoMensaje = '';
    }
  }
}

