import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {}
  formUser(User) {
    const endpoint = 'http://localhost:8000/usercompte';
    const formData: FormData = new FormData();
    formData.append('nom', User.nom);
    formData.append('prenom', User.prenom);
    formData.append('username', User.username);
    formData.append('password', User.password);
    formData.append('imageFile', User.imageFile);
    formData.append('statut', User.statut);
    formData.append('ninea', User.ninea);
    formData.append('adresse', User.adresse);
    formData.append('raison_sociale', User.raison_sociale);
    return this.httpClient.post(endpoint, formData);
    }

      partUser(User) {
        const endpoint = 'http://localhost:8000/adminuser';
        const formData: FormData = new FormData();
        formData.append('nom', User.nom);
        formData.append('prenom', User.prenom);
        formData.append('username', User.username);
        formData.append('password', User.password);
        formData.append('imageFile', User.imageFile);
        formData.append('statut', User.statut);
        formData.append('ninea', User.ninea);
        formData.append('adresse', User.adresse);
        formData.append('raison_sociale', User.raison_sociale);
        return this.httpClient.post(endpoint, formData);
        }

  compte(User) {
      const endpoint = 'http://localhost:8000/api/compte';
      const formData: FormData = new FormData();
      formData.append('ninea', User.ninea);
      return this.httpClient.post(endpoint, formData);
      }
  depot(User) {
      const endpoint = 'http://localhost:8000/api/depot';
      const formData: FormData = new FormData();
      formData.append('numerocompte', User.numerocompte);
      formData.append('montant', User.montant);
      return this.httpClient.post(endpoint, formData);
      }


      retrait(User) {
        const endpoint = 'http://localhost:8000/api/retrait';
        const formData: FormData = new FormData();
        formData.append('codeenvoi', User.codeenvoi);
        formData.append('CNIretrai', User.CNIretrai);
        formData.append('statut', User.statut);


        return this.httpClient.post(endpoint, User);
      }

      envoi(User) {
        const endpoint = 'http://localhost:8000/api/envoi';
        const formData: FormData = new FormData();
        formData.append('montantenvoi', User.montantenvoi);
        formData.append('nomenvoi', User.nomenvoi);
        formData.append('prenomenvoi', User.prenomenvoi);
        formData.append('telephoneenvoi', User.telephoneenvoi);
        formData.append('CNIenvoi', User.CNIenvoi);
        formData.append('nomretrai', User.nomretrai);
        formData.append('prenomretrai', User.prenomretrai);
        formData.append('telephoneretrai', User.telephoneretrai);
        return this.httpClient.post(endpoint, formData);
      }
      User(User) {
        const endpoint = 'http://localhost:8000/api/user';
        const formData: FormData = new FormData();
        formData.append('nom', User.nom);
        formData.append('prenom', User.prenom);
        formData.append('username', User.username);
        formData.append('password', User.password);
        formData.append('imageFile', User.imageFile);
        formData.append('statut', User.statut);
        return this.httpClient.post(endpoint, formData);
        }
}
