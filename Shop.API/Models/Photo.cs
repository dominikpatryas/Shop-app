namespace Shop.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string PublicId { get; set; }
        public Car Car { get; set; }
        public int CarId { get; set; }
        public bool IsMain { get; set; }

    }
}