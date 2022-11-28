namespace ChuckNorrisJokes.Models
{
    public class SearchResult<T>
    {
        public int Total { get; set; }
        public IEnumerable<T> Result { get; set; }
    }
}
