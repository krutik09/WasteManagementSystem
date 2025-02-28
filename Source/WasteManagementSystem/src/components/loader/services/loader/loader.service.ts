import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = signal<boolean>(false);

  async showLoading(): Promise<boolean> {
    this.isLoading.set(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.isLoading.set(false);
    return true;
  }
  
}
