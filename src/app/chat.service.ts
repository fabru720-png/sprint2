import { Injectable } from '@angular/core';
import { Database, ref, onValue, push } from '@angular/fire/database';
import { Auth } from '@angular/fire/auth';

export interface Mensaje {
  usuario: string;
  texto: string;
  hora: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private rutaMensajes = 'mensajes';

  constructor(private db: Database, private auth: Auth) {}

  enviarMensaje(texto: string) {
    const mensajesRef = ref(this.db, this.rutaMensajes);

    const mensaje: Mensaje = {
      usuario: this.auth.currentUser?.email || 'Anónimo',
      texto: texto,
      hora: new Date().toLocaleTimeString()
    };

    push(mensajesRef, mensaje);
  }

  obtenerMensajes(callback: (mensajes: Mensaje[]) => void) {
    const mensajesRef = ref(this.db, this.rutaMensajes);

    onValue(mensajesRef, snapshot => {
      if (snapshot.exists()) {
        callback(Object.values(snapshot.val()));
      } else {
        callback([]);
      }
    });
  }
}
