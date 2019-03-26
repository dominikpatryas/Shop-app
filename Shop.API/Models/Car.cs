using System;
using System.Collections.Generic;

namespace Shop.API.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Engine { get; set; }
        public int HorsePower { get; set; }
        public string Gear { get; set; }
        public int Year { get; set; }
        public int Price { get; set; }
        public int Acceleration { get; set; }
        public DateTime Rent { get; set; }
        public DateTime EndRent { get; set; }
        public ICollection<Photo> Photos { get; set; }

    }
}