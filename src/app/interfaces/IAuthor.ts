export default interface IAuthor {
  authorId: number;
  name: string;
  password: string;
  isAlive: boolean;
}

//Når vi henter fra API kan det drille os hvis vores properties ikke er nulstillet men lad os nu se...
