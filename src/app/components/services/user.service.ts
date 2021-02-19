import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class UsersService {
  public baseUrl = environment.apiUrl;

  constructor() {
    console.log(this.baseUrl);
  }
}
