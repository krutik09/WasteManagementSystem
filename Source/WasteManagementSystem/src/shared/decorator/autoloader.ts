import { inject } from "@angular/core";
import { LoaderService } from "../../components/loader/services/loader/loader.service";


// Create a decorator function
export function showLoader(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; // Save the original method

  descriptor.value =async function (...args: any[]) {
    const loaderService = inject(LoaderService); // Get the loader service instance
    if (!loaderService) {
        throw new Error("LoaderService is not available. Make sure it's injected in the class.");
      }
    await loaderService.showLoading(); // Start loader before executing function

    // Call the original function and handle async operations
    const result = originalMethod.apply(this, args);
    return result
  };

  return descriptor;
}
