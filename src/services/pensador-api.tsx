export default class PensadorApi {
  private url = {
    pensadorApi: "https://pensador-api.vercel.app/",
  };

  public async GetFrases(): Promise<any> {
    const content = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    };

    const req = await fetch(`${this.url.pensadorApi}`, content);

    return req.json();
  }
}
