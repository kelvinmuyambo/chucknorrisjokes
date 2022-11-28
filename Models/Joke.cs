using Newtonsoft.Json;

namespace ChuckNorrisJokes.Models
{
    public class Joke
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("categories")]
        public IEnumerable<string> Categories { get; set; }

        [JsonProperty("icon_url")]
        public string IconUrl { get; set; }

        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("value")]
        public string Value { get; set; }
    }
}
