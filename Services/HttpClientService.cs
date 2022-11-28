using System.IO;
using System.Text.Json;

namespace ChuckNorrisJokes.Services
{
    public class HttpClientService
    {
        private HttpClient client;
        private string BASE_ULR;
        public HttpClientService() {
            this.client = new HttpClient();
            this.BASE_ULR= "https://api.chucknorris.io/jokes/";
        }

        public async Task<T> GetAsync<T>(string param = "")
        {
            string url = BASE_ULR + param;
            var response = await client.GetStreamAsync(url);
            var deserialized = await JsonSerializer.DeserializeAsync<T>(response, new JsonSerializerOptions() { PropertyNameCaseInsensitive = true });
            return deserialized ?? throw new Exception("UNDEFINED Response");
        }
    }
}
