using ChuckNorrisJokes.Services;

namespace ChuckNorrisJokes.Interfaces
{
    public interface IBaseService<T>
    {
        HttpClientService clientService { get; }
    }
}
