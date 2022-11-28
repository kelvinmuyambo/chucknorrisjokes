namespace ChuckNorrisJokes.Interfaces
{
    public interface IBaseService<T>
    {
        Task<IEnumerable<T>> GetAllAsync(string? param);
    }
}
