interface Car {
  brand: string;
  model: string;
  year: number;
  motor?: string;
}

function createCar(
  brand: string,
  model: string,
  year: number,
  motor?: string
): Car {
  return { brand, model, year, ...(motor && { motor }) };
}

const myCar = createCar("honda", "city", 2021);

console.log(myCar);
