/**
 * A generic repository class that can store any type of data.
 * @template T The type of items stored in the repository.
 */
class Repository<T> {
  private items: T[] = [];
  /**
   * Saves an item into the repository.
   * @param data The item to be stored.
   */
  save(data: T): void {
    this.items.push(data);
  }
  /**
   * Retrieves all stored items from the repository.
   * @returns An array of all stored items of type T.
   */
  getAll(): T[] {
    return this.items;
  }
}

interface User {
  name: string;
  email: string;
}

const userRepo = new Repository<User>();
userRepo.save({ name: "Alice", email: "alice@example.com" });
userRepo.save({ name: "Bob", email: "bob@example.com" });

console.log(userRepo.getAll());
