// validating data on runtime is possible to do manually, but tricky
// so a library like 'zod' is great for that
import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project';

// zod has a bunch of useful methods likr 'minLength' we can use on our properties
const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  // something: z.string(),
  // now this will trigger an error, because 'something' is not a property in our data structure
});

type Tour = z.infer<typeof tourSchema>;

/* type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}; */

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      // this is not needed with axios
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData: Tour[] = await response.json();

    const result = tourSchema.array().safeParse(rawData);
    console.log(result);

    if (!result.success) {
      throw new Error(`invalid data: ${result.error}`);
    }

    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.log(errorMsg);
    return [];
  }
}

// here tours is type: Tour[]
const tours = await fetchData(url);
tours.map((tour) => console.log(tour.name));
