'use server'

import { revalidatePath } from "next/cache";
import * as Planet from '@/models/Planet';

export async function createPlanetAction(formData: FormData) {
    const name = formData.get('name');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');

    if (typeof name !== 'string' || typeof description !== 'string' || typeof imageUrl !== 'string') {
        throw new Error('Invalid data');
    }

    await Planet.createPlanet({name, description, imageUrl});
    revalidatePath("/")
  }

  export async function deletePlanetAction(id: number) {
      await Planet.deletePlanet(id);

      revalidatePath("/")
}